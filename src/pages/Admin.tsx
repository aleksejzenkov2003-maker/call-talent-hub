import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2, LogOut, RefreshCw, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Application {
  id: string;
  name: string;
  phone: string;
  messenger: string;
  experience: string;
  status: string;
  created_at: string;
}

const experienceLabels: Record<string, string> = {
  no_experience: "Нет опыта",
  less_than_year: "Менее 1 года",
  "1_3_years": "1-3 года",
  more_than_3: "Более 3 лет",
};

const statusLabels: Record<string, string> = {
  new: "Новая",
  in_progress: "В работе",
  contacted: "Связались",
  hired: "Принят",
  rejected: "Отклонена",
};

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [applications, setApplications] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate('/admin-login');
        return;
      }

      const { data: roleData } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', session.user.id)
        .eq('role', 'admin')
        .maybeSingle();

      if (!roleData) {
        await supabase.auth.signOut();
        navigate('/admin-login');
        return;
      }

      setIsCheckingAuth(false);
      fetchApplications();
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (!session) {
          navigate('/admin-login');
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchApplications = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('applications')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось загрузить заявки",
        variant: "destructive",
      });
    } else {
      setApplications(data || []);
    }
    setIsLoading(false);
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    const { error } = await supabase
      .from('applications')
      .update({ status: newStatus })
      .eq('id', id);

    if (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось обновить статус",
        variant: "destructive",
      });
    } else {
      setApplications(apps => 
        apps.map(app => app.id === id ? { ...app, status: newStatus } : app)
      );
      toast({
        title: "Статус обновлён",
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Удалить эту заявку?")) return;

    const { error } = await supabase
      .from('applications')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось удалить заявку",
        variant: "destructive",
      });
    } else {
      setApplications(apps => apps.filter(app => app.id !== id));
      toast({
        title: "Заявка удалена",
      });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin-login');
  };

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold text-card-foreground">
            Админ-панель SMBH
          </h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={fetchApplications}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Обновить
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Выйти
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-card rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-border">
            <h2 className="text-lg font-semibold text-card-foreground">
              Заявки ({applications.length})
            </h2>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : applications.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              Заявок пока нет
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Дата</TableHead>
                    <TableHead>Имя</TableHead>
                    <TableHead>Телефон</TableHead>
                    <TableHead>Мессенджер</TableHead>
                    <TableHead>Опыт</TableHead>
                    <TableHead>Статус</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {applications.map((app) => (
                    <TableRow key={app.id}>
                      <TableCell className="text-muted-foreground">
                        {new Date(app.created_at).toLocaleDateString('ru-RU', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </TableCell>
                      <TableCell className="font-medium">{app.name}</TableCell>
                      <TableCell>
                        <a href={`tel:${app.phone}`} className="text-primary hover:underline">
                          {app.phone}
                        </a>
                      </TableCell>
                      <TableCell>{app.messenger || "—"}</TableCell>
                      <TableCell>{experienceLabels[app.experience] || app.experience}</TableCell>
                      <TableCell>
                        <Select
                          value={app.status}
                          onValueChange={(value) => handleStatusChange(app.id, value)}
                        >
                          <SelectTrigger className="w-[140px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(statusLabels).map(([value, label]) => (
                              <SelectItem key={value} value={value}>
                                {label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(app.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Admin;

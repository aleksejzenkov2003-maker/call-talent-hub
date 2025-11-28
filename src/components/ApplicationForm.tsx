import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const ApplicationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    messenger: "",
    experience: "no_experience",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('applications').insert({
        name: formData.name,
        phone: formData.phone,
        messenger: formData.messenger,
        experience: formData.experience,
      });

      if (error) {
        toast({
          title: "Ошибка",
          description: "Не удалось отправить заявку. Попробуйте позже.",
          variant: "destructive",
        });
        return;
      }

      setIsSubmitted(true);
      toast({
        title: "Заявка отправлена!",
        description: "Наш HR свяжется с вами в ближайшее время.",
      });
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Произошла ошибка при отправке заявки.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="application-form" className="py-20 bg-dark text-white relative z-10">
      <div className="container mx-auto px-4 max-w-2xl relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Готовы попробовать?
          </h2>
          <p className="text-xl text-white/70">
            Оставьте заявку, мы свяжемся с вами, чтобы рассказать детали.
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-card p-8 rounded-2xl text-center shadow-2xl animate-fade-in">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-card-foreground">Заявка отправлена!</h3>
            <p className="text-muted-foreground">Наш HR свяжется с вами в ближайшее время.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-card p-8 md:p-10 rounded-2xl shadow-2xl">
            <div className="space-y-5">
              <div>
                <Label className="block text-sm font-medium mb-2 text-card-foreground">Имя</Label>
                <Input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Иван Иванов"
                  className="w-full h-12 px-4 rounded-lg bg-muted border-0 text-card-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <Label className="block text-sm font-medium mb-2 text-card-foreground">Телефон</Label>
                <Input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+7 (999) 000-00-00"
                  className="w-full h-12 px-4 rounded-lg bg-muted border-0 text-card-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <Label className="block text-sm font-medium mb-2 text-card-foreground">Telegram / WhatsApp</Label>
                <Input
                  type="text"
                  value={formData.messenger}
                  onChange={(e) => setFormData({ ...formData, messenger: e.target.value })}
                  placeholder="@username"
                  className="w-full h-12 px-4 rounded-lg bg-muted border-0 text-card-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <Label className="block text-sm font-medium mb-2 text-card-foreground">Опыт работы</Label>
                <select
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="flex h-12 w-full rounded-lg bg-muted px-4 text-sm text-card-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="no_experience">Нет опыта</option>
                  <option value="less_than_year">Менее 1 года</option>
                  <option value="1_3_years">1-3 года</option>
                  <option value="more_than_3">Более 3 лет</option>
                </select>
              </div>

              <Button
                type="submit"
                className="w-full text-lg h-14 mt-6 bg-hero-gradient hover:opacity-90 transition-opacity rounded-xl font-semibold shadow-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Отправка..." : "Отправить заявку"}
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                Нажимая кнопку, вы соглашаетесь с{" "}
                <Link to="/privacy" className="underline hover:text-foreground">
                  политикой конфиденциальности
                </Link>.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

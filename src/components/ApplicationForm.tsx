import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Check } from "lucide-react";

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

    // Здесь будет интеграция с Google Sheets
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Заявка отправлена!",
        description: "Наш HR свяжется с вами в ближайшее время.",
      });
    }, 1000);
  };

  return (
    <section id="application-form" className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-4 max-w-2xl relative">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[100px] rounded-full -z-10"></div>

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Готовы попробовать?
          </h2>
          <p className="text-xl text-muted-foreground">
            Оставьте заявку, мы свяжемся с вами, чтобы рассказать детали.
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-card p-8 rounded-2xl text-center shadow-2xl animate-fade-in border">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Заявка отправлена!</h3>
            <p className="text-muted-foreground">Наш HR свяжется с вами в ближайшее время.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-card p-8 md:p-10 rounded-2xl shadow-2xl border">
            <div className="space-y-6">
              <div>
                <Label className="block text-sm font-medium mb-1">Имя</Label>
                <Input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Иван Иванов"
                  className="w-full px-4 py-3 rounded-lg"
                />
              </div>

              <div>
                <Label className="block text-sm font-medium mb-1">Телефон</Label>
                <Input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+7 (999) 000-00-00"
                  className="w-full px-4 py-3 rounded-lg"
                />
              </div>

              <div>
                <Label className="block text-sm font-medium mb-1">Telegram / WhatsApp</Label>
                <Input
                  type="text"
                  value={formData.messenger}
                  onChange={(e) => setFormData({ ...formData, messenger: e.target.value })}
                  placeholder="@username"
                  className="w-full px-4 py-3 rounded-lg"
                />
              </div>

              <div>
                <Label className="block text-sm font-medium mb-1">Опыт работы</Label>
                <select
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="flex h-10 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="no_experience">Нет опыта</option>
                  <option value="less_than_year">Менее 1 года</option>
                  <option value="1_3_years">1-3 года</option>
                  <option value="more_than_3">Более 3 лет</option>
                </select>
              </div>

              <Button
                type="submit"
                className="w-full text-lg mt-4 shadow-xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Отправка..." : "Отправить заявку"}
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

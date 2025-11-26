import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";

export const ApplicationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    messenger: "",
    experience: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Здесь будет интеграция с Google Sheets
    // Пока просто симулируем отправку
    setTimeout(() => {
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      setIsSubmitting(false);
      setFormData({ name: "", phone: "", messenger: "", experience: "" });
    }, 1000);
  };

  return (
    <section id="application-form" className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Готовы попробовать? Оставьте заявку
          </h2>
          <p className="text-lg text-primary-foreground/90">
            Мы свяжемся с вами, чтобы рассказать детали вакансии
          </p>
        </div>
        <Card className="max-w-xl mx-auto p-8 bg-card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-card-foreground">Имя *</Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-background border-border"
                placeholder="Введите ваше имя"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-card-foreground">Телефон *</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-background border-border"
                placeholder="+7 (___) ___-__-__"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="messenger" className="text-card-foreground">Telegram / WhatsApp</Label>
              <Input
                id="messenger"
                type="text"
                value={formData.messenger}
                onChange={(e) => setFormData({ ...formData, messenger: e.target.value })}
                className="bg-background border-border"
                placeholder="@username или номер"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="experience" className="text-card-foreground">Опыт работы *</Label>
              <Select value={formData.experience} onValueChange={(value) => setFormData({ ...formData, experience: value })}>
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder="Выберите вариант" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="no-experience">Без опыта</SelectItem>
                  <SelectItem value="less-1year">Менее 1 года</SelectItem>
                  <SelectItem value="1-3years">1-3 года</SelectItem>
                  <SelectItem value="more-3years">Более 3 лет</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button 
              type="submit" 
              className="w-full bg-hero-gradient hover:opacity-90 transition-opacity text-lg py-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Отправка..." : "Отправить заявку"}
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Нажимая кнопку, вы соглашаетесь с{" "}
              <a href="#" className="underline hover:text-foreground">
                политикой обработки персональных данных
              </a>
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
};

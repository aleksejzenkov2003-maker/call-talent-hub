import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
              Удалённая работа менеджером по звонкам с{" "}
              <span className="text-primary">тёплыми клиентами</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Обрабатывайте входящие заявки, консультируйте клиентов по готовым скриптам и зарабатывайте выше среднего. Работа 2/2, из любой точки мира.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-hero-gradient hover:opacity-90 transition-opacity"
                onClick={scrollToForm}
              >
                Оставить заявку на вакансию
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Telegram / WhatsApp
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Мы свяжемся с вами в течение суток.
            </p>
          </div>
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img 
                src={heroImage} 
                alt="Профессиональный менеджер по работе с клиентами"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

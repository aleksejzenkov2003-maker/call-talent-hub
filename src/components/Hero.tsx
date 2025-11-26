import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-background py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
          <div className="animate-fade-in order-2 lg:order-1 z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6 text-foreground">
              Удалённая работа менеджером по звонкам с{" "}
              <span className="text-primary">тёплыми клиентами</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              Обрабатывайте входящие заявки, консультируйте клиентов по готовым скриптам и зарабатывайте выше среднего. Работа 2/2, из любой точки мира.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4 md:mb-6">
              <Button 
                size="lg" 
                className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-hero-gradient hover:opacity-90 transition-opacity w-full sm:w-auto"
                onClick={scrollToForm}
              >
                Оставить заявку на вакансию
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto"
              >
                <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Telegram / WhatsApp
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Мы свяжемся с вами в течение суток.
            </p>
          </div>
          <div className="relative animate-slide-up order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover max-w-md mx-auto lg:max-w-none">
              <img 
                src={heroImage} 
                alt="Профессиональный менеджер по работе с клиентами"
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

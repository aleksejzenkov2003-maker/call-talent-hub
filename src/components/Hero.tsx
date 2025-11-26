import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-background py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
          <div className="animate-fade-in order-2 lg:order-1 z-10">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium">
                Вакансия открыта
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 md:mb-8">
              <span className="text-foreground">Удалённая работа</span>
              <br />
              <span className="text-primary">менеджером по звонкам</span>
              <br />
              <span className="text-foreground">с тёплыми клиентами</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 md:mb-10 leading-relaxed max-w-xl">
              Обрабатывайте входящие заявки, консультируйте клиентов по готовым скриптам и зарабатывайте выше среднего. Работа 2/2, из любой точки мира.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4 md:mb-6">
              <Button 
                size="lg" 
                className="text-base md:text-lg px-8 md:px-10 py-6 md:py-7 bg-hero-gradient hover:opacity-90 transition-opacity w-full sm:w-auto rounded-xl font-semibold"
                onClick={scrollToForm}
              >
                Оставить заявку на вакансию
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base md:text-lg px-8 md:px-10 py-6 md:py-7 border-2 bg-card hover:bg-accent w-full sm:w-auto rounded-xl font-semibold"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Telegram / WhatsApp
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Мы свяжемся с вами в течение суток.
            </p>
          </div>
          <div className="relative animate-slide-up order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover max-w-lg mx-auto lg:max-w-none">
              <img 
                src={heroImage} 
                alt="Профессиональный менеджер по работе с клиентами"
                className="w-full h-auto object-cover aspect-square"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm px-8 py-4 rounded-2xl border border-border shadow-lg">
                <div className="text-4xl font-bold text-foreground text-center">2/2</div>
                <div className="text-sm text-muted-foreground text-center mt-1">График работы</div>
              </div>
              <div className="absolute bottom-6 left-6 bg-card/90 backdrop-blur-sm px-6 py-3 rounded-xl border border-border shadow-lg flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <div className="text-xs text-muted-foreground">Статус</div>
                  <div className="text-sm font-semibold text-foreground">Активный набор</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

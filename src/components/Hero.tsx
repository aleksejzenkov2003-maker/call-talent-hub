import { Button } from "@/components/ui/button";
import { Send, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="animate-fade-in order-2 lg:order-1 z-10">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Вакансия открыта
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-foreground">Удалённая работа</span>
              <br />
              <span className="text-primary">менеджером по звонкам</span>
              <br />
              <span className="text-foreground">с тёплыми клиентами</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Обрабатывайте входящие заявки, консультируйте клиентов по готовым скриптам и зарабатывайте выше среднего. Работа 2/2, из любой точки мира.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-hero-gradient hover:opacity-90 transition-opacity rounded-xl font-semibold shadow-lg"
                onClick={scrollToForm}
              >
                Оставить заявку на вакансию
                <Send className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2 rounded-xl font-semibold"
              >
                Telegram / WhatsApp
                <MessageCircle className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Мы свяжемся с вами в течение суток.
            </p>
          </div>
          <div className="relative animate-fade-in order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-xl max-w-lg mx-auto lg:max-w-none">
              <img 
                src={heroImage} 
                alt="Профессиональный менеджер по работе с клиентами"
                className="w-full h-auto object-cover aspect-square"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-card/90 backdrop-blur-sm px-10 py-5 rounded-2xl border-2 border-border shadow-xl">
                <div className="text-5xl font-bold text-foreground text-center">2/2</div>
                <div className="text-base text-muted-foreground text-center mt-1">График работы</div>
              </div>
              <div className="absolute bottom-8 left-8 bg-card/95 backdrop-blur-sm px-6 py-4 rounded-xl border-2 border-border shadow-xl flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <div className="text-xs text-muted-foreground">Статус</div>
                  <div className="text-base font-bold text-foreground">Активный набор</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

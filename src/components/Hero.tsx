import { Button } from "@/components/ui/button";
import { Send, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-image-wide.jpg";
export const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative overflow-hidden bg-background py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="animate-fade-in z-10 text-center lg:text-left">
            <div className="inline-block mb-6 mx-auto lg:mx-0">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Вакансия открыта
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 md:text-5xl">
              <span className="text-foreground">Удалённая работа</span>
              <br />
              <span className="text-primary">менеджером по звонкам</span>
              <br />
              <span className="text-foreground">с тёплыми клиентами</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Обрабатывайте входящие заявки, консультируйте клиентов по готовым скриптам и зарабатывайте выше среднего. Работа 2/2, из любой точки мира.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 py-6 bg-hero-gradient hover:opacity-90 transition-opacity rounded-xl font-semibold shadow-lg" onClick={scrollToForm}>
                Оставить заявку на вакансию
                <Send className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 rounded-xl font-semibold">
                Telegram 
                <MessageCircle className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground text-center lg:text-left">
              Мы свяжемся с вами в течение суток.
            </p>
          </div>
          <div className="relative animate-fade-in order-1 lg:order-2 hidden lg:block">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <img src={heroImage} alt="Профессиональный менеджер по работе с клиентами" className="w-full h-auto object-cover" />
              <div className="absolute top-12 left-8 bg-white px-6 py-3 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-foreground text-center">2/2</div>
                <div className="text-xs text-muted-foreground text-center">График работы</div>
              </div>
              <div className="absolute bottom-12 left-8 bg-white px-4 py-2.5 rounded-xl shadow-lg flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-1"></div>
                <div>
                  <div className="text-[10px] text-muted-foreground mb-0.5">Статус</div>
                  <div className="text-sm font-bold text-foreground">Активный набор</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
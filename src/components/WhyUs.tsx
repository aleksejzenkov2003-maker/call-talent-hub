import { Card } from "@/components/ui/card";
import { Heart, FileCheck, Banknote, Award, TrendingUp, Users } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Только тёплые заявки",
    description: "Работаете с клиентами, которые уже заинтересованы",
  },
  {
    icon: FileCheck,
    title: "Понятные скрипты",
    description: "Структура звонка полностью прописана",
  },
  {
    icon: Banknote,
    title: "Прозрачные условия",
    description: "Выплаты без задержек, всё честно",
  },
  {
    icon: Award,
    title: "Никакого давления",
    description: "Работаем через экспертность, а не агрессивные продажи",
  },
  {
    icon: TrendingUp,
    title: "Возможность роста",
    description: "Карьерное развитие для лучших сотрудников",
  },
  {
    icon: Users,
    title: "Команда поддержки",
    description: "Всегда поможем и подскажем",
  },
];

export const WhyUs = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-10 left-10 text-8xl text-primary/10 font-bold select-none hidden lg:block">?</div>
      <div className="absolute bottom-10 right-10 text-8xl text-primary/10 font-bold select-none hidden lg:block rotate-12">!</div>
      <div className="absolute top-1/2 left-5 w-20 h-20 border-4 border-primary/10 rounded-full hidden lg:block"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground">
          Почему выбирают нас
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          Преимущества работы в нашей компании
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 border-border bg-card animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-start text-left">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-hero-gradient transition-colors">
                    <Icon className="h-7 w-7 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold mb-2 text-card-foreground text-lg">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

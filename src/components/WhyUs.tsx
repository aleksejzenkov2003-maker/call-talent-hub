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
    <section className="py-20 bg-card/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Почему выбирают нас
          </h2>
          <div className="section-title-underline"></div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index} 
                className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-start text-left">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-hero-gradient transition-all">
                    <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold mb-2 text-lg">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

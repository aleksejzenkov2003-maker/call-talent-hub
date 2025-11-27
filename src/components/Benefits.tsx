import { Card } from "@/components/ui/card";
import { MapPin, Calendar, CreditCard, TrendingUp, GraduationCap, Users } from "lucide-react";

const benefits = [
  {
    icon: MapPin,
    title: "Полностью удалённый формат работы",
    description: "Работайте из любой точки мира, где есть интернет",
  },
  {
    icon: Calendar,
    title: "График 2/2, 10:00–20:00 МСК",
    description: "Последний звонок принимается до 19:00",
  },
  {
    icon: CreditCard,
    title: "Зарплата два раза в месяц",
    description: "5-го и 20-го числа без задержек",
  },
  {
    icon: TrendingUp,
    title: "Прозрачная мотивация",
    description: "Фиксированная ставка + бонусы за результат",
  },
  {
    icon: GraduationCap,
    title: "Бесплатное обучение",
    description: "Полное обучение и поддержка наставника",
  },
  {
    icon: Users,
    title: "Дружная команда",
    description: "Комфортная атмосфера и адекватное руководство",
  },
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-background text-foreground relative z-10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Что мы предлагаем
          </h2>
          <p className="text-muted-foreground text-lg">
            Условия, которые позволяют комфортно работать и зарабатывать
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className={`p-6 rounded-2xl transition-all duration-300 hover:shadow-card-hover ${
                  index === 3
                    ? 'bg-hero-gradient text-primary-foreground shadow-lg shadow-primary/20 transform md:-translate-y-2'
                    : 'bg-card border hover:border-primary/30'
                }`}
              >
                <div className="mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    index === 3 ? 'bg-white/20' : 'bg-primary/10'
                  }`}>
                    <Icon className={`h-6 w-6 ${index === 3 ? 'text-white' : 'text-primary'}`} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {benefit.title}
                </h3>
                <p className={`text-sm ${index === 3 ? 'text-white/90' : 'text-muted-foreground'}`}>
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

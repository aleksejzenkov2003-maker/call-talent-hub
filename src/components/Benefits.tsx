import { Card } from "@/components/ui/card";
import { MapPin, Calendar, CreditCard, TrendingUp, GraduationCap, Users, Award } from "lucide-react";

const benefits = [
  {
    icon: MapPin,
    title: "Полностью удалённый формат работы",
    description: "Работайте из любой точки мира",
    featured: false,
  },
  {
    icon: Calendar,
    title: "График 2/2, 10:00–20:00 МСК",
    description: "Последний звонок — до 19:00",
    featured: false,
  },
  {
    icon: CreditCard,
    title: "Зарплата два раза в месяц",
    description: "5-го и 20-го числа без задержек",
    featured: true,
  },
  {
    icon: TrendingUp,
    title: "Прозрачная мотивация",
    description: "Рост дохода от результата",
    featured: false,
  },
  {
    icon: GraduationCap,
    title: "Бесплатное обучение",
    description: "Поддержка наставника на старте",
    featured: false,
  },
  {
    icon: Users,
    title: "Комфортная рабочая атмосфера",
    description: "Адекватное руководство и поддержка",
    featured: false,
  },
  {
    icon: Award,
    title: "Возможность роста",
    description: "Карьерное развитие внутри компании",
    featured: false,
  },
];

export const Benefits = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
      {/* Декоративные линии */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground">
          Что мы предлагаем
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          Условия работы, которые делают нас привлекательным работодателем
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className={`p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 border-border bg-card animate-fade-in group ${
                  benefit.featured ? 'ring-2 ring-primary' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                    benefit.featured ? 'bg-hero-gradient group-hover:scale-110' : 'bg-primary/10 group-hover:bg-primary/20'
                  }`}>
                    <Icon className={`h-8 w-8 transition-transform group-hover:scale-110 ${benefit.featured ? 'text-white' : 'text-primary'}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  {benefit.featured && (
                    <span className="mt-3 px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
                      Главное преимущество
                    </span>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import { Globe, Clock, DollarSign, TrendingUp, GraduationCap, Users } from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "Удалённая работа",
    description: "Полностью удалённый формат работы.",
  },
  {
    icon: Clock,
    title: "Удобный график",
    description: "График 2/2, 10:00-20:00 МСК (последний звонок до 19:00).",
  },
  {
    icon: DollarSign,
    title: "Стабильные выплаты",
    description: "Зарплата два раза в месяц (5-го и 20-го).",
  },
  {
    icon: TrendingUp,
    title: "Рост дохода",
    description: "Прозрачная мотивация, доход зависит от результата.",
    featured: true,
  },
  {
    icon: GraduationCap,
    title: "Обучение",
    description: "Бесплатное обучение и поддержка наставника.",
  },
  {
    icon: Users,
    title: "Атмосфера",
    description: "Комфортная атмосфера и адекватное руководство.",
  },
];

export const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-dark text-white relative z-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Что мы предлагаем
          </h2>
          <p className="text-white/70 text-lg">
            Условия, которые позволяют комфортно работать и зарабатывать
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  benefit.featured
                    ? 'bg-hero-gradient shadow-lg shadow-primary/20 transform md:-translate-y-2'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  benefit.featured ? 'bg-white/20' : 'bg-white/10'
                }`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {benefit.title}
                </h3>
                <p className={`text-sm ${benefit.featured ? 'text-white/90' : 'text-white/70'}`}>
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

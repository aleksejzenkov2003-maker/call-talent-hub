import { FileText, Phone, GraduationCap, PlayCircle, TrendingUp, ChevronRight } from "lucide-react";

const workflow = [
  {
    icon: FileText,
    title: "Заявка на сайте",
    description: "Клиент оставляет заявку",
  },
  {
    icon: Phone,
    title: "Обработка звонка",
    description: "Система распределяет звонок",
  },
  {
    icon: GraduationCap,
    title: "Консультация",
    description: "Общение по скрипту",
  },
  {
    icon: PlayCircle,
    title: "Оформление в CRM",
    description: "Внесение данных",
  },
  {
    icon: TrendingUp,
    title: "Получение оплаты",
    description: "Ставка + процент",
  },
];

export const WorkProcess = () => {
  return (
    <section className="py-20 bg-background relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Как будет проходить работа
          </h2>
          <div className="section-title-underline"></div>
        </div>

        <div className="relative">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-border -z-10" />

            {workflow.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center w-full md:w-1/5 relative animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="w-16 h-16 bg-card border-4 border-primary/30 rounded-full flex items-center justify-center mb-6 z-10 shadow-md transition-all hover:border-primary hover:scale-110">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>

                  {/* Mobile arrow */}
                  {index < workflow.length - 1 && (
                    <div className="md:hidden my-4 text-muted-foreground">
                      <ChevronRight className="w-6 h-6 rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

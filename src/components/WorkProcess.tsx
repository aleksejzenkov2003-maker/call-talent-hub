import { Card } from "@/components/ui/card";
import { FileText, Phone, GraduationCap, PlayCircle, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Вы оставляете заявку",
    description: "Заполните простую форму на сайте",
  },
  {
    icon: Phone,
    title: "Мы связываемся с вами",
    description: "Проводим короткое интервью",
  },
  {
    icon: GraduationCap,
    title: "Обучение и адаптация",
    description: "Скрипты, стандарты, продукт",
  },
  {
    icon: PlayCircle,
    title: "Начало работы с клиентами",
    description: "Первые звонки под контролем наставника",
  },
  {
    icon: TrendingUp,
    title: "Рост показателей и заработка",
    description: "Развитие навыков и увеличение дохода",
  },
];

export const WorkProcess = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground">
          Как будет проходить работа
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          Простой и понятный процесс от заявки до успешной работы
        </p>
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-6 md:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <Card className="p-6 text-center h-full hover:shadow-card-hover transition-all duration-300 border-border bg-card">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 relative">
                        <Icon className="h-8 w-8 text-primary" />
                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-hero-gradient text-white flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <h3 className="font-semibold mb-2 text-card-foreground text-sm">{step.title}</h3>
                      <p className="text-xs text-muted-foreground">{step.description}</p>
                    </div>
                  </Card>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <div className="w-6 h-0.5 bg-primary"></div>
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

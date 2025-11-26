import { Card } from "@/components/ui/card";
import { FileText, Phone, GraduationCap, PlayCircle, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "1",
    title: "Заявка на сайте",
    description: "Ты не ищешь клиентов, а прозваниваешь новых или уже действующих клиентов компании. Все заявки приходят автоматически — это очень удобно.",
  },
  {
    icon: Phone,
    number: "2",
    title: "Общение с клиентом",
    description: "Система колл-центра сама распределяет входящие заявки: клиенту автоматически поступает звонок, и оператор подключается к диалогу.",
  },
  {
    icon: GraduationCap,
    number: "3",
    title: "Подтверждение заказа",
    description: "Ты сможешь общаться с клиентом по заранее хорошо подготовленному скрипту — у нас всё просто, понятно и структурировано.",
  },
  {
    icon: PlayCircle,
    number: "4",
    title: "Оформление заказа в CRM",
    description: "Все данные ты вносишь в удобную, интуитивно понятную CRM-систему. Выполнение задачи возможно как из офиса, так и на удалённке.",
  },
  {
    icon: TrendingUp,
    number: "5",
    title: "Получение вознаграждения",
    description: "После успешного закрытия сделки ты получаешь фиксированную ставку + проценты от продаж. Выплаты дважды в месяц.",
  },
];

export const WorkProcess = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground">
          Как будет проходить работа
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
          Простой и понятный процесс от заявки до успешной работы
        </p>
        <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                className={`relative animate-fade-in grid md:grid-cols-2 gap-8 items-center ${
                  isEven ? '' : 'md:grid-flow-dense'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Декоративная цифра */}
                <div className={`relative ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="relative">
                    <span className="text-[180px] md:text-[220px] font-bold text-muted/20 leading-none select-none absolute -top-16 md:-top-20 left-0">
                      {step.number}
                    </span>
                    <div className="relative z-10 pt-12 md:pt-16">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-primary pt-1">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed pl-16">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Декоративный элемент */}
                <div className={`hidden md:block ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="relative h-48 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-hero-gradient opacity-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="h-20 w-20 text-primary/30" strokeWidth={1} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

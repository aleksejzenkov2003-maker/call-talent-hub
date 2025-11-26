import { Phone, Clock, Search, MessageSquare, CheckCircle, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";

const responsibilities = [
  {
    icon: Phone,
    title: "Обрабатывать входящие и тёплые заявки по телефону",
  },
  {
    icon: Clock,
    title: "Проводить консультации по 20–40 минут",
  },
  {
    icon: Search,
    title: "Диагностировать ситуацию клиента и подбирать подходящее решение",
  },
  {
    icon: MessageSquare,
    title: "Давать рекомендации и формировать коммерческое предложение",
  },
  {
    icon: CheckCircle,
    title: "Закрывать сделки в рамках звонка",
  },
  {
    icon: Phone,
    title: "Делать 20-25 звонков в день по готовым скриптам - формат консультация",
  },
  {
    icon: FileText,
    title: "Вести краткую отчётность после разговоров",
  },
];

export const Responsibilities = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground">
          Чем предстоит заниматься
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          Ваши основные обязанности в комфортной рабочей среде
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {responsibilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-card-hover transition-all duration-300 border-border bg-card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-card-foreground leading-relaxed">{item.title}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

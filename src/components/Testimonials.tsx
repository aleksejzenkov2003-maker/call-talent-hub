import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Мария",
    text: "Нравится, что всё честно и прозрачно. Доход зависит от результата, а заявки качественные.",
  },
  {
    name: "Илья",
    text: "Вошёл быстро благодаря наставнику. Сейчас стабильно закрываю клиентов.",
  },
  {
    name: "Анна",
    text: "Есть ощущение, что я здесь на своём месте: комфортный график и нормальное отношение.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground">
          Отзывы наших сотрудников
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          Узнайте, что говорят о работе в нашей команде
        </p>
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-card-hover transition-all duration-300 border-border bg-card animate-fade-in relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Quote className="h-10 w-10 text-primary/20 absolute top-6 right-6" />
              <div className="relative z-10">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-hero-gradient flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">Менеджер по работе с клиентами</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

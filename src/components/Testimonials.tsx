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
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Декоративные кавычки */}
      <div className="absolute top-10 left-10 text-9xl text-primary/5 font-serif select-none hidden lg:block">"</div>
      <div className="absolute bottom-10 right-10 text-9xl text-accent/5 font-serif select-none hidden lg:block rotate-180">"</div>
      
      <div className="container mx-auto px-4 relative z-10">
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
              className="p-8 hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 border-border bg-card animate-fade-in relative group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Quote className="h-10 w-10 text-primary/20 absolute top-6 right-6 group-hover:text-primary/40 transition-colors" />
              <div className="relative z-10">
                <p className="text-card-foreground mb-6 leading-relaxed italic min-h-[100px]">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-hero-gradient flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">Менеджер по работе с клиентами</p>
                  </div>
                </div>
              </div>
              {/* Градиентная линия снизу */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-hero-gradient opacity-0 group-hover:opacity-100 transition-opacity rounded-b-lg"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

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
  {
    name: "Дмитрий",
    text: "Отличная возможность работать удалённо без переездов. Зарплата стабильная, выплачивают вовремя.",
  },
  {
    name: "Елена",
    text: "После декрета искала гибкий график. Здесь нашла идеальный баланс между работой и семьёй.",
  },
  {
    name: "Сергей",
    text: "Работаю уже полгода. Клиенты действительно тёплые, не нужно никого уговаривать.",
  },
  {
    name: "Ольга",
    text: "Поддержка команды на высоте. Всегда помогут решить любой вопрос по работе.",
  },
  {
    name: "Алексей",
    text: "График 2/2 позволяет восстанавливаться и заниматься своими делами. Не выгораю.",
  },
  {
    name: "Виктория",
    text: "Обучение было качественным, всё объяснили понятно. Через неделю уже вышла на клиентов.",
  },
  {
    name: "Максим",
    text: "Зарабатываю больше, чем в офисе. Плюс не трачу время на дорогу.",
  },
  {
    name: "Татьяна",
    text: "Нет холодных звонков - это огромный плюс. Работать с заинтересованными людьми намного приятнее.",
  },
  {
    name: "Игорь",
    text: "Прозрачная система оплаты и понятные KPI. Знаешь, за что получаешь деньги.",
  },
  {
    name: "Наталья",
    text: "Работаю из дома в другом городе. Технически всё организовано отлично, никаких проблем.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Отзывы наших сотрудников
          </h2>
          <div className="section-title-underline"></div>
        </div>
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 px-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-none w-[340px] p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in relative group snap-start"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Quote className="h-10 w-10 text-primary/20 absolute top-6 right-6 group-hover:text-primary/40 transition-colors" />
                <div className="relative z-10">
                  <p className="text-foreground mb-6 leading-relaxed italic min-h-[100px]">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-hero-gradient flex items-center justify-center text-white font-bold text-lg shadow-md">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">Менеджер по работе с клиентами</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-hero-gradient opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

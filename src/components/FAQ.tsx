import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Нужно ли искать клиентов?",
    answer: "Нет, вы работаете только с входящими и тёплыми заявками. Клиенты уже проявили интерес к нашим услугам.",
  },
  {
    question: "Можно без опыта?",
    answer: "Можно, если есть желание учиться. Мы предоставляем бесплатное обучение и поддержку наставника на старте.",
  },
  {
    question: "Обучение платное?",
    answer: "Нет, обучение полностью бесплатное. Мы предоставляем все необходимые материалы и поддержку.",
  },
  {
    question: "Когда первые выплаты?",
    answer: "Зарплата выплачивается два раза в месяц: 5-го и 20-го числа, без задержек.",
  },
  {
    question: "Какое оборудование нужно?",
    answer: "ПК или ноутбук, стабильный интернет и гарнитура с микрофоном. Это всё, что необходимо для комфортной работы.",
  },
  {
    question: "Какой график работы?",
    answer: "График 2/2 с 10:00 до 20:00 по МСК. Последний звонок принимается до 19:00.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground">
          Часто задаваемые вопросы
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          Ответы на популярные вопросы о вакансии
        </p>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-card border border-border rounded-lg px-6 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left font-semibold text-card-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

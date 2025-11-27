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
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Часто задаваемые вопросы
          </h2>
          <div className="section-title-underline"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-card border-2 border-border rounded-xl px-6 animate-fade-in hover:border-primary/30 transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left font-bold text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
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

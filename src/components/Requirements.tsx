import { CheckCircle2 } from "lucide-react";

const requirements = [
  "Опыт в продажах, сервисе или консультировании",
  "Грамотная речь, чёткая дикция",
  "Способность слушать и работать с возражениями",
  "Нацеленность на результат и выполнение KPI",
  "Ответственность, пунктуальность, дисциплина",
  "Уверенное владение ПК",
  "Наличие стабильного интернета, компьютера и гарнитуры",
];

export const Requirements = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground">
          Наши ожидания от кандидата
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          Что важно для успешной работы в нашей команде
        </p>
        <div className="max-w-4xl mx-auto grid gap-4 md:grid-cols-2">
          {requirements.map((requirement, index) => (
            <div 
              key={index} 
              className="flex items-start gap-3 p-4 rounded-lg hover:bg-secondary transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground leading-relaxed">{requirement}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

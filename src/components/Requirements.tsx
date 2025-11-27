import { CheckCircle2 } from "lucide-react";

const requirements = [
  "Опыт в продажах, сервисе или консультировании.",
  "Грамотная речь, чёткая дикция.",
  "Способность слушать и работать с возражениями.",
  "Нацеленность на результат и выполнение KPI.",
  "Ответственность, пунктуальность, дисциплина.",
  "Уверенное владение ПК.",
  "Наличие стабильного интернета, компьютера и гарнитуры.",
];

export const Requirements = () => {
  return (
    <section id="requirements" className="py-20 bg-card/50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-card rounded-3xl border-2 border-primary p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Наши ожидания от кандидата
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Мы ищем человека, который хочет расти вместе с компанией, умеет общаться и не боится телефонных переговоров.
              </p>
              <div className="bg-muted/50 p-6 rounded-xl border border-border">
                <p className="text-sm italic text-muted-foreground">
                  "Ваш голос — это лицо нашей компании. Мы ценим каждый диалог."
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {requirements.map((requirement, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground leading-relaxed">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

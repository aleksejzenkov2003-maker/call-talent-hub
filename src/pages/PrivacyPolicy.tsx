import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Вернуться на главную
          </Button>
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
          Политика конфиденциальности и обработки персональных данных
        </h1>

        <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Общие положения</h2>
            <p>
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты 
              персональных данных пользователей сайта SMBH (далее — «Оператор»).
            </p>
            <p>
              Использование сайта и отправка заявки означает согласие пользователя с настоящей 
              Политикой и условиями обработки персональных данных.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Персональные данные, которые мы собираем</h2>
            <p>Мы собираем следующие персональные данные:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Имя и фамилия</li>
              <li>Номер телефона</li>
              <li>Контакт в мессенджере (Telegram / WhatsApp)</li>
              <li>Информация об опыте работы</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Цели обработки персональных данных</h2>
            <p>Персональные данные обрабатываются в следующих целях:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Связь с кандидатом по вопросам трудоустройства</li>
              <li>Рассмотрение заявки на вакансию</li>
              <li>Предоставление информации о вакансиях и условиях работы</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Хранение и защита данных</h2>
            <p>
              Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, 
              исключающие доступ к персональным данным неуполномоченных лиц.
            </p>
            <p>
              Персональные данные хранятся на защищенных серверах и не передаются третьим лицам 
              без согласия пользователя, за исключением случаев, предусмотренных законодательством.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Права пользователя</h2>
            <p>Пользователь имеет право:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Получать информацию, касающуюся обработки его персональных данных</li>
              <li>Требовать уточнения, блокирования или уничтожения своих персональных данных</li>
              <li>Отозвать согласие на обработку персональных данных</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Связь с нами</h2>
            <p>
              По всем вопросам, связанным с обработкой персональных данных, вы можете связаться 
              с нами через наши социальные сети или мессенджеры.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Заключительные положения</h2>
            <p>
              Оператор вправе вносить изменения в настоящую Политику. Новая редакция Политики 
              вступает в силу с момента её размещения на сайте.
            </p>
            <p className="text-sm text-muted-foreground mt-8">
              Дата последнего обновления: {new Date().toLocaleDateString('ru-RU')}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

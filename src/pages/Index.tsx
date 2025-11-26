import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return { days: 6, hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <header className="mb-20 text-center">
          <div className="mb-8 flex items-center justify-center gap-4">
            <div className="h-[1px] w-24 bg-accent"></div>
            <div className="text-accent">✦</div>
            <div className="h-[1px] w-24 bg-accent"></div>
          </div>
          <h1 className="mb-4 text-6xl font-light tracking-wide md:text-8xl">
            Метаболизм
          </h1>
          <p className="text-xl text-muted-foreground md:text-2xl">
            Презентация книги
          </p>
        </header>

        <section className="mb-32 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div className="order-2 md:order-1">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-[1px] w-12 bg-accent"></div>
              <h2 className="text-4xl font-light">О книге</h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Метаболизм — это основа нашего здоровья и жизненной энергии. 
                В этой книге раскрываются механизмы обменных процессов в организме, 
                влияние питания на метаболизм и практические рекомендации для 
                поддержания оптимального баланса.
              </p>
              <p>
                Автор глубоко исследует биохимические процессы, делая сложные 
                научные концепции доступными для широкого круга читателей. 
                Книга станет незаменимым руководством для тех, кто стремится 
                к здоровому образу жизни и понимает важность метаболических процессов.
              </p>
              <div className="border-l-2 border-accent pl-6 italic text-muted-foreground">
                «Понимание метаболизма — ключ к управлению своим здоровьем 
                и долголетием»
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="perspective-1000">
              <div className="transform-gpu transition-transform duration-300 hover:rotate-y-6 hover:scale-105">
                <Card className="relative overflow-hidden border-2 border-border shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
                  <img
                    src="https://cdn.poehali.dev/files/39fadf99-09ee-4cf9-bf8b-97aab8ea4844.jpeg"
                    alt="Обложка книги Метаболизм"
                    className="w-full object-cover shadow-[8px_8px_16px_rgba(0,0,0,0.3)]"
                    style={{ aspectRatio: '2/3' }}
                  />
                  <div className="absolute -right-2 top-0 h-full w-8 bg-gradient-to-l from-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 h-8 w-full bg-gradient-to-t from-black/20 to-transparent"></div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-32">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-6 text-5xl font-light">Презентация книги «Метаболизм»</h2>
              <p className="text-2xl font-light text-accent">
                Разбудите спящего гиганта вашей энергии. Превратите свое тело в машину для сжигания жира.
              </p>
            </div>

            <div className="space-y-8 text-lg leading-relaxed">
              <p className="text-xl">
                Хватит бороться с собой. Пора понять язык своего тела и обрести стабильную энергию, 
                ясность ума и тело, которое сжигает жир 24/7 — без диет, голода и силы воли.
              </p>

              <div className="my-12">
                <h3 className="mb-6 text-3xl font-light">Вы узнаете себя?</h3>
                <ul className="space-y-3">
                  <li>· Просыпаетесь разбитым и бежите за кофе, чтобы просто «запуститься»?</li>
                  <li>· После обеда накатывает такая усталость, что мечтаете только о подушке?</li>
                  <li>· Постоянно боретесь с «зверским» голодом и навязчивой тягой к сладкому?</li>
                  <li>· Перепробовали кучу диет, но вес возвращается, а энергии не прибавляется?</li>
                </ul>
              </div>

              <Card className="border-l-4 border-accent bg-accent/5 p-8">
                <p className="text-xl font-light">
                  Это не ваша вина. Это — сломанный метаболизм.
                </p>
              </Card>

              <p>
                Ваше тело застряло в порочном круге «углевод → инсулин → усталость». 
                Вы едите, чтобы получить энергию, но сами же и блокируете доступ к своим 
                главным ее запасам — жиру.
              </p>

              <p className="text-xl font-light text-accent">
                Пора сойти с этих «американских горок». Пора вернуть себе контроль.
              </p>

              <div className="my-12">
                <h3 className="mb-6 text-3xl font-light">Перед вами — не очередная диета. Это руководство по метаболической перепрошивке.</h3>
                <p>
                  Книга «Метаболизм» — это пошаговая система, которая научит ваше тело делать то, 
                  что задумано природой: легко переключаться между сжиганием сахара и жира, 
                  используя ваши почти безграничные внутренние запасы энергии.
                </p>
              </div>

              <div className="my-12">
                <h3 className="mb-6 text-3xl font-light">Обретя метаболическую гибкость, вы получите:</h3>
                <ul className="space-y-4">
                  <li>
                    <strong>· Стабильную энергию.</strong> Забудьте о послеобеденных спадах и утренней вялости. 
                    Ровная энергия на весь день станет вашей новой нормой.
                  </li>
                  <li>
                    <strong>· Ясность ума и концентрацию.</strong> «Мозговой туман» рассеется, уступив место 
                    фокусировке и продуктивности. Ваш мозг будет работать на сверхэффективном топливе — кетонах.
                  </li>
                  <li>
                    <strong>· Контроль над аппетитом.</strong> Гормоны сытости начнут работать правильно. 
                    Вы будете испытывать настоящее чувство голода, а не эмоциональную тягу, и легко насыщаться.
                  </li>
                  <li>
                    <strong>· Потерю жира, а не мышечной массы.</strong> Тело научится использовать жир 
                    как основной источник топлива, сохраняя ценные метаболически активные мышцы.
                  </li>
                  <li>
                    <strong>· Устойчивость к стрессу и улучшение сна.</strong> Стабильный уровень сахара 
                    в крови нормализует гормональный фон, включая кортизол. Вы будете лучше спать и спокойнее 
                    реагировать на вызовы.
                  </li>
                </ul>
              </div>

              <div className="my-12">
                <h3 className="mb-6 text-3xl font-light">Наша система основана на 4 столпах:</h3>
                <ol className="space-y-4">
                  <li>
                    <strong>1. Глубокая теория без воды.</strong> Вы поймете, как работают 4 энергетические 
                    системы вашего тела (гликолиз, липолиз, кетогенез, глюконеогенез) и почему они ломаются.
                  </li>
                  <li>
                    <strong>2. 5 простых правил вместо сотен запретов.</strong> Вам не нужно считать каждую 
                    калорию. Вы усвоите принципы приоритета белка, умных углеводов, полезных жиров, 
                    интервального голодания и правильных тренировок.
                  </li>
                  <li>
                    <strong>3. Два пошаговых плана на выбор:</strong>
                    <ul className="ml-6 mt-2 space-y-2">
                      <li>
                        · «Первые шаги» (4 недели) — для новичков и тех, кто устал от стресса. 
                        Мягкая перезагрузка без резких ограничений.
                      </li>
                      <li>
                        · «Ускоренная программа» (2-3 недели) — для подготовленных, кто готов к быстрому 
                        метаболическому скачку.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>4. Инструменты для самодиагностики.</strong> Вы научитесь отслеживать прогресс 
                    не только по весам, но и по уровню энергии, объему талии и другим маркерам.
                  </li>
                </ol>
              </div>

              <Card className="bg-card p-8">
                <h3 className="mb-4 text-2xl font-light">История Марии:</h3>
                <p className="italic leading-relaxed text-muted-foreground">
                  «Мне 42, двое детей, успешная карьера. Моя жизнь — это кофе, печенье к сроку, 
                  сонливость после обеда и полное истощение к вечеру. Диеты помогали сбросить 3-4 кг, 
                  которые тут же возвращались. Эта книга перевернула все. Я не села на диету — я поменяла 
                  источник топлива. Через 3 недели исчезли послеобеденные спады и тяга к сладкому. 
                  Через 2 месяца я потеряла 8 кг и обрела стабильную энергию, о которой даже не мечтала. 
                  Я стала высыпаться за 7 часов вместо 9 беспокойных. Я наконец-то хозяйка своей энергии».
                </p>
              </Card>

              <div className="my-16">
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-[1px] w-12 bg-accent"></div>
                  <h3 className="text-4xl font-light">Автор метода</h3>
                </div>
                <Card className="bg-card p-8">
                  <h4 className="mb-4 text-2xl font-light text-accent">
                    Андрей Сергеевич Равинских
                  </h4>
                  <p className="mb-2 text-lg text-muted-foreground">
                    Основатель студии ладования «Благодать», специалист по метаболической коррекции.
                  </p>
                  <div className="mt-6 space-y-4 leading-relaxed">
                    <p>
                      Автор этой системы не понаслышке знает, что такое метаболический кризис. 
                      Пройдя путь от хронической усталости и неконтролируемого набора веса к энергичной 
                      и полноценной жизни, он посвятил себя изучению метаболических процессов.
                    </p>
                    <p>
                      Соединив глубокие научные знания с многолетней практикой работы с сотнями клиентов, 
                      он создал уникальную систему восстановления жиросжигания. Его подход — это не просто 
                      сборник рецептов, а фундаментальное «перепрошивка» метаболизма, которая дает 
                      долгосрочные результаты. Его миссия — помочь людям вырваться из плена усталости 
                      и неэффективных диет, вернув себе право на энергию и здоровье.
                    </p>
                  </div>
                </Card>
              </div>

              <div className="my-12 text-center">
                <p className="mb-4 text-2xl font-light text-accent">
                  Хватит выживать. Пора процветать на уровне каждой клетки.
                </p>
                <p className="text-xl">
                  Не откладывайте свое здоровье и энергию на потом. Ваше тело ждет команды на перезагрузку.
                </p>
              </div>

              <Card className="border-2 border-accent bg-accent/10 p-10 text-center shadow-xl">
                <div className="mb-8">
                  <p className="mb-6 text-3xl font-medium text-accent">
                    Что можно купить за 200 рублей? Кофе?<br />
                    А можно — перезапустить метаболизм! 💡
                  </p>
                  <div className="space-y-3 text-xl">
                    <p>Вы получаете не просто PDF, а готовую систему!</p>
                    <p className="text-2xl font-medium text-accent">И всё это — за 200 рублей!</p>
                    <p className="text-lg">Это в 5 раз дешевле обычной стоимости! 🔥</p>
                    <p className="text-lg italic">Цена чашки кофе — а результат на всю жизнь.</p>
                  </div>
                </div>
                
                <div className="mb-8 rounded-lg bg-accent/20 p-6">
                  <p className="mb-4 text-lg font-medium">Успей забрать по супер-цене, пока она не изменилась! 👇</p>
                  <p className="text-4xl font-bold text-accent">Супер-цена 200 рублей! 🚀</p>
                  
                  <div className="mt-6">
                    <p className="mb-3 text-sm font-medium uppercase tracking-wider">Предложение истекает через:</p>
                    <div className="flex justify-center gap-3">
                      <div className="flex flex-col items-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-background text-2xl font-bold text-accent shadow-lg">
                          {timeLeft.days}
                        </div>
                        <span className="mt-2 text-xs uppercase">Дней</span>
                      </div>
                      <div className="flex items-center pb-6 text-2xl font-bold">:</div>
                      <div className="flex flex-col items-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-background text-2xl font-bold text-accent shadow-lg">
                          {String(timeLeft.hours).padStart(2, '0')}
                        </div>
                        <span className="mt-2 text-xs uppercase">Часов</span>
                      </div>
                      <div className="flex items-center pb-6 text-2xl font-bold">:</div>
                      <div className="flex flex-col items-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-background text-2xl font-bold text-accent shadow-lg">
                          {String(timeLeft.minutes).padStart(2, '0')}
                        </div>
                        <span className="mt-2 text-xs uppercase">Минут</span>
                      </div>
                      <div className="flex items-center pb-6 text-2xl font-bold">:</div>
                      <div className="flex flex-col items-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-background text-2xl font-bold text-accent shadow-lg">
                          {String(timeLeft.seconds).padStart(2, '0')}
                        </div>
                        <span className="mt-2 text-xs uppercase">Секунд</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8 space-y-3 text-lg">
                  <p className="font-medium">Чтобы купить:</p>
                  <ol className="space-y-2">
                    <li>✅ Напиши в WhatsApp "Метаболизм"</li>
                    <li>✅ Получи инструкцию по оплате</li>
                    <li>✅ Наслаждайся практикумом!</li>
                  </ol>
                </div>

                <Button
                  size="lg"
                  className="gap-3 bg-accent px-12 py-7 text-xl font-medium text-background shadow-lg transition-all hover:scale-110 hover:bg-accent/90 hover:shadow-2xl"
                  onClick={() => window.open("https://wa.me/79516004875", "_blank")}
                >
                  <Icon name="ShoppingCart" size={28} />
                  <span>Купить за 200 рублей</span>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <Card className="border-2 border-accent/20 bg-card p-12 text-center shadow-lg">
            <div className="mx-auto max-w-2xl">
              <div className="mb-6 flex items-center justify-center gap-3">
                <div className="h-[1px] w-12 bg-accent"></div>
                <h2 className="text-4xl font-light">Контакты</h2>
                <div className="h-[1px] w-12 bg-accent"></div>
              </div>
              <p className="mb-8 text-lg text-muted-foreground">
                По вопросам приобретения и сотрудничества свяжитесь с нами
              </p>
              <Button
                size="lg"
                className="group gap-3 px-8 py-6 text-lg transition-all hover:scale-105"
                onClick={() => window.open("https://wa.me/79516004875", "_blank")}
              >
                <Icon name="MessageCircle" size={24} />
                <span>Написать в WhatsApp</span>
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                +7 (951) 600-48-75
              </p>
            </div>
          </Card>
        </section>

        <footer className="border-t border-border pt-12 text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-[1px] w-16 bg-border"></div>
            <div className="text-muted-foreground">✦</div>
            <div className="h-[1px] w-16 bg-border"></div>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Метаболизм. Все права защищены.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
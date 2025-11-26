import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
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
            <Card className="overflow-hidden border-2 border-border shadow-2xl">
              <img
                src="https://cdn.poehali.dev/files/39fadf99-09ee-4cf9-bf8b-97aab8ea4844.jpeg"
                alt="Обложка книги Метаболизм"
                className="w-full object-cover"
              />
            </Card>
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

              <div className="my-12 text-center">
                <p className="mb-4 text-2xl font-light text-accent">
                  Хватит выживать. Пора процветать на уровне каждой клетки.
                </p>
                <p className="text-xl">
                  Не откладывайте свое здоровье и энергию на потом. Ваше тело ждет команды на перезагрузку.
                </p>
              </div>

              <Card className="border-2 border-accent bg-accent/10 p-8 text-center">
                <p className="mb-6 text-xl font-light">
                  Получите книгу «Метаболизм» прямо сейчас и сделайте первый шаг к жизни без усталости, 
                  с ясной головой и телом, которое работает на вас, а не против вас!
                </p>
                <p className="mb-6 text-muted-foreground">· Электронный формат (PDF) — мгновенная доставка</p>
                <Button
                  size="lg"
                  className="gap-3 px-8 py-6 text-lg transition-all hover:scale-105"
                  onClick={() => window.open("https://wa.me/79516004875", "_blank")}
                >
                  <Icon name="ShoppingCart" size={24} />
                  <span>Заказать книгу</span>
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
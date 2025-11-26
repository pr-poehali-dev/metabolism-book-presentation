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
                src="https://cdn.poehali.dev/projects/c0f76778-7f4a-40a8-a94c-45d20636c73c/files/9991245d-547d-4ded-8200-5ee94db33dc8.jpg"
                alt="Обложка книги Метаболизм"
                className="aspect-[3/4] w-full object-cover"
              />
            </Card>
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

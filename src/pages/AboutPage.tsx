import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Award, Heart, Clock, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-2 text-center">О мастере</h1>
            <p className="text-muted-foreground mb-0 text-center max-w-2xl mx-auto">
              Узнайте больше о мастере депиляции и нашей студии
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="h-[500px] rounded-lg overflow-hidden bg-gradient-to-r from-depilation to-depilation-dark flex items-center justify-center">
                  <div className="text-8xl">✨</div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl hidden md:flex items-center gap-3">
                  <Award className="h-8 w-8 text-depilation-dark" />
                  <div>
                    <p className="text-lg font-medium">Сертифицированный мастер</p>
                    <p className="text-sm text-muted-foreground">5+ лет опыта</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Привет, я Белла!</h2>
                <p className="text-lg mb-6">
                  Я профессиональный мастер депиляции с более чем 5-летним опытом работы в индустрии красоты. 
                  Моя страсть — помогать людям чувствовать себя уверенно благодаря идеально гладкой коже.
                </p>
                <p className="mb-6">
                  Я постоянно совершенствую свои навыки, посещаю профессиональные семинары и мастер-классы, 
                  чтобы быть в курсе последних тенденций в области депиляции. В своей работе я использую 
                  только проверенные, высококачественные материалы и соблюдаю все гигиенические нормы.
                </p>
                <p className="mb-8">
                  Индивидуальный подход к каждому клиенту позволяет мне подобрать оптимальную процедуру 
                  с учетом всех особенностей вашей кожи и сделать процесс депиляции максимально комфортным.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link to="/booking">Записаться на прием</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/services">Посмотреть услуги</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Почему выбирают меня</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-depilation-dark" />
                </div>
                <h3 className="text-xl font-medium mb-3">Безопасные материалы</h3>
                <p className="text-muted-foreground">
                  Использую только гипоаллергенные и безопасные материалы высокого качества для вашего комфорта.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-depilation-dark" />
                </div>
                <h3 className="text-xl font-medium mb-3">Стерильность и чистота</h3>
                <p className="text-muted-foreground">
                  Соблюдаю строгие гигиенические нормы, использую одноразовые материалы и стерильные инструменты.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-depilation-dark" />
                </div>
                <h3 className="text-xl font-medium mb-3">Экономия времени</h3>
                <p className="text-muted-foreground">
                  Работаю эффективно и быстро, чтобы вы могли получить отличный результат без длительного ожидания.
                </p>
              </div>
            </div>
            
            <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-6">Мое образование и сертификации</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <BadgeCheck className="h-6 w-6 text-depilation-dark shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Диплом о профессиональной подготовке</p>
                    <p className="text-muted-foreground">Школа профессиональной депиляции "Гладкость", 2018 г.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <BadgeCheck className="h-6 w-6 text-depilation-dark shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Сертификат мастера шугаринга</p>
                    <p className="text-muted-foreground">Международная академия эстетики, 2019 г.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <BadgeCheck className="h-6 w-6 text-depilation-dark shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Повышение квалификации</p>
                    <p className="text-muted-foreground">Техники безболезненной депиляции, 2021 г.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <BadgeCheck className="h-6 w-6 text-depilation-dark shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Сертификат по уходу за кожей после депиляции</p>
                    <p className="text-muted-foreground">Центр профессиональной косметологии, 2022 г.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
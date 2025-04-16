import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";

const benefits = [
  "Профессиональные материалы и оборудование",
  "Индивидуальный подход к каждому клиенту",
  "Строгое соблюдение гигиенических норм",
  "Комфортная и дружелюбная атмосфера",
  "Гибкий график записи",
  "Доступные цены и система лояльности"
];

const AboutSection = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="h-96 md:h-[500px] rounded-lg overflow-hidden bg-gradient-to-r from-depilation to-depilation-dark flex items-center justify-center">
              <div className="text-8xl">✨</div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl hidden md:block">
              <p className="text-lg font-medium text-depilation-dark">5+ лет опыта</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">О мастере</h2>
            <p className="text-lg mb-6">
              Меня зовут Белла, я профессиональный мастер депиляции с более чем 5-летним опытом работы. 
              Моя миссия — помогать людям чувствовать себя уверенно благодаря идеальной гладкости кожи.
            </p>
            <p className="mb-6">
              Я постоянно совершенствую свои навыки и использую только проверенные, 
              высококачественные материалы для работы. Индивидуальный подход к каждому клиенту 
              позволяет мне подобрать оптимальную процедуру с учетом всех особенностей вашей кожи.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4">Почему выбирают меня:</h3>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <BadgeCheck className="h-5 w-5 text-depilation-dark shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button asChild>
              <Link to="/about">Узнать больше</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-depilation-light to-secondary py-20 md:py-32">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Идеальная гладкость вашей кожи — наша забота
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Профессиональная депиляция с заботой о вашей коже и комфорте. 
            Мягкий подход, безопасные материалы и превосходный результат.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link to="/booking">Записаться на процедуру</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">Посмотреть услуги</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 md:opacity-20 bg-[url('/placeholder.svg')] bg-contain bg-no-repeat bg-right" />
    </section>
  );
};

export default Hero;
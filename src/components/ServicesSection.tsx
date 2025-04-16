import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    title: "Восковая депиляция",
    description: "Классическая процедура удаления волос с использованием натурального воска, подходит для всех типов кожи.",
    price: "от 800 ₽",
    icon: "🌸"
  },
  {
    id: 2,
    title: "Шугаринг",
    description: "Мягкое удаление волос с помощью натуральной сахарной пасты, идеально для чувствительной кожи.",
    price: "от 900 ₽",
    icon: "✨"
  },
  {
    id: 3,
    title: "Комплексные программы",
    description: "Индивидуальные программы депиляции разных зон со скидкой. Экономьте ваше время и деньги.",
    price: "от 1500 ₽",
    icon: "💖"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Предлагаем различные виды депиляции, выполненные с заботой о вашей коже 
            и с использованием высококачественных материалов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="text-3xl mb-3">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="group-hover:text-depilation-dark">
                  <Link to="/services" className="flex items-center gap-2">
                    Подробнее <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/services">Все услуги</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
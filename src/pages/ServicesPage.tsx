import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const serviceCategories = [
  { id: "wax", label: "Воск" },
  { id: "sugar", label: "Шугаринг" },
  { id: "combo", label: "Комплексы" }
];

const servicesList = {
  wax: [
    { name: "Ноги полностью", price: "1200 ₽", description: "Депиляция ног от стоп до бедер горячим воском" },
    { name: "Руки полностью", price: "800 ₽", description: "Депиляция рук от кистей до плеч горячим воском" },
    { name: "Подмышечные впадины", price: "500 ₽", description: "Депиляция подмышечных впадин горячим воском" },
    { name: "Бикини классическое", price: "1000 ₽", description: "Депиляция по линии белья горячим воском" },
    { name: "Бикини глубокое", price: "1500 ₽", description: "Глубокая депиляция зоны бикини горячим воском" },
    { name: "Верхняя губа", price: "300 ₽", description: "Депиляция области над верхней губой горячим воском" }
  ],
  sugar: [
    { name: "Ноги полностью", price: "1400 ₽", description: "Депиляция ног от стоп до бедер сахарной пастой" },
    { name: "Руки полностью", price: "900 ₽", description: "Депиляция рук от кистей до плеч сахарной пастой" },
    { name: "Подмышечные впадины", price: "600 ₽", description: "Депиляция подмышечных впадин сахарной пастой" },
    { name: "Бикини классическое", price: "1100 ₽", description: "Депиляция по линии белья сахарной пастой" },
    { name: "Бикини глубокое", price: "1700 ₽", description: "Глубокая депиляция зоны бикини сахарной пастой" },
    { name: "Верхняя губа", price: "350 ₽", description: "Депиляция области над верхней губой сахарной пастой" }
  ],
  combo: [
    { name: "Руки + Ноги", price: "1800 ₽", description: "Комплексная депиляция рук и ног" },
    { name: "Все тело", price: "3500 ₽", description: "Комплексная депиляция всего тела (ноги, руки, подмышки, бикини классика)" },
    { name: "Подмышки + Бикини", price: "1500 ₽", description: "Комплексная депиляция подмышек и зоны бикини" },
    { name: "Лицо полностью", price: "1000 ₽", description: "Комплексная депиляция лица (верхняя губа, подбородок, щеки)" }
  ]
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-3 text-center">Услуги и цены</h1>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Мы предлагаем различные виды депиляции с использованием высококачественных материалов. 
              Выберите подходящую вам процедуру.
            </p>

            <Tabs defaultValue="wax" className="mb-12">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                {serviceCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {serviceCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {servicesList[category.id as keyof typeof servicesList].map((service, idx) => (
                      <Card key={idx}>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-lg">{service.name}</CardTitle>
                            <span className="text-lg font-semibold text-depilation-dark">{service.price}</span>
                          </div>
                          <CardDescription>{service.description}</CardDescription>
                        </CardHeader>
                        <CardFooter>
                          <Button asChild variant="outline" size="sm">
                            <Link to="/booking">Записаться</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            <div className="bg-secondary/30 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Дополнительная информация</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Скидки и акции</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Скидка 10% при первом посещении</li>
                    <li>Скидка 5% именинникам (±3 дня)</li>
                    <li>Скидка 15% на комплексные процедуры</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Подготовка к процедуре</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Длина волос должна быть не менее 4-5 мм</li>
                    <li>Перед процедурой не используйте скрабы</li>
                    <li>Примите душ перед посещением</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link to="/booking">Записаться на процедуру</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Контакты</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Остались вопросы? Свяжитесь с нами любым удобным способом или приходите в студию.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-depilation-dark" />
                </div>
                <h3 className="text-lg font-medium mb-2">Телефон</h3>
                <p className="mb-4">Позвоните для консультации или записи</p>
                <a href="tel:+79001234567" className="text-depilation-dark hover:underline">
                  +7 (900) 123-45-67
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-depilation-dark" />
                </div>
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <p className="mb-4">Напишите нам для консультации</p>
                <a href="mailto:info@belastudio.ru" className="text-depilation-dark hover:underline">
                  info@belastudio.ru
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Instagram className="h-6 w-6 text-depilation-dark" />
                </div>
                <h3 className="text-lg font-medium mb-2">Instagram</h3>
                <p className="mb-4">Следите за нашими новостями</p>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-depilation-dark hover:underline">
                  @belastudio
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Адрес и время работы</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 text-depilation-dark shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Наш адрес:</p>
                    <p>г. Москва, ул. Депиляционная, д. 10, офис 5</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Clock className="h-5 w-5 text-depilation-dark shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Часы работы:</p>
                    <p>Пн-Пт: 10:00 - 20:00</p>
                    <p>Сб: 10:00 - 18:00</p>
                    <p>Вс: выходной</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link to="/booking">Записаться на прием</Link>
                </Button>
              </div>
            </div>
            
            <div className="h-[300px] md:h-auto bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Здесь будет карта</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
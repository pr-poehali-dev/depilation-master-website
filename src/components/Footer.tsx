import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-depilation-dark" />
                <a href="tel:+79001234567" className="hover:text-depilation-dark transition-colors">
                  +7 (900) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-depilation-dark" />
                <a href="mailto:info@belastudio.ru" className="hover:text-depilation-dark transition-colors">
                  info@belastudio.ru
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-depilation-dark mt-1" />
                <span>г. Москва, ул. Депиляционная, д. 10, офис 5</span>
              </li>
            </ul>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-depilation-dark transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-depilation-dark transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-depilation-dark transition-colors">
                  Обо мне
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-depilation-dark transition-colors">
                  Контакты
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-depilation-dark transition-colors">
                  Запись на прием
                </Link>
              </li>
            </ul>
          </div>

          {/* Социальные сети и запись */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Будем на связи</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-depilation hover:text-depilation-dark transition-colors" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-depilation hover:text-depilation-dark transition-colors" />
              </a>
            </div>
            <Button asChild className="w-full">
              <Link to="/booking">Записаться на прием</Link>
            </Button>
          </div>
        </div>

        <Separator className="my-6 bg-border/50" />

        <div className="text-center text-sm text-muted-foreground">
          <p>© {currentYear} БелаСтудио. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
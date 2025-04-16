import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Scissors className="h-6 w-6 text-depilation-dark" />
            <span className="text-xl font-bold text-depilation-dark">БелаСтудио</span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleNav}
              aria-label="Главное меню"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-depilation-dark transition-colors">
              Главная
            </Link>
            <Link to="/services" className="text-foreground hover:text-depilation-dark transition-colors">
              Услуги
            </Link>
            <Link to="/about" className="text-foreground hover:text-depilation-dark transition-colors">
              Обо мне
            </Link>
            <Link to="/contacts" className="text-foreground hover:text-depilation-dark transition-colors">
              Контакты
            </Link>
            <Button asChild>
              <Link to="/booking">Записаться</Link>
            </Button>
          </nav>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden absolute z-50 left-0 right-0 bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-foreground hover:bg-secondary rounded-md"
              onClick={toggleNav}
            >
              Главная
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 text-foreground hover:bg-secondary rounded-md"
              onClick={toggleNav}
            >
              Услуги
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-foreground hover:bg-secondary rounded-md"
              onClick={toggleNav}
            >
              Обо мне
            </Link>
            <Link
              to="/contacts"
              className="block px-3 py-2 text-foreground hover:bg-secondary rounded-md"
              onClick={toggleNav}
            >
              Контакты
            </Link>
            <Button asChild className="w-full mt-2">
              <Link to="/booking" onClick={toggleNav}>
                Записаться
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-6xl font-bold text-depilation-dark mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-6">Страница не найдена</h2>
          <p className="text-muted-foreground mb-8">
            Извините, мы не можем найти страницу, которую вы ищете. Она была удалена, 
            переименована или никогда не существовала.
          </p>
          <Button asChild size="lg">
            <Link to="/">Вернуться на главную</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
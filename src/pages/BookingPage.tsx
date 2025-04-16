import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";

const BookingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-2 text-center">Запись на прием</h1>
            <p className="text-muted-foreground mb-8 text-center">
              Выберите удобное время для вашей процедуры депиляции
            </p>
            <BookingForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;
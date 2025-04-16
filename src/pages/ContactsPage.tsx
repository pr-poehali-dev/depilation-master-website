import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const ContactsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-2 text-center">Контакты</h1>
            <p className="text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
              Свяжитесь с нами любым удобным способом или посетите наш салон
            </p>
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactsPage;
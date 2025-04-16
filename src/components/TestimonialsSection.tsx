import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialProps {
  text: string;
  author: string;
  rating: number;
}

const Testimonial = ({ text, author, rating }: TestimonialProps) => {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="flex mb-2">
          {Array(5).fill(0).map((_, index) => (
            <Star 
              key={index} 
              className={`h-4 w-4 ${index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
            />
          ))}
        </div>
        <p className="mb-4">{text}</p>
        <p className="text-sm font-medium text-muted-foreground">{author}</p>
      </CardContent>
    </Card>
  );
};

const testimonials = [
  {
    text: "Отличный мастер! Всегда хожу только к Белле. Процедура проходит быстро, безболезненно и с потрясающим результатом. Очень рекомендую!",
    author: "Анна К.",
    rating: 5
  },
  {
    text: "Очень приятная атмосфера в студии, всегда чисто и уютно. Белла внимательна к деталям и дает полезные советы по уходу за кожей после процедуры.",
    author: "Мария Д.",
    rating: 5
  },
  {
    text: "Делала шугаринг впервые, боялась, но оказалось совсем не больно! Белла все подробно объяснила и помогла расслабиться. Результат держится уже три недели!",
    author: "Екатерина С.",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Отзывы клиентов</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Узнайте, что говорят о нашей студии депиляции клиенты, которые уже оценили качество наших услуг.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              text={testimonial.text}
              author={testimonial.author}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
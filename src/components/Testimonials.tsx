
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const testimonials = [
  {
    id: 1,
    name: "Chioma Okafor",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    content: "Dudushewa Cleaning Service has transformed my home! Their attention to detail is exceptional. I've been using their bi-weekly service for over a year, and my house has never looked better.",
    rating: 5
  },
  {
    id: 2,
    name: "Oluwaseun Adeyemi",
    role: "Office Manager",
    image: "https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    content: "We hired Dudushewa for our office cleaning needs, and they've exceeded our expectations. The team is professional, reliable, and thorough. Our workspace feels fresh and welcoming every day.",
    rating: 5
  },
  {
    id: 3,
    name: "Amaka Nwosu",
    role: "Property Manager",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    content: "Managing multiple properties requires dependable vendors. Dudushewa has proven to be our most reliable cleaning service. Their move-in/move-out cleanings are particularly outstanding.",
    rating: 5
  },
  {
    id: 4,
    name: "Tunde Bakare",
    role: "Restaurant Owner",
    image: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    content: "Keeping our restaurant spotless is critical to our success. Dudushewa understands the unique needs of food service businesses and delivers consistent, excellent results. Highly recommended!",
    rating: 5
  },
  {
    id: 5,
    name: "Folake Adeleke",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    content: "After trying several cleaning services, I finally found Dudushewa. The difference is night and day! They're thorough, consistent, and respectful of my home and belongings.",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleTestimonials = testimonials.slice(activeIndex, activeIndex + 3);
  
  const handlePrev = () => {
    setActiveIndex(Math.max(0, activeIndex - 1));
  };
  
  const handleNext = () => {
    setActiveIndex(Math.min(testimonials.length - 3, activeIndex + 1));
  };

  return (
    <section id="testimonials" className="section-padding bg-cleaning-light">
      <div className="max-width">
        <div className="text-center mb-12">
          <span className="text-cleaning-primary font-medium">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about
            our cleaning services.
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden md:flex gap-6">
            {visibleTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          
          <div className="md:hidden">
            <TestimonialCard testimonial={testimonials[activeIndex]} />
          </div>
          
          <div className="flex justify-center md:justify-between mt-6">
            <Button
              variant="outline"
              size="icon"
              className={cn("rounded-full", activeIndex === 0 && "opacity-50")}
              onClick={handlePrev}
              disabled={activeIndex === 0}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className={cn("rounded-full", activeIndex === testimonials.length - 3 && "opacity-50")}
              onClick={handleNext}
              disabled={activeIndex === testimonials.length - 3}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button className="gradient-bg">See All Reviews</Button>
        </div>
      </div>
    </section>
  );
};

interface TestimonialProps {
  testimonial: {
    id: number;
    name: string;
    role: string;
    image: string;
    content: string;
    rating: number;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialProps) => {
  return (
    <Card className="w-full md:w-1/3 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i}
              size={16}
              className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
            />
          ))}
        </div>
        
        <p className="text-gray-700 mb-6 h-36 overflow-hidden">"{testimonial.content}"</p>
        
        <div className="flex items-center">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="font-medium text-lg">{testimonial.name}</h4>
            <p className="text-sm text-gray-600">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Testimonials;

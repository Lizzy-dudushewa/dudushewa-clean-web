
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Jennifer Wilson",
    role: "Homeowner",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    content: "Dudushewa Cleaning Service has transformed my home! Their attention to detail is exceptional. I've been using their bi-weekly service for over a year, and my house has never looked better.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Thompson",
    role: "Office Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "We hired Dudushewa for our office cleaning needs, and they've exceeded our expectations. The team is professional, reliable, and thorough. Our workspace feels fresh and welcoming every day.",
    rating: 5
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    role: "Property Manager",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    content: "Managing multiple properties requires dependable vendors. Dudushewa has proven to be our most reliable cleaning service. Their move-in/move-out cleanings are particularly outstanding.",
    rating: 5
  },
  {
    id: 4,
    name: "David Chen",
    role: "Restaurant Owner",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    content: "Keeping our restaurant spotless is critical to our success. Dudushewa understands the unique needs of food service businesses and delivers consistent, excellent results. Highly recommended!",
    rating: 5
  },
  {
    id: 5,
    name: "Emma Johnson",
    role: "Homeowner",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
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


import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brush, Soap, ShowerHead, WashingMachine, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const servicesList = [
  {
    id: 1,
    title: "Residential Cleaning",
    description: "Comprehensive cleaning services for homes of all sizes, from apartments to large houses.",
    icon: <ShowerHead className="h-8 w-8" />,
    features: ["Deep cleaning", "Regular maintenance", "Move in/out cleaning", "Custom cleaning plans"],
  },
  {
    id: 2,
    title: "Commercial Cleaning",
    description: "Professional cleaning solutions for offices, retail spaces, and commercial properties.",
    icon: <Brush className="h-8 w-8" />,
    features: ["Office sanitization", "Floor maintenance", "Window cleaning", "Restroom sanitation"],
  },
  {
    id: 3,
    title: "Specialized Cleaning",
    description: "Expert cleaning for specific needs including post-construction, carpet, and upholstery.",
    icon: <Soap className="h-8 w-8" />,
    features: ["Carpet cleaning", "Upholstery cleaning", "Post-construction", "Event cleanup"],
  },
  {
    id: 4,
    title: "Subscription Plans",
    description: "Regular cleaning schedules with discounted rates and priority scheduling.",
    icon: <WashingMachine className="h-8 w-8" />,
    features: ["Weekly service", "Bi-weekly service", "Monthly service", "Customizable frequency"],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="max-width">
        <div className="text-center mb-12">
          <span className="text-cleaning-primary font-medium">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Professional Cleaning Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide top-quality cleaning services tailored to your specific needs. 
            From residential to commercial spaces, our professional team ensures exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="gradient-bg gap-2">
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

interface ServiceProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: JSX.Element;
    features: string[];
  };
}

const ServiceCard = ({ service }: ServiceProps) => {
  return (
    <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardHeader>
        <div className={cn(
          "w-14 h-14 rounded-lg flex items-center justify-center mb-4",
          "text-white gradient-bg"
        )}>
          {service.icon}
        </div>
        <CardTitle className="text-xl">{service.title}</CardTitle>
        <CardDescription className="text-gray-600">{service.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="mr-2 mt-1 text-cleaning-primary">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="w-full text-cleaning-primary hover:text-cleaning-accent">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Services;

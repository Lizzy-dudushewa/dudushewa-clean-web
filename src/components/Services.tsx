
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brush as BroomIcon, Home as House, Bed, UtensilsCrossed as KitchenIcon, Archive } from "lucide-react";
import { cn } from "@/lib/utils";

const servicesList = [
  {
    id: 1,
    title: "New House Cleaning",
    description: "Comprehensive cleaning services for newly built or renovated homes before you move in.",
    icon: <House className="h-8 w-8" />,
    features: ["Deep cleaning", "Dust removal", "Sanitization", "Interior windows"],
  },
  {
    id: 2,
    title: "Apartment Cleaning",
    description: "Thorough cleaning services for apartments of all sizes to keep your living space fresh and tidy.",
    icon: <Bed className="h-8 w-8" />,
    features: ["Living areas", "Bedrooms", "Bathrooms", "Common spaces"],
  },
  {
    id: 3,
    title: "Kitchen Cleaning",
    description: "Specialized cleaning for the heart of your home, focusing on appliances, surfaces, and organization.",
    icon: <KitchenIcon className="h-8 w-8" />,
    features: ["Appliance cleaning", "Cabinet organization", "Counter sanitizing", "Floor deep cleaning"],
  },
  {
    id: 4,
    title: "Pack-in/Pack-out Cleaning",
    description: "Specialized cleaning for move-in and move-out situations to ensure a smooth transition.",
    icon: <Archive className="h-8 w-8" />,
    features: ["Move-in preparation", "Move-out cleaning", "Landlord requirements", "Deposit-friendly cleaning"],
  },
  {
    id: 5,
    title: "Weekly Cleaning Services",
    description: "Regular cleaning schedules with discounted rates and priority scheduling.",
    icon: <BroomIcon className="h-8 w-8" />,
    features: ["Regular maintenance", "Custom frequency options", "Consistent cleaning team", "Flexible scheduling"],
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
            From new houses to apartments, kitchens, and regular maintenance - our professional team ensures exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="gradient-bg gap-2">
            Get a Cleaning Quote
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

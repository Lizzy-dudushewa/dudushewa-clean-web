import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brush as BroomIcon, Home as House, Bed, UtensilsCrossed as KitchenIcon, Archive, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Define type for pricing property to handle both formats
type PricingItem = {
  property: string;
  price: string;
} | {
  service: string;
  price: string;
};

// Define the service interface
interface ServiceType {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  features: string[];
  pricing?: PricingItem[] | {
    mainland: PricingItem[];
    island: PricingItem[];
  };
  note?: string;
  classicPricing?: string[];
  classicNote?: string;
  houseCleaning?: {
    frequency: string;
    price: string;
  }[];
  houseNote?: string;
}

const servicesList: ServiceType[] = [
  {
    id: 1,
    title: "New House Cleaning",
    description: "Comprehensive cleaning services for newly built or renovated homes before you move in.",
    icon: <House className="h-8 w-8" />,
    features: ["Deep cleaning", "Dust removal", "Sanitization", "Interior windows"],
    pricing: [
      { property: "ROOM SELF", price: "₦40,000" },
      { property: "ROOM & PARLOUR SELF", price: "₦50,000" },
      { property: "TWO BEDROOM FLAT", price: "₦80,000" },
      { property: "3 BEDROOM FLAT", price: "₦150,000" },
      { property: "4 BEDROOM FLAT", price: "₦170,000" },
      { property: "4 BEDROOM FLAT+STAIRS", price: "₦180,000" },
      { property: "5 BEDROOM FLATS", price: "₦200,000" },
      { property: "3 BED-DUPLEX", price: "₦250,000" },
      { property: "4 BEDROOM DUPLEX", price: "₦350,000" },
      { property: "5 BEDROOM DUPLEX", price: "₦450,000" },
      { property: "6 BEDROOM DUPLEX", price: "₦550,000" },
    ],
    note: "These estimates can vary based on your specific type of floors (Laminate, vinyl, cork, Linoleum, Terrazo etc.) and location. It's best to get personalized quotes.",
    classicPricing: [
      "2 BED+FLOOR POLISH",
      "3 BED+FLOOR POLISH",
      "4 BED+FLOOR POLISH",
      "HALF-DUPLEX+FLOOR POLISH",
      "FULL DUPLEX+FLOOR POLISH",
    ],
    classicNote: "CLASSIC CLEANING Includes: Basic cleaning + floor polish, kitchen wall polish, door polish, ward rope shining, window shining, frames etc."
  },
  {
    id: 2,
    title: "Apartment Cleaning",
    description: "Thorough cleaning services for apartments of all sizes to keep your living space fresh and tidy.",
    icon: <Bed className="h-8 w-8" />,
    features: ["Living areas", "Bedrooms", "Bathrooms", "Common spaces"],
    pricing: {
      mainland: [
        { property: "ROOM SELF", price: "₦30,000" },
        { property: "ROOM & PARLOUR SELF", price: "₦40,000" },
        { property: "TWO BEDROOM FLAT", price: "₦60,000" },
        { property: "3 BEDROOM FLAT", price: "₦100,000" },
        { property: "4 BEDROOM FLAT", price: "₦120,000" },
        { property: "4 BEDROOM FLAT+STAIRS", price: "₦150,000" },
        { property: "5 BEDROOM FLATS", price: "₦170,000" },
        { property: "6 BEDROOM FLATS", price: "₦180,000" },
        { property: "3 BED-DUPLEX", price: "₦200,000" },
        { property: "4 BEDROOM DUPLEX", price: "₦240,000" },
        { property: "5 BEDROOM DUPLEX", price: "₦300,000" },
        { property: "6 BEDROOM DUPLEX", price: "₦360,000" },
      ],
      island: [
        { property: "ROOM SELF", price: "₦50,000" },
        { property: "ROOM & PARLOUR SELF", price: "₦60,000" },
        { property: "TWO BEDROOM FLAT", price: "₦100,000" },
        { property: "3 BEDROOM FLAT", price: "₦140,000" },
        { property: "4 BEDROOM FLAT", price: "₦180,000" },
        { property: "4 BEDROOM FLAT+STAIRS", price: "₦200,000" },
        { property: "5 BEDROOM FLATS", price: "₦250,000" },
        { property: "3 BED-DUPLEX", price: "₦300,000" },
        { property: "4 BEDROOM DUPLEX", price: "₦350,000" },
        { property: "5 BEDROOM DUPLEX", price: "₦450,000" },
        { property: "6 BEDROOM DUPLEX", price: "₦550,000" },
      ]
    }
  },
  {
    id: 3,
    title: "Kitchen Cleaning",
    description: "Specialized cleaning for the heart of your home, focusing on appliances, surfaces, and organization.",
    icon: <KitchenIcon className="h-8 w-8" />,
    features: ["Appliance cleaning", "Cabinet organization", "Counter sanitizing", "Floor deep cleaning"],
    note: "Pricing varies based on kitchen size and condition. Contact us for a personalized quote."
  },
  {
    id: 4,
    title: "Pack-in/Pack-out Cleaning",
    description: "Specialized cleaning for move-in and move-out situations to ensure a smooth transition.",
    icon: <Archive className="h-8 w-8" />,
    features: ["Move-in preparation", "Move-out cleaning", "Landlord requirements", "Deposit-friendly cleaning"],
    note: "Please refer to our Apartment Cleaning pricing for Pack-in/Pack-out services."
  },
  {
    id: 5,
    title: "Weekly Cleaning Services",
    description: "Regular cleaning schedules with discounted rates and priority scheduling.",
    icon: <BroomIcon className="h-8 w-8" />,
    features: ["Regular maintenance", "Custom frequency options", "Consistent cleaning team", "Flexible scheduling"],
    pricing: [
      { property: "MON-FRI", price: "₦90,000" },
      { property: "MON-SATURDAY", price: "₦100,000" },
    ],
    note: "Excluding V.A.T. Cleaning hours are 7 am to 5 pm, but this can be flexible.",
    houseCleaning: [
      { frequency: "Twice a Week", price: "₦60,000" },
      { frequency: "Thrice a Week", price: "₦70,000" },
    ],
    houseNote: "CLIENT IS EXPECTED TO PAY THE PRICE ABOVE MONTHLY. These estimates can vary based on size, specific needs and location. It's best to get personalized quotes."
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

        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
          {servicesList.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="mt-12 text-center space-y-4">
          <Button className="gradient-bg gap-2">
            Get a Cleaning Quote
          </Button>
          <div className="flex justify-center items-center gap-4 mt-4">
            <a 
              href="https://wa.me/2349027507279" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cleaning-primary hover:text-cleaning-accent"
            >
              <MessageCircle className="h-5 w-5" />
              <span>09027507279</span>
            </a>
            <a 
              href="https://wa.me/2349168078539" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cleaning-primary hover:text-cleaning-accent"
            >
              <MessageCircle className="h-5 w-5" />
              <span>09168078539</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ServiceProps {
  service: ServiceType;
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
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Features</h4>
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
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="pricing">
            <AccordionTrigger className="text-cleaning-primary hover:text-cleaning-accent hover:no-underline">
              Learn More
            </AccordionTrigger>
            <AccordionContent>
              {/* Pricing Table for New House Cleaning */}
              {service.id === 1 && service.pricing && Array.isArray(service.pricing) && (
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">POST CONSTRUCTION CLEANING - BASIC CLEANING ESTIMATE</h4>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Property Type</TableHead>
                          <TableHead>Price</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {service.pricing.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell>{'property' in item ? item.property : item.service}</TableCell>
                            <TableCell>{item.price}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  {service.note && <p className="text-sm mt-2 text-gray-500">{service.note}</p>}
                  
                  {service.classicPricing && (
                    <div className="mt-6">
                      <h4 className="font-semibold mb-2">CLASSIC CLEANING ESTIMATE</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {service.classicPricing.map((item, index) => (
                          <li key={index} className="text-sm">{item}</li>
                        ))}
                      </ul>
                      {service.classicNote && <p className="text-sm mt-2 text-gray-500">{service.classicNote}</p>}
                    </div>
                  )}
                </div>
              )}

              {/* Pricing Table for Apartment Cleaning */}
              {service.id === 2 && service.pricing && !Array.isArray(service.pricing) && (
                <div className="mt-4 space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">LAGOS MAINLAND</h4>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Property Type</TableHead>
                            <TableHead>Price</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {service.pricing.mainland.map((item, index) => (
                            <TableRow key={index}>
                              <TableCell>{'property' in item ? item.property : item.service}</TableCell>
                              <TableCell>{item.price}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">LAGOS ISLAND / LEKKI / AJAH</h4>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Property Type</TableHead>
                            <TableHead>Price</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {service.pricing.island.map((item, index) => (
                            <TableRow key={index}>
                              <TableCell>{'property' in item ? item.property : item.service}</TableCell>
                              <TableCell>{item.price}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </div>
              )}

              {/* Pricing Table for Weekly Cleaning Services */}
              {service.id === 5 && service.pricing && Array.isArray(service.pricing) && (
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">OFFICE CLEANERS</h4>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Service</TableHead>
                          <TableHead>Price</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {service.pricing.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell>{'property' in item ? item.property : item.service}</TableCell>
                            <TableCell>{item.price}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  {service.note && <p className="text-sm mt-2 text-gray-500">{service.note}</p>}
                  
                  {service.houseCleaning && (
                    <div className="mt-6">
                      <h4 className="font-semibold mb-2">WEEKLY HOUSE CLEANING PER CLEANER</h4>
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Frequency</TableHead>
                              <TableHead>Price</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {service.houseCleaning.map((item, index) => (
                              <TableRow key={index}>
                                <TableCell>{item.frequency}</TableCell>
                                <TableCell>{item.price}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                      {service.houseNote && <p className="text-sm mt-2 text-gray-500">{service.houseNote}</p>}
                    </div>
                  )}
                </div>
              )}

              {/* Note for Kitchen Cleaning and Pack-in/Pack-out Cleaning */}
              {(service.id === 3 || service.id === 4) && service.note && (
                <div className="mt-4">
                  <p className="text-sm text-gray-500">{service.note}</p>
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <a 
          href="https://wa.me/2349027507279" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-cleaning-primary hover:text-cleaning-accent"
        >
          <MessageCircle className="h-5 w-5" />
          <span>Contact via WhatsApp</span>
        </a>
      </CardFooter>
    </Card>
  );
};

export default Services;

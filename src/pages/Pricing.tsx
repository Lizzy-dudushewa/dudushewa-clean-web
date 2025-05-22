
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    id: 1,
    name: "Basic Cleaning",
    price: "₦15,000",
    description: "Perfect for regular maintenance cleaning",
    features: [
      "Dusting all accessible surfaces",
      "Vacuuming carpets and floors",
      "Mopping all floors",
      "Cleaning kitchen surfaces",
      "Cleaning bathrooms",
      "Emptying trash bins"
    ],
    popular: false
  },
  {
    id: 2,
    name: "Deep Cleaning",
    price: "₦35,000",
    description: "Thorough cleaning for homes needing extra attention",
    features: [
      "All Basic Cleaning services",
      "Deep cleaning of kitchen appliances",
      "Interior window cleaning",
      "Cleaning behind and under furniture",
      "Deep bathroom sanitization",
      "Ceiling fan and light fixture cleaning",
      "Baseboard and door frame cleaning"
    ],
    popular: true
  },
  {
    id: 3,
    name: "Move In/Out Cleaning",
    price: "₦45,000",
    description: "Comprehensive cleaning for property transitions",
    features: [
      "All Deep Cleaning services",
      "Inside cabinet cleaning",
      "Refrigerator cleaning",
      "Oven and stove deep cleaning",
      "Wall spot cleaning",
      "Light switch and door handle sanitizing",
      "Window sill and track cleaning",
      "Balcony/patio cleaning"
    ],
    popular: false
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="section-padding">
          <div className="max-width">
            <div className="text-center mb-12">
              <span className="text-cleaning-primary font-medium">Our Pricing</span>
              <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-4">Simple, Transparent Pricing</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose the perfect cleaning package for your needs. All our services 
                can be customized to fit your specific requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {pricingPlans.map((plan) => (
                <Card key={plan.id} className={`relative overflow-hidden ${plan.popular ? 'border-cleaning-primary shadow-lg' : 'border-gray-200'}`}>
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-cleaning-primary text-white py-1 px-4 rounded-bl-lg font-medium text-sm">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-500 ml-2">per service</span>
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-cleaning-primary shrink-0 mr-2" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className={`w-full ${plan.popular ? 'gradient-bg' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                    >
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-16 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Custom Cleaning Solutions</h3>
              <p className="text-gray-600 mb-6">
                Need something specific? We offer customized cleaning plans tailored to your unique needs.
                Contact us for a personalized quote.
              </p>
              <Button className="gradient-bg">Request Custom Quote</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;

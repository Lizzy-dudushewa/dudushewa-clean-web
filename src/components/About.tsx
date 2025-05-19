
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-cleaning-primary font-medium">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Dudushewa Cleaning Service</h2>
            
            <p className="text-gray-700 mb-4">
              Founded with a passion for cleanliness and customer satisfaction, Dudushewa Cleaning Service has been providing exceptional cleaning solutions for over 10 years. We take pride in turning dirty spaces into spotless environments that promote health, comfort, and well-being.
            </p>
            
            <p className="text-gray-700 mb-6">
              Our team consists of highly trained professionals who use eco-friendly products and advanced cleaning techniques. We are committed to delivering consistent quality service while maintaining the highest standards of professionalism and integrity.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <ValueCard title="Reliability" description="Consistent quality service with every cleaning" />
              <ValueCard title="Integrity" description="Honest pricing and transparent policies" />
              <ValueCard title="Excellence" description="Attention to detail in everything we do" />
              <ValueCard title="Customer Focus" description="Tailored solutions for your specific needs" />
            </div>
            
            <Button className="gradient-bg">Learn More About Us</Button>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-cleaning-light rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 border-2 border-cleaning-primary rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80" 
                alt="Cleaning team" 
                className="w-full h-[400px] object-cover rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <StatCard number="10+" text="Years of Experience" />
          <StatCard number="5,000+" text="Satisfied Customers" />
          <StatCard number="25+" text="Team Members" />
          <StatCard number="99%" text="Customer Satisfaction" />
        </div>
      </div>
    </section>
  );
};

const ValueCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="font-inter font-medium text-lg mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

const StatCard = ({ number, text }: { number: string; text: string }) => {
  return (
    <div className={cn(
      "text-center p-6 rounded-lg",
      "shadow-sm hover:shadow-md transition-shadow",
      "border border-gray-100"
    )}>
      <div className="font-inter font-bold text-3xl text-cleaning-primary mb-2">{number}</div>
      <div className="text-gray-700">{text}</div>
    </div>
  );
};

export default About;

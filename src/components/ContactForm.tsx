
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Mail, MapPin, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  service: z.string().min(1, {
    message: "Please select a service.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", data);
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you soon.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-width">
        <div className="text-center mb-12">
          <span className="text-cleaning-primary font-medium">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Get In Touch With Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our services or ready to schedule a cleaning?
            Contact us today for a free estimate or more information.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-cleaning-light p-6 rounded-lg h-full">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <ContactInfo 
                  icon={<Phone size={20} />}
                  title="Phone"
                  details={["(555) 123-4567"]}
                />
                
                <ContactInfo 
                  icon={<Mail size={20} />}
                  title="Email"
                  details={["info@dudushewa.com", "support@dudushewa.com"]}
                />
                
                <ContactInfo 
                  icon={<MapPin size={20} />}
                  title="Address"
                  details={["123 Cleaning Street", "City, State 12345"]}
                />
                
                <ContactInfo 
                  icon={<Calendar size={20} />}
                  title="Working Hours"
                  details={["Monday-Friday: 8AM - 6PM", "Saturday: 9AM - 4PM", "Sunday: Closed"]}
                />
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold mb-6">Send Us A Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="johndoe@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="(555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Interest</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="residential">Residential Cleaning</SelectItem>
                              <SelectItem value="commercial">Commercial Cleaning</SelectItem>
                              <SelectItem value="specialized">Specialized Cleaning</SelectItem>
                              <SelectItem value="subscription">Subscription Plans</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please provide details about your cleaning needs..." 
                            className="min-h-32" 
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="text-right">
                    <Button type="submit" className="gradient-bg w-full md:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

const ContactInfo = ({ icon, title, details }: ContactInfoProps) => {
  return (
    <div className="flex items-start">
      <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white mr-4">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-gray-900">{title}</h4>
        {details.map((detail, index) => (
          <p key={index} className="text-gray-700 text-sm">{detail}</p>
        ))}
      </div>
    </div>
  );
};

export default ContactForm;

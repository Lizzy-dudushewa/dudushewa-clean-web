
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
        <div className="text-center mb-8 md:mb-12">
          <span className="text-cleaning-primary font-medium text-sm md:text-base">Contact Us</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-3 md:mb-4 px-4">Get In Touch With Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base px-4">
            Have questions about our services or ready to schedule a cleaning?
            Contact us today for a free estimate or more information.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="md:col-span-1 order-2 md:order-1">
            <div className="bg-cleaning-light p-4 md:p-6 rounded-lg h-full">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Contact Information</h3>
              
              <div className="space-y-4 md:space-y-6">
                <ContactInfo 
                  icon={<MapPin size={18} className="md:w-5 md:h-5" />}
                  title="Address"
                  details={["21, Olubi Street", "Ikorodu, Lagos"]}
                />
                
                <ContactInfo 
                  icon={<Phone size={18} className="md:w-5 md:h-5" />}
                  title="Phone"
                  details={[
                    <a key="phone1" href="tel:+2349027507279" className="hover:text-cleaning-primary transition-colors">09027507279</a>,
                    <a key="phone2" href="tel:+2349168078539" className="hover:text-cleaning-primary transition-colors">09168078539</a>
                  ]}
                />
                
                <ContactInfo 
                  icon={<Mail size={18} className="md:w-5 md:h-5" />}
                  title="Email"
                  details={[
                    <a key="email" href="mailto:elizabethannah6@gmail.com" className="hover:text-cleaning-primary transition-colors">elizabethannah6@gmail.com</a>
                  ]}
                />
                
                <ContactInfo 
                  icon={<svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>}
                  title="WhatsApp"
                  details={[
                    <a key="whatsapp" href="https://wa.me/+2349027507279" className="hover:text-cleaning-primary transition-colors">Click to chat</a>
                  ]}
                />
                
                <ContactInfo 
                  icon={<Calendar size={18} className="md:w-5 md:h-5" />}
                  title="Working Hours"
                  details={["Monday-Saturday: 8AM - 6PM", "Sunday: By appointment only"]}
                />
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 order-1 md:order-2">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Send Us A Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm md:text-base">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="text-sm md:text-base" {...field} />
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
                          <FormLabel className="text-sm md:text-base">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="johndoe@example.com" className="text-sm md:text-base" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm md:text-base">Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="09027507279" className="text-sm md:text-base" {...field} />
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
                          <FormLabel className="text-sm md:text-base">Service Interest</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="text-sm md:text-base">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="newhouse">New House Cleaning</SelectItem>
                              <SelectItem value="apartment">Apartment Cleaning</SelectItem>
                              <SelectItem value="kitchen">Kitchen Cleaning</SelectItem>
                              <SelectItem value="packinout">Pack-in/Pack-out Cleaning</SelectItem>
                              <SelectItem value="weekly">Weekly Cleaning Services</SelectItem>
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
                        <FormLabel className="text-sm md:text-base">Your Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please provide details about your cleaning needs..." 
                            className="min-h-24 md:min-h-32 text-sm md:text-base" 
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="text-right">
                    <Button type="submit" className="gradient-bg w-full md:w-auto text-sm md:text-base" disabled={isSubmitting}>
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
  details: (string | JSX.Element)[];
}

const ContactInfo = ({ icon, title, details }: ContactInfoProps) => {
  return (
    <div className="flex items-start">
      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full gradient-bg flex items-center justify-center text-white mr-3 md:mr-4 flex-shrink-0">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="font-medium text-gray-900 text-sm md:text-base">{title}</h4>
        {details.map((detail, index) => (
          <p key={index} className="text-gray-700 text-xs md:text-sm break-words">{detail}</p>
        ))}
      </div>
    </div>
  );
};

export default ContactForm;


import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const ServiceArea = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="section-padding">
          <div className="max-width">
            <div className="text-center mb-12">
              <span className="text-cleaning-primary font-medium">Service Areas</span>
              <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-4">Where We Clean</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Dudushewa Cleaning Service proudly serves homes and businesses throughout Lagos, Nigeria.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px] md:h-[500px] relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.4634429147!2d3.1191195150336343!3d6.548055350000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1716387180316!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lagos service area map"
                  ></iframe>
                </div>
              </div>
              
              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Areas We Serve</h3>
                    <ul className="space-y-4">
                      {[
                        "Ikeja", "Victoria Island", "Lekki", "Ikoyi", "Ajah",
                        "Surulere", "Yaba", "Maryland", "Gbagada", "Magodo",
                        "Ogudu", "Omole", "Ojodu", "Ogba", "Agege", "Ikorodu",
                        "Ketu", "Ojodu-Berger", "Ibeju-Lekki", "Ogun State and its environs"
                      ].map((area) => (
                        <li key={area} className="flex items-center">
                          <MapPin className="h-5 w-5 text-cleaning-primary mr-2" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h4 className="font-bold mb-2">Not on the list?</h4>
                      <p className="text-gray-600 mb-4">
                        We may still be able to service your location. Contact us to find out!
                      </p>
                      <a 
                        href="tel:+2349027507279" 
                        className="flex items-center text-cleaning-primary hover:text-cleaning-accent transition-colors"
                      >
                        <Phone className="h-5 w-5 mr-2" />
                        <span>09027507279</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="bg-cleaning-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Commercial Service Areas</h3>
              <p className="text-gray-600 mb-4">
                For commercial cleaning services, we serve businesses throughout Lagos and can travel to 
                neighboring cities for large contracts. Contact us for commercial inquiries.
              </p>
              <p className="text-gray-600">
                <strong>Note:</strong> Additional travel fees may apply for locations outside our primary service area.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceArea;

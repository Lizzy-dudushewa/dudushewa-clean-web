
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from "@/components/ui/separator";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="section-padding">
          <div className="max-width">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
            
            <div className="prose max-w-none">
              <p>Last updated: May 22, 2023</p>
              
              <h2>1. Introduction</h2>
              <p>
                These Terms of Service ("Terms") govern your use of the website operated by Dudushewa Cleaning Service 
                ("we," "us," or "our") and the cleaning services we provide. By accessing our website or using 
                our services, you agree to be bound by these Terms.
              </p>
              
              <h2>2. Services</h2>
              <p>
                Dudushewa Cleaning Service provides residential and commercial cleaning services as described 
                on our website. We reserve the right to refuse service to anyone for any reason at any time.
              </p>
              
              <h2>3. Bookings and Cancellations</h2>
              <p>
                <strong>Booking Confirmation:</strong> All service bookings are subject to availability and confirmation.
              </p>
              <p>
                <strong>Cancellation Policy:</strong> Cancellations must be made at least 24 hours before the scheduled 
                service. Cancellations made less than 24 hours in advance may be subject to a cancellation fee of 
                up to 50% of the service price.
              </p>
              <p>
                <strong>Rescheduling:</strong> Requests to reschedule a service must be made at least 24 hours in 
                advance. Late rescheduling requests may be subject to additional fees.
              </p>
              
              <h2>4. Payment Terms</h2>
              <p>
                <strong>Pricing:</strong> Prices for our services are as quoted on our website or as agreed upon 
                in writing. All prices are in Nigerian Naira (₦) and are subject to change.
              </p>
              <p>
                <strong>Payment Methods:</strong> We accept various payment methods as indicated on our website 
                or during the booking process.
              </p>
              <p>
                <strong>Invoicing:</strong> For recurring services, invoices will be issued according to the 
                agreed schedule. Payment is due upon receipt of the invoice unless otherwise specified.
              </p>
              
              <h2>5. Service Standards and Satisfaction</h2>
              <p>
                <strong>Quality Commitment:</strong> We are committed to providing high-quality cleaning services. 
                If you are not satisfied with any aspect of our service, please notify us within 24 hours of 
                service completion, and we will address your concerns.
              </p>
              <p>
                <strong>Service Guarantee:</strong> If you are not completely satisfied with our service, we will 
                re-clean the unsatisfactory areas at no additional cost if notified within 24 hours of service completion.
              </p>
              
              <h2>6. Access and Property</h2>
              <p>
                <strong>Access:</strong> You are responsible for ensuring that our cleaning team has access to 
                the premises at the scheduled time. Additional charges may apply if our team is unable to access 
                the premises or if there is a significant delay.
              </p>
              <p>
                <strong>Property and Valuables:</strong> While we take utmost care when cleaning, we recommend 
                that you secure valuable items before our visit. We are not responsible for damage to items that 
                are inherently fragile, already damaged, or improperly secured.
              </p>
              
              <h2>7. Liability</h2>
              <p>
                <strong>Insurance:</strong> We maintain appropriate insurance coverage for our services. However, 
                our liability is limited to direct damages caused by our negligence and shall not exceed the 
                amount paid for the specific service.
              </p>
              <p>
                <strong>Exclusions:</strong> We are not liable for:
              </p>
              <ul>
                <li>Normal wear and tear</li>
                <li>Pre-existing damage or conditions</li>
                <li>Damage resulting from improper installation, material defects, or customer instructions</li>
                <li>Indirect or consequential losses</li>
              </ul>
              
              <h2>8. Communication</h2>
              <p>
                By using our services, you agree to receive communications from us regarding your bookings, 
                including reminders, confirmations, and service-related updates. You may opt out of 
                marketing communications at any time.
              </p>
              
              <h2>9. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately 
                upon posting on our website. Your continued use of our services after any changes indicates 
                your acceptance of the modified Terms.
              </p>
              
              <h2>10. Governing Law</h2>
              <p>
                These Terms are governed by the laws of Nigeria. Any disputes arising from these Terms or our 
                services shall be subject to the exclusive jurisdiction of the courts of Nigeria.
              </p>
              
              <h2>11. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p>
                Email: elizabethannah6@gmail.com<br />
                Phone: 09027507279
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;

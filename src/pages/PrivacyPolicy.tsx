
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="section-padding">
          <div className="max-width">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
            
            <div className="prose max-w-none">
              <p>Last updated: May 22, 2023</p>
              
              <h2>1. Introduction</h2>
              <p>
                Dudushewa Cleaning Service ("we," "our," or "us") respects your privacy and is committed to 
                protecting your personal data. This privacy policy will inform you about how we look after your 
                personal data when you visit our website and tell you about your privacy rights and how the law 
                protects you.
              </p>
              
              <h2>2. Data We Collect</h2>
              <p>We may collect, use, store and transfer different kinds of personal data about you, including:</p>
              <ul>
                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier</li>
                <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers</li>
                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website</li>
                <li><strong>Usage Data:</strong> includes information about how you use our website, products, and services</li>
                <li><strong>Marketing and Communications Data:</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences</li>
              </ul>
              
              <h2>3. How We Use Your Data</h2>
              <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul>
                <li>To register you as a new customer</li>
                <li>To process and deliver your service order</li>
                <li>To manage our relationship with you</li>
                <li>To improve our website, products/services, marketing, or customer relationships</li>
                <li>To recommend products or services that may be of interest to you</li>
              </ul>
              
              <h2>4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being 
                accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, 
                we limit access to your personal data to those employees, agents, contractors, and other third 
                parties who have a business need to know.
              </p>
              
              <h2>5. Data Retention</h2>
              <p>
                We will only retain your personal data for as long as necessary to fulfill the purposes we 
                collected it for, including for the purposes of satisfying any legal, accounting, or 
                reporting requirements.
              </p>
              
              <h2>6. Your Legal Rights</h2>
              <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
              <ul>
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Right to withdraw consent</li>
              </ul>
              
              <h2>7. Third-Party Links</h2>
              <p>
                This website may include links to third-party websites, plug-ins, and applications. Clicking on 
                those links or enabling those connections may allow third parties to collect or share data about 
                you. We do not control these third-party websites and are not responsible for their privacy 
                statements.
              </p>
              
              <h2>8. Cookies</h2>
              <p>
                You can set your browser to refuse all or some browser cookies, or to alert you when websites 
                set or access cookies. If you disable or refuse cookies, please note that some parts of this 
                website may become inaccessible or not function properly.
              </p>
              
              <h2>9. Changes to the Privacy Policy</h2>
              <p>
                We may update our privacy policy from time to time. We will notify you of any changes by 
                posting the new privacy policy on this page and updating the "last updated" date.
              </p>
              
              <h2>10. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
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

export default PrivacyPolicy;

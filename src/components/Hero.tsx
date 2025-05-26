
import { Button } from '@/components/ui/button';
import { Brush, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="pt-20 pb-8 md:pt-32 md:pb-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-cleaning-light opacity-60">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="max-width relative z-10">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="text-center md:text-left px-4 md:px-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6">
              Professional <span className="text-cleaning-primary">Cleaning</span> Services
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 max-w-lg mx-auto md:mx-0">
              Transform your space with our premium cleaning services. Experience spotless results and exceptional customer satisfaction.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 md:gap-4 mb-6 md:mb-8">
              <Button size="lg" className="gradient-bg gap-2 h-10 md:h-12 px-4 md:px-6 text-sm md:text-base w-full sm:w-auto">
                <Brush size={16} className="md:w-[18px] md:h-[18px]" />
                Book Cleaning
              </Button>
              <Button size="lg" variant="outline" className="h-10 md:h-12 px-4 md:px-6 text-sm md:text-base w-full sm:w-auto">
                View Services
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 md:gap-6 text-xs md:text-sm">
              <BenefitBadge text="100% Satisfaction" />
              <BenefitBadge text="Licensed & Insured" />
              <BenefitBadge text="Free Estimates" />
            </div>
          </div>

          <div className={cn(
            "relative rounded-lg overflow-hidden shadow-xl mx-4 md:mx-0",
            "h-[250px] md:h-[350px] lg:h-[400px] xl:h-[460px]"
          )}>
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
              alt="Professional cleaning service team working in a modern home interior with cleaning supplies and equipment" 
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-3 md:p-6">
              <div className="bg-white bg-opacity-95 p-3 md:p-4 rounded-lg shadow-lg max-w-xs">
                <p className="font-bold text-gray-800 text-sm md:text-base">Trusted by 5,000+ customers</p>
                <p className="text-xs md:text-sm text-gray-600">We deliver exceptional cleaning experiences every time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitBadge = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center gap-1.5">
      <CheckCircle size={14} className="text-cleaning-primary md:w-4 md:h-4" />
      <span className="font-medium">{text}</span>
    </div>
  );
};

export default Hero;

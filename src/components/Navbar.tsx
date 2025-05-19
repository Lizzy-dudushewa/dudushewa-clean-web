
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Brush as BroomIcon, WhatsappIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-width flex justify-between items-center py-4">
        <a href="/" className="flex items-center space-x-2">
          <BroomIcon size={28} className="text-cleaning-primary" />
          <span className="font-inter font-bold text-xl">Dudushewa Cleaning</span>
        </a>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </Button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLinks className="flex space-x-6" />
          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/2349027507279" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cleaning-primary hover:text-cleaning-accent"
            >
              <WhatsappIcon className="h-5 w-5" />
              <span>09027507279</span>
            </a>
            <Button className="gradient-bg">Get a Quote</Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-4 pt-2 pb-4 space-y-1 bg-white shadow-md">
          <NavLinks className="flex flex-col space-y-2" />
          <a 
            href="https://wa.me/2349027507279" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cleaning-primary hover:text-cleaning-accent mt-3"
          >
            <WhatsappIcon className="h-5 w-5" />
            <span>WhatsApp: 09027507279</span>
          </a>
          <Button className="gradient-bg w-full mt-4">Get a Quote</Button>
        </div>
      </div>
    </nav>
  );
};

const NavLinks = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <a href="#services" className="text-gray-700 hover:text-cleaning-primary font-medium">Services</a>
      <a href="#about" className="text-gray-700 hover:text-cleaning-primary font-medium">About</a>
      <a href="#testimonials" className="text-gray-700 hover:text-cleaning-primary font-medium">Testimonials</a>
      <a href="#contact" className="text-gray-700 hover:text-cleaning-primary font-medium">Contact</a>
    </div>
  );
};

export default Navbar;


import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Brush as BroomIcon, MessageCircle, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-width flex justify-between items-center py-4">
        <Link to="/" className="flex items-center space-x-2">
          <BroomIcon size={28} className="text-cleaning-primary" />
          <span className="font-inter font-bold text-xl">Dudushewa Cleaning</span>
        </Link>

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
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/#services" className={navigationMenuTriggerStyle()}>Services</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/#about" className={navigationMenuTriggerStyle()}>About</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/pricing" className={navigationMenuTriggerStyle()}>Pricing</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>More</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/service-area" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium">Service Areas</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            See where we provide our services
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/blog" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium">Blog</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Cleaning tips and industry insights
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/#testimonials" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium">Testimonials</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            See what our customers say
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/#contact" className={navigationMenuTriggerStyle()}>Contact</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/2349027507279" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cleaning-primary hover:text-cleaning-accent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-message-circle"
              >
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
              </svg>
              <span>09027507279</span>
            </a>
            <Button className="gradient-bg">Get a Quote</Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-4 pt-2 pb-4 space-y-1 bg-white shadow-md">
          <Link to="/#services" className="block py-2 text-gray-700 hover:text-cleaning-primary font-medium">Services</Link>
          <Link to="/#about" className="block py-2 text-gray-700 hover:text-cleaning-primary font-medium">About</Link>
          <Link to="/pricing" className="block py-2 text-gray-700 hover:text-cleaning-primary font-medium">Pricing</Link>
          <Link to="/service-area" className="block py-2 text-gray-700 hover:text-cleaning-primary font-medium">Service Areas</Link>
          <Link to="/blog" className="block py-2 text-gray-700 hover:text-cleaning-primary font-medium">Blog</Link>
          <Link to="/#testimonials" className="block py-2 text-gray-700 hover:text-cleaning-primary font-medium">Testimonials</Link>
          <Link to="/#contact" className="block py-2 text-gray-700 hover:text-cleaning-primary font-medium">Contact</Link>
          <a 
            href="https://wa.me/2349027507279" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cleaning-primary hover:text-cleaning-accent mt-3"
          >
            <MessageCircle className="h-5 w-5" />
            <span>WhatsApp: 09027507279</span>
          </a>
          <Button className="gradient-bg w-full mt-4">Get a Quote</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

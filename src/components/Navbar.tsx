
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    {
      href: '/#home',
      label: 'HOME'
    }, 
    {
      href: '/#about',
      label: 'ABOUT'
    },
    {
      href: '/#vision',
      label: 'VISION'
    },
    {
      href: '/#projects',
      label: 'PROJECTS'
    },
    {
      href: '/#contact',
      label: 'CONTACT'
    }
  ];
  
  const handleNavigation = (href: string) => {
    setMobileMenuOpen(false);
    
    if (href.startsWith('/#')) {
      // Get the section ID
      const sectionId = href.replace('/#', '');
      
      // If we're not on the home page, navigate to home with hash
      if (location.pathname !== '/') {
        console.log("Navigating from", location.pathname, "to homepage with hash:", href);
        // We need to force a full navigation to reset any state
        window.location.href = href;
        return;
      } 
      
      // We're on the home page, just scroll to the section
      console.log("On homepage, scrolling to section:", sectionId);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        
        // Update the URL without triggering navigation
        window.history.pushState(null, '', href);
      } else {
        console.warn("Section not found:", sectionId);
      }
    } else {
      // Handle navigation to other pages
      navigate(href);
    }
  };

  return (
    <>
      <header className={cn("fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-10", 
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-purple-900/20" : "bg-transparent")}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="relative z-10 flex items-center gap-3">
            <img src="/lovable-uploads/900889e4-9689-4df1-9b22-bedd8ec71caa.png" alt="Polycosmos Logo" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div 
                key={link.href} 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <button 
                  onClick={() => handleNavigation(link.href)}
                  className="relative text-sm font-medium text-foreground/70 hover:text-purple-400 transition-colors font-aston before:absolute before:w-0 before:h-0.5 before:bottom-0 before:left-0 before:bg-purple-500 hover:before:w-full before:transition-all before:duration-300"
                >
                  {link.label}
                </button>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-foreground/90 focus:outline-none z-20" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link, index) => (
                <motion.div 
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <button 
                    onClick={() => handleNavigation(link.href)}
                    className="text-xl font-aston text-foreground/80 hover:text-purple-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

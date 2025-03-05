
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        // Cast to HTMLElement to access offsetTop and offsetHeight
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop - 150;
        const sectionBottom = sectionTop + htmlSection.offsetHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header 
      className={cn(
        "fixed w-full top-0 z-50 px-6 md:px-12 transition-all duration-300 flex items-center justify-between h-20",
        isScrolled ? "bg-background/70 backdrop-blur-xl shadow-sm" : "bg-transparent"
      )}
    >
      <div className="flex items-center">
        <a href="#home" className="text-xl md:text-2xl font-bold tracking-tighter">
          Portfolio<span className="text-blue-500">.</span>
        </a>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={cn(
              "relative text-sm font-medium transition-colors hover:text-foreground/90 link-underline",
              activeSection === link.href.substring(1) 
                ? "text-foreground" 
                : "text-foreground/60"
            )}
          >
            {link.name}
          </a>
        ))}
      </nav>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-accent/50 transition-colors"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-sm md:hidden z-50 flex flex-col justify-center transition-all duration-300 ease-in-out",
          isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <button 
          className="absolute top-6 right-6 flex items-center justify-center w-10 h-10 rounded-full hover:bg-accent/50 transition-colors"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <X size={20} />
        </button>
        
        <nav className="flex flex-col items-center space-y-8 p-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-xl font-medium transition-colors link-underline",
                activeSection === link.href.substring(1) 
                  ? "text-foreground" 
                  : "text-foreground/60"
              )}
              onClick={toggleMenu}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

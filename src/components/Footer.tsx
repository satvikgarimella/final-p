
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 px-6 md:px-12 border-t border-blue-900/30">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold tracking-tighter">
              Portfolio<span className="text-blue-500">.</span>
            </a>
            <p className="text-sm text-blue-400/70 mt-2">
              Designing and building digital experiences <br className="hidden md:block" /> 
              that are beautiful, functional, and human-centered.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={handleScrollToTop}
              className="mb-6 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center hover:bg-blue-500/20 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-blue-400" />
            </button>
            
            <p className="text-sm text-blue-400/70">
              &copy; {currentYear} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React, { useEffect, useRef } from 'react';
import AnimatedText from './AnimatedText';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const container = containerRef.current;
      
      if (!container) return;
      
      const centerX = container.offsetWidth / 2;
      const centerY = container.offsetHeight / 2;
      
      const moveX = (clientX - centerX) / 50;
      const moveY = (clientY - centerY) / 50;
      
      const elements = container.querySelectorAll('.parallax');
      
      elements.forEach((el) => {
        const depth = parseFloat((el as HTMLElement).dataset.depth || '0.1');
        (el as HTMLElement).style.transform = `translate(${moveX * depth}px, ${moveY * depth}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden section-padding"
      ref={containerRef}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="parallax absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl" 
          data-depth="0.2"
        ></div>
        <div 
          className="parallax absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl" 
          data-depth="0.3"
        ></div>
      </div>
      
      <div className="container max-w-5xl mx-auto text-center z-10">
        <div className="mb-4 inline-block rounded-full bg-blue-950/60 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-blue-200 animate-fade-in">
          <span className="inline-block animate-pulse mr-1.5 h-2 w-2 rounded-full bg-blue-500"></span>
          Available for work
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tighter">
          <AnimatedText 
            text="Hello, I'm " 
            className="inline-block"
            speed={50}
          />
          <AnimatedText 
            text="Your Name" 
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 inline-block"
            delay={1200}
            speed={50}
          />
        </h1>
        
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          <AnimatedText 
            text="I design and build digital experiences that are beautiful, functional, and human-centered."
            delay={2400}
            speed={30}
          />
        </h2>
        
        <div className="flex flex-wrap gap-4 justify-center items-center animate-fade-in [animation-delay:3s]">
          <a 
            href="#projects" 
            className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium transition-all hover:scale-105 hover:shadow-lg hover:bg-blue-500"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 rounded-full bg-transparent border border-blue-500 text-blue-500 font-medium transition-all hover:bg-blue-500/5"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-10 h-16 rounded-full border-2 border-blue-500/30 flex items-start justify-center p-2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-5 h-5 text-blue-500/70" />
      </a>
    </section>
  );
};

export default Hero;

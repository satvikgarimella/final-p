
import React, { useEffect } from 'react';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Set document title
    document.title = "Portfolio - Your Name";
    
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);
    
    // Add a dark background color to the body
    document.body.style.backgroundColor = "#0f172a"; // This is a dark blue color
    
    return () => {
      // Reset body background when component unmounts
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default Index;

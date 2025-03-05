
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const aboutContent = {
  heading: "About Me",
  tagline: "Creating digital experiences with purpose",
  bio: [
    "I'm a passionate designer and developer specializing in creating beautiful, functional, and human-centered digital experiences.",
    "With a strong foundation in both design and development, I bridge the gap between aesthetics and functionality to build products that not only look great but also solve real problems.",
    "I believe in minimalist design principles, where every element serves a purpose and contributes to the overall user experience."
  ],
  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "30+", label: "Happy Clients" }
  ]
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image Column */}
          <div ref={ref} className="relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br from-blue-900 to-black">
                {/* Replace with your actual image */}
                <div className="w-full h-full bg-blue-950 flex items-center justify-center text-blue-300/30 text-sm">
                  Your Photo Here
                </div>
              </div>
            </motion.div>
            
            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -top-5 -left-5 w-full h-full border-2 border-blue-500/10 rounded-xl z-0"
            ></motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={controls}
              variants={{
                visible: { opacity: 0.8 }
              }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl z-0"
            ></motion.div>
          </div>
          
          {/* Content Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm uppercase tracking-widest text-blue-400 mb-2">
                {aboutContent.tagline}
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                {aboutContent.heading}
              </h3>
              
              <div className="space-y-4 mb-8 text-blue-400/80">
                {aboutContent.bio.map((paragraph, i) => (
                  <motion.p 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
              
              <motion.div 
                className="grid grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {aboutContent.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-blue-500">{stat.value}</div>
                    <div className="text-sm text-blue-400/80">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

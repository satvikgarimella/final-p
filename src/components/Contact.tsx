
import React from 'react';
import SectionHeader from './contact/SectionHeader';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container max-w-7xl mx-auto">
        <SectionHeader 
          subtitle="Get In Touch"
          title="Let's Work Together"
          description="Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <ContactInfo />
          
          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;

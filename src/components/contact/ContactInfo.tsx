
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="glass-card p-6">
      <h4 className="text-xl font-medium mb-6">Contact Information</h4>
      
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-accent/50 flex items-center justify-center flex-shrink-0">
            <Mail className="w-5 h-5 text-foreground/70" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <a href="mailto:your.email@example.com" className="text-foreground hover:text-blue-500 transition-colors">
              your.email@example.com
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-accent/50 flex items-center justify-center flex-shrink-0">
            <Phone className="w-5 h-5 text-foreground/70" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Phone</p>
            <a href="tel:+1234567890" className="text-foreground hover:text-blue-500 transition-colors">
              +1 (234) 567-890
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-accent/50 flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-foreground/70" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Location</p>
            <p className="text-foreground">
              San Francisco, CA
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-border">
        <h5 className="text-sm font-medium mb-4">Connect With Me</h5>
        <div className="flex gap-4">
          {["Twitter", "LinkedIn", "GitHub", "Dribbble"].map((platform) => (
            <a 
              key={platform}
              href="#" 
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent/50 transition-colors"
            >
              <span className="text-xs">{platform.charAt(0)}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

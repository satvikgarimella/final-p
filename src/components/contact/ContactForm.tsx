
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Send } from 'lucide-react';
import { cn } from '@/lib/utils';

const ContactForm = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  
  const validateForm = () => {
    const errors: {
      name?: string;
      email?: string;
      message?: string;
    } = {};
    
    if (!formState.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!formState.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    if (!formState.message.trim()) {
      errors.message = "Message is required";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    
    // Clear error when user types
    if (formErrors[e.target.name as keyof typeof formErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [e.target.name]: undefined
      }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Form error",
        description: "Please fix the errors in the form",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // This would be replaced with your actual API endpoint
      // For demonstration, we'll use a free service called FormSubmit
      // It requires no backend and works by setting a special email in the action attribute
      const formData = new FormData();
      formData.append('name', formState.name);
      formData.append('email', formState.email);
      formData.append('message', formState.message);
      
      // Using fetch to submit the form data
      const response = await fetch('https://formsubmit.co/ajax/your.email@example.com', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        
        // Reset form
        setFormState({
          name: '',
          email: '',
          message: ''
        });
      } else {
        const error = await response.json();
        throw new Error(error.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Failed to send",
        description: error instanceof Error ? error.message : "There was an error sending your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass-card p-6">
      <h4 className="text-xl font-medium mb-6">Send Me a Message</h4>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm text-muted-foreground mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-2 rounded-md border bg-background/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all",
              formErrors.name ? "border-red-500" : "border-border"
            )}
          />
          {formErrors.name && (
            <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm text-muted-foreground mb-1">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-2 rounded-md border bg-background/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all",
              formErrors.email ? "border-red-500" : "border-border"
            )}
          />
          {formErrors.email && (
            <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm text-muted-foreground mb-1">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            rows={5}
            className={cn(
              "w-full px-4 py-2 rounded-md border bg-background/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none",
              formErrors.message ? "border-red-500" : "border-border"
            )}
          ></textarea>
          {formErrors.message && (
            <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "w-full py-3 mt-2 rounded-md flex items-center justify-center transition-all",
            "bg-foreground text-background hover:bg-foreground/90",
            isSubmitting && "opacity-70 cursor-not-allowed"
          )}
        >
          {isSubmitting ? (
            <>
              <span className="mr-2">Sending</span>
              <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin"></div>
            </>
          ) : (
            <>
              Send Message <Send className="ml-2 w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

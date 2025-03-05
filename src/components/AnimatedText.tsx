
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  speed?: number;
}

const AnimatedText = ({ 
  text, 
  className, 
  once = true, 
  delay = 0,
  speed = 40
}: AnimatedTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (!isAnimating) {
      timeout = setTimeout(() => {
        setIsAnimating(true);
      }, delay);
    }
    
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (isAnimating && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    } else if (isAnimating && currentIndex >= text.length && !once) {
      const resetTimeout = setTimeout(() => {
        setDisplayedText('');
        setCurrentIndex(0);
      }, 3000);
      
      return () => clearTimeout(resetTimeout);
    }
  }, [currentIndex, isAnimating, once, speed, text]);

  return (
    <span className={cn('inline-block', className)}>
      {displayedText}
      <span className="opacity-0">{text.substring(currentIndex)}</span>
      {isAnimating && currentIndex < text.length && (
        <span className="inline-block w-[0.1em] h-[1.1em] bg-foreground ml-0.5 animate-pulse"></span>
      )}
    </span>
  );
};

export default AnimatedText;

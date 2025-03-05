
import React from 'react';

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description: string;
}

const SectionHeader = ({ subtitle, title, description }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
        {subtitle}
      </h2>
      <h3 className="text-3xl md:text-4xl font-bold mb-6">
        {title}
      </h3>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;

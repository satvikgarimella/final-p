
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export interface Skill {
  name: string;
  level: number; // 1-10
  icon?: React.ReactNode;
  color?: string;
}

interface SkillItemProps {
  skill: Skill;
  index: number;
}

const SkillItem = ({ skill, index }: SkillItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Calculate width percentage based on skill level (1-10)
  const progressWidth = `${skill.level * 10}%`;
  
  // Default colors in case color prop is not provided
  const defaultColors = [
    "from-blue-500 to-cyan-400",
    "from-purple-500 to-pink-400",
    "from-emerald-500 to-teal-400",
    "from-orange-500 to-amber-400",
    "from-rose-500 to-red-400",
  ];
  
  const gradientColor = skill.color || defaultColors[index % defaultColors.length];

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-1 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {skill.icon && (
            <span className="text-muted-foreground">{skill.icon}</span>
          )}
          <span className="font-medium">{skill.name}</span>
        </div>
        <span 
          className={cn(
            "text-xs text-muted-foreground transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          {skill.level}/10
        </span>
      </div>
      
      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full bg-gradient-to-r ${gradientColor} transition-all duration-1000 ease-out`}
          style={{ 
            width: isHovered ? progressWidth : "0%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillItem;

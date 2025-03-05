
import React from 'react';
import SkillItem, { Skill } from './SkillItem';
import { Code, Figma, Layout, Server, Database, Globe, Lightbulb, LineChart } from 'lucide-react';

const skillsData: Skill[] = [
  {
    name: "UI/UX Design",
    level: 9,
    icon: <Figma size={16} />,
    color: "from-blue-600 to-blue-400"
  },
  {
    name: "Frontend Development",
    level: 8,
    icon: <Layout size={16} />,
    color: "from-blue-500 to-blue-300"
  },
  {
    name: "React/Next.js",
    level: 8,
    icon: <Code size={16} />,
    color: "from-blue-400 to-blue-200"
  },
  {
    name: "Backend Development",
    level: 7,
    icon: <Server size={16} />,
    color: "from-blue-700 to-blue-500"
  },
  {
    name: "Database Design",
    level: 6,
    icon: <Database size={16} />,
    color: "from-blue-800 to-blue-600"
  },
  {
    name: "SEO Optimization",
    level: 7,
    icon: <Globe size={16} />,
    color: "from-blue-600 to-blue-400"
  },
  {
    name: "Product Strategy",
    level: 8,
    icon: <Lightbulb size={16} />,
    color: "from-blue-500 to-blue-300"
  },
  {
    name: "Data Visualization",
    level: 7,
    icon: <LineChart size={16} />,
    color: "from-blue-700 to-blue-500"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-blue-950/10">
      <div className="container max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-sm uppercase tracking-widest text-blue-400 mb-2 text-center">
            Expertise
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Skills & Capabilities
          </h3>
          <p className="text-blue-400/80 max-w-2xl mx-auto text-center">
            Here are the skills I've developed over the years, showcasing my expertise in design and development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillsData.map((skill, index) => (
            <SkillItem 
              key={skill.name} 
              skill={skill}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Frontend", items: ["HTML/CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
              { label: "Design", items: ["Figma", "Adobe XD", "Sketch", "UI/UX", "Prototyping"] },
              { label: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "APIs"] },
              { label: "Tools", items: ["Git", "VS Code", "AWS", "Docker", "Vercel"] }
            ].map((category, index) => (
              <div key={index} className="backdrop-blur-sm bg-blue-950/10 p-6 rounded-lg border border-blue-500/10">
                <h4 className="text-lg font-medium mb-4 text-blue-100">{category.label}</h4>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-sm text-blue-400/80 flex items-center">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500/40 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


import React, { useState } from 'react';
import ProjectCard, { Project } from './ProjectCard';

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-commerce Website Redesign",
    description: "A complete redesign of an e-commerce platform focused on improving user experience and conversion rate.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    tags: ["UI/UX", "E-commerce", "Web Design"],
    link: "#"
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "A secure and intuitive mobile banking application designed for a regional bank.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    tags: ["Mobile", "FinTech", "UI Design"],
    link: "#"
  },
  {
    id: 3,
    title: "Healthcare Dashboard",
    description: "A comprehensive dashboard for healthcare professionals to monitor patient data and analytics.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    tags: ["Dashboard", "Healthcare", "Data Visualization"],
    link: "#"
  },
  {
    id: 4,
    title: "Travel Booking Platform",
    description: "A travel platform that helps users discover, plan, and book their perfect trips.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1721&q=80",
    tags: ["Travel", "Booking", "Web App"],
    link: "#"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  // Get all unique tags
  const allTags = Array.from(
    new Set(projectsData.flatMap(project => project.tags))
  );
  
  // Filter projects based on selected tag
  const filteredProjects = filter 
    ? projectsData.filter(project => project.tags.includes(filter))
    : projectsData;

  return (
    <section id="projects" className="section-padding">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
            My Work
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Featured Projects
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in design and development.
          </p>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-2 text-sm rounded-full transition-all ${
              filter === null 
                ? "bg-foreground text-background" 
                : "bg-secondary text-foreground hover:bg-secondary/80"
            }`}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 text-sm rounded-full transition-all ${
                filter === tag 
                  ? "bg-foreground text-background" 
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

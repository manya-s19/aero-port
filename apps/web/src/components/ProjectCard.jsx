
import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, techStack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="relative bg-card border-2 border-border rounded-lg p-8 blueprint-grid-fine hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
    >
      <div className="absolute top-0 left-0 w-full h-full blueprint-grid opacity-20 pointer-events-none rounded-lg"></div>
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold text-foreground tracking-tight">
            {title}
          </h3>
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-6 text-base">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="tech-mono text-xs px-3 py-1.5 bg-secondary/50 text-secondary-foreground border border-border rounded hover:border-primary/50 hover:bg-secondary/70 transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="absolute bottom-4 right-4 tech-mono text-xs text-muted-foreground/50">
          [CLASSIFIED]
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

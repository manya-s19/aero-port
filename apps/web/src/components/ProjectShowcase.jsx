
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard.jsx';

const projects = [
  {
    title: 'GNSS Satellite Sim',
    description: 'GNSS satellite simulation with least-squares position solving and 3D visualization',
    techStack: ['Python', 'NumPy', 'Matplotlib', '3D Graphics']
  },
  {
    title: 'Aerial Threat Detector',
    description: 'Aerial threat detection system using YOLOv8 trained on a multi-class dataset (drones, aircraft, birds). Real-time inference via webcam.',
    techStack: ['Python', 'YOLOv8', 'OpenCV', 'PyTorch']
  },
  {
    title: 'C++ Missile Intercept Simulator',
    description: 'C++ missile intercept simulator modeling the Scud-B vs Patriot PAC-2 engagement at Dhahran 1991, with ISA atmospheric drag, gravity turn, and proportional navigation guidance. Includes chaff/flare countermeasures and a 3D Godot visualization driven by exported trajectory data.',
    techStack: ['C++', 'Godot', 'Physics Simulation', 'Ballistics']
  }
];

const ProjectShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative min-h-[400px] flex items-center justify-center">
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-secondary/80 hover:bg-secondary border border-border rounded-lg text-foreground hover:text-primary hover:border-primary/50 transition-all duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="w-full px-16">
          <AnimatePresence mode="wait">
            <ProjectCard
              key={currentIndex}
              title={projects[currentIndex].title}
              description={projects[currentIndex].description}
              techStack={projects[currentIndex].techStack}
            />
          </AnimatePresence>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-secondary/80 hover:bg-secondary border border-border rounded-lg text-foreground hover:text-primary hover:border-primary/50 transition-all duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Next project"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="text-center mt-8">
        <span className="tech-mono text-lg font-medium text-muted-foreground">
          {currentIndex + 1} / {projects.length}
        </span>
      </div>
    </div>
  );
};

export default ProjectShowcase;


import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'GNSS Satellite Sim',
    description: 'GNSS satellite simulation with least-squares position solving and 3D visualization. Implements precise orbital mechanics and signal propagation delay modeling.',
    techStack: ['Python', 'NumPy', 'Matplotlib', '3D Graphics'],
    image: 'https://images.unsplash.com/photo-1582018339960-bcf41139a252',
    github: 'https://github.com/manya-s19/gnss_sim'
  },
  {
    id: 2,
    title: 'Aerial Threat Detector',
    description: 'Aerial threat detection system using YOLOv8 trained on a multi-class dataset (drones, aircraft, birds). Features real-time inference via webcam with optimized bounding box rendering.',
    techStack: ['Python', 'YOLOv8', 'OpenCV', 'PyTorch'],
    image: 'https://images.unsplash.com/photo-1683085209849-9d9948bfe8fe',
    github: 'https://github.com/manya-s19/aerial-threat-detector'
  },
  {
    id: 3,
    title: 'C++ Missile Intercept Simulator',
    description: 'C++ simulator modeling Scud-B vs Patriot PAC-2 engagement at Dhahran 1991 with ISA atmospheric drag, gravity turn, proportional navigation guidance, chaff/flare countermeasures, and 3D Godot visualization.',
    techStack: ['C++', 'Godot', 'Physics Simulation', 'Ballistics'],
    image: 'https://images.unsplash.com/photo-1691139299831-a41e7f223753',
    github: 'https://github.com/manya-s19/missile-sim'
  }
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const currentProject = projects[currentIndex];

  return (
    <>
      <Helmet>
        <title>{`Project ${currentIndex + 1} | Aerospace Portfolio`}</title>
        <meta name="description" content="Aerospace engineering portfolio showcasing technical projects." />
      </Helmet>

      <main className="flex flex-col lg:flex-row w-full min-h-[100dvh] bg-background text-foreground overflow-hidden">
        
        {/* Left Side: Image Container (50%) */}
        <div className="relative w-full lg:w-1/2 h-[40vh] lg:h-[100dvh] bg-secondary overflow-hidden border-b lg:border-b-0 lg:border-r border-border">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
              />
              {/* Teal tint overlay */}
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
              {/* Blueprint grid overlay */}
              <div className="absolute inset-0 blueprint-grid-fine opacity-20 pointer-events-none"></div>
            </motion.div>
          </AnimatePresence>
          
          {/* Decorative technical elements */}
          <div className="absolute top-4 left-4 tech-mono text-xs text-primary/70 tracking-widest">
            SYS.IMG.{currentProject.id.toString().padStart(3, '0')}
          </div>
          <div className="absolute bottom-4 right-4 tech-mono text-xs text-primary/70 tracking-widest">
            [ OPTICAL_SENSOR_ACTIVE ]
          </div>
        </div>

        {/* Right Side: Content Panel (50%) */}
        <div className="relative w-full lg:w-1/2 h-[60vh] lg:h-[100dvh] flex flex-col justify-between p-6 sm:p-12 lg:p-20 blueprint-grid">
          
          {/* Top: Counter & Status */}
          <div className="flex justify-between items-center border-b border-border/50 pb-4">
            <div className="tech-mono text-sm text-muted-foreground tracking-widest">
              PROJECT_FILE
            </div>
            <div className="tech-mono text-lg text-primary font-medium">
              {currentIndex + 1} <span className="text-muted-foreground">/ {projects.length}</span>
            </div>
          </div>

          {/* Middle: Project Details */}
          <div className="flex-1 flex flex-col justify-center py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight uppercase" style={{ textWrap: 'balance' }}>
                  {currentProject.title}
                </h1>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                  {currentProject.description}
                </p>

                <div className="mb-10">
                  <div className="tech-mono text-xs text-primary mb-3 tracking-widest uppercase">
                    // Tech_Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="tech-mono text-xs px-3 py-1.5 bg-secondary/50 text-secondary-foreground border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={currentProject.github}
                  className="inline-flex items-center gap-2 tech-mono text-sm text-primary hover:text-primary-foreground hover:bg-primary border border-primary px-6 py-3 transition-all duration-200 group"
                >
                  <Github className="w-4 h-4" />
                  <span>VIEW_SOURCE</span>
                  <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom: Navigation */}
          <div className="flex justify-between items-center border-t border-border/50 pt-6">
            <div className="tech-mono text-xs text-muted-foreground hidden sm:block">
              AEROSPACE_PORTFOLIO_V3
            </div>
            <div className="flex gap-4">
              <button
                onClick={handlePrevious}
                className="p-4 border border-border bg-secondary/30 text-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-200 active:scale-95"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="p-4 border border-border bg-secondary/30 text-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-200 active:scale-95"
                aria-label="Next project"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default HomePage;

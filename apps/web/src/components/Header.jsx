
import React from 'react';
import { Terminal } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Terminal className="w-8 h-8 text-primary" strokeWidth={2.5} />
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-foreground">
                AEROSPACE SYSTEMS
              </h1>
              <p className="text-xs tech-mono text-muted-foreground tracking-wider">
                PORTFOLIO_v2.1.0
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a 
              href="#projects" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              PROJECTS
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              CONTACT
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

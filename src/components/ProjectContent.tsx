interface ProjectContentProps {
  title: string;
  subtitle: string;
  description: string;
  specs: { label: string; value: string }[];
  tags: string[];
}

const ProjectContent = ({ title, subtitle, description, specs, tags }: ProjectContentProps) => {
  return (
    <div className="pb-56">
      {/* Project title */}
      <h1 className="font-mono text-2xl sm:text-4xl text-blueprint-text mb-2 tracking-tight">
        {title}
      </h1>
      <p className="font-mono text-sm text-blueprint-line mb-8">{subtitle}</p>

      {/* Schematic placeholder */}
      <div className="border border-blueprint-line-dim p-6 mb-8 relative">
        <div className="absolute -top-2.5 left-4 bg-background px-2 font-mono text-[10px] text-blueprint-line-dim tracking-widest uppercase">
          SCHEMATIC VIEW
        </div>
        <div className="h-48 sm:h-64 flex items-center justify-center">
          <svg viewBox="0 0 400 200" className="w-full h-full max-w-md opacity-40">
            <line x1="50" y1="100" x2="350" y2="100" stroke="hsl(210 60% 55%)" strokeWidth="1" strokeDasharray="1000" style={{ animation: "draw-line 2s ease forwards" }} />
            <circle cx="100" cy="100" r="20" fill="none" stroke="hsl(210 60% 55%)" strokeWidth="1" />
            <circle cx="200" cy="100" r="30" fill="none" stroke="hsl(210 60% 55%)" strokeWidth="1" />
            <circle cx="300" cy="100" r="15" fill="none" stroke="hsl(210 60% 55%)" strokeWidth="1" />
            <line x1="100" y1="60" x2="100" y2="140" stroke="hsl(210 40% 35%)" strokeWidth="0.5" strokeDasharray="4 4" />
            <line x1="200" y1="50" x2="200" y2="150" stroke="hsl(210 40% 35%)" strokeWidth="0.5" strokeDasharray="4 4" />
            <line x1="300" y1="65" x2="300" y2="135" stroke="hsl(210 40% 35%)" strokeWidth="0.5" strokeDasharray="4 4" />
            <text x="100" y="155" fill="hsl(210 40% 35%)" fontSize="8" textAnchor="middle" fontFamily="monospace">A</text>
            <text x="200" y="160" fill="hsl(210 40% 35%)" fontSize="8" textAnchor="middle" fontFamily="monospace">B</text>
            <text x="300" y="150" fill="hsl(210 40% 35%)" fontSize="8" textAnchor="middle" fontFamily="monospace">C</text>
          </svg>
        </div>
      </div>

      {/* Description */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="font-mono text-[10px] text-blueprint-line-dim tracking-widest uppercase mb-3">
            DESCRIPTION
          </div>
          <p className="text-sm text-blueprint-text/80 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Specs table */}
        <div>
          <div className="font-mono text-[10px] text-blueprint-line-dim tracking-widest uppercase mb-3">
            SPECIFICATIONS
          </div>
          <div className="border border-blueprint-line-dim">
            {specs.map((spec, i) => (
              <div
                key={i}
                className={`flex justify-between px-3 py-2 font-mono text-xs ${
                  i % 2 === 0 ? "bg-secondary/30" : ""
                } ${i < specs.length - 1 ? "border-b border-blueprint-line-dim" : ""}`}
              >
                <span className="text-blueprint-line-dim uppercase">{spec.label}</span>
                <span className="text-blueprint-text">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] tracking-wider uppercase border border-blueprint-line-dim text-blueprint-line px-2 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectContent;

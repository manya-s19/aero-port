import { ReactNode } from "react";

interface BlueprintPageProps {
  projectNumber: string;
  title: string;
  classification: string;
  date: string;
  children: ReactNode;
  isActive: boolean;
  direction: "in" | "out" | "none";
}

const BlueprintPage = ({
  projectNumber,
  title,
  classification,
  date,
  children,
  isActive,
  direction,
}: BlueprintPageProps) => {
  if (!isActive && direction === "none") return null;

  return (
    <div
      className={`absolute inset-0 perspective-1000 ${
        direction === "in"
          ? "animate-page-flip-in"
          : direction === "out"
          ? "animate-page-flip-out pointer-events-none"
          : ""
      }`}
      style={{ perspective: "2000px" }}
    >
      <div className="h-full w-full blueprint-grid p-4 sm:p-8 overflow-auto">
        {/* Blueprint border frame */}
        <div className="blueprint-border h-full min-h-[600px] p-4 sm:p-8 relative">
          {/* Corner marks */}
          <CornerMark position="top-left" />
          <CornerMark position="top-right" />
          <CornerMark position="bottom-left" />
          <CornerMark position="bottom-right" />

          {/* Title block - top */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-blueprint-line-dim">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-blueprint-line-dim tracking-widest uppercase">
                DWG NO.
              </span>
              <span className="font-mono text-sm text-blueprint-line">
                {projectNumber}
              </span>
            </div>
            <div className="font-mono text-xs text-blueprint-line-dim tracking-widest uppercase">
              {classification}
            </div>
          </div>

          {/* Main content */}
          <div className="animate-fade-slide-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            {children}
          </div>

          {/* Bottom title block */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 z-10 bg-background">
            <div className="blueprint-title-block p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2">
              <div>
                <div className="font-mono text-[10px] text-blueprint-line-dim tracking-widest uppercase mb-1">
                  PROJECT TITLE
                </div>
                <div className="font-mono text-sm sm:text-base text-blueprint-text">
                  {title}
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono text-[10px] text-blueprint-line-dim tracking-widest uppercase mb-1">
                  DATE
                </div>
                <div className="font-mono text-xs text-blueprint-line">
                  {date}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function CornerMark({ position }: { position: string }) {
  const posClasses: Record<string, string> = {
    "top-left": "top-1 left-1",
    "top-right": "top-1 right-1",
    "bottom-left": "bottom-1 left-1",
    "bottom-right": "bottom-1 right-1",
  };
  const lineClasses: Record<string, string> = {
    "top-left": "border-t border-l",
    "top-right": "border-t border-r",
    "bottom-left": "border-b border-l",
    "bottom-right": "border-b border-r",
  };

  return (
    <div
      className={`absolute ${posClasses[position]} w-4 h-4 ${lineClasses[position]} border-blueprint-line`}
    />
  );
}

export default BlueprintPage;

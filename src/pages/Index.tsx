import { useState, useCallback, useEffect } from "react";
import BlueprintPage from "@/components/BlueprintPage";
import BlueprintNav from "@/components/BlueprintNav";
import ProjectContent from "@/components/ProjectContent";
import { projects } from "@/data/projects";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<"in" | "out" | "none">("none");
  const [prevPage, setPrevPage] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (index === currentPage || isAnimating || index < 0 || index >= projects.length) return;
      setIsAnimating(true);
      setPrevPage(currentPage);
      setDirection("in");
      setCurrentPage(index);
      setTimeout(() => {
        setPrevPage(null);
        setDirection("none");
        setIsAnimating(false);
      }, 600);
    },
    [currentPage, isAnimating]
  );

  const goNext = useCallback(() => goTo(currentPage + 1), [currentPage, goTo]);
  const goPrev = useCallback(() => goTo(currentPage - 1), [currentPage, goTo]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  return (
    <div className="h-screen w-screen overflow-hidden relative blueprint-grid">
      {/* Header bar */}
      <div className="absolute top-0 left-0 right-0 z-40 flex items-center justify-between px-4 sm:px-8 py-3 border-b border-blueprint-line-dim bg-background/80 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-blueprint-highlight animate-blink" />
          <span className="font-mono text-xs text-blueprint-line tracking-[0.3em] uppercase">
            AEROSPACE PORTFOLIO
          </span>
        </div>
        <span className="font-mono text-[10px] text-blueprint-line-dim tracking-wider">
          REV 1.0 — {new Date().getFullYear()}
        </span>
      </div>

      {/* Pages */}
      <div className="absolute inset-0 pt-12">
        {projects.map((project, i) => (
          <BlueprintPage
            key={project.projectNumber}
            projectNumber={project.projectNumber}
            title={project.title}
            classification={project.classification}
            date={project.date}
            isActive={i === currentPage}
            direction={
              i === currentPage
                ? direction === "none"
                  ? "none"
                  : "in"
                : i === prevPage
                ? "out"
                : "none"
            }
          >
            <ProjectContent
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              specs={project.specs}
              tags={project.tags}
            />
          </BlueprintPage>
        ))}
      </div>

      {/* Navigation */}
      <BlueprintNav
        currentPage={currentPage}
        totalPages={projects.length}
        onPrev={goPrev}
        onNext={goNext}
        onGoTo={goTo}
      />
    </div>
  );
};

export default Index;

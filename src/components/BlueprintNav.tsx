interface BlueprintNavProps {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (index: number) => void;
}

const BlueprintNav = ({ currentPage, totalPages, onPrev, onNext, onGoTo }: BlueprintNavProps) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 blueprint-title-block px-4 py-2 rounded-sm">
      <button
        onClick={onPrev}
        disabled={currentPage === 0}
        className="font-mono text-xs text-blueprint-line hover:text-blueprint-highlight disabled:text-blueprint-line-dim disabled:cursor-not-allowed transition-colors px-2 py-1"
      >
        ◄ PREV
      </button>

      <div className="flex items-center gap-1.5">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => onGoTo(i)}
            className={`w-2 h-2 border transition-all ${
              i === currentPage
                ? "bg-blueprint-highlight border-blueprint-highlight"
                : "border-blueprint-line-dim hover:border-blueprint-line"
            }`}
          />
        ))}
      </div>

      <span className="font-mono text-[10px] text-blueprint-line-dim tracking-wider">
        {String(currentPage + 1).padStart(2, "0")}/{String(totalPages).padStart(2, "0")}
      </span>

      <button
        onClick={onNext}
        disabled={currentPage === totalPages - 1}
        className="font-mono text-xs text-blueprint-line hover:text-blueprint-highlight disabled:text-blueprint-line-dim disabled:cursor-not-allowed transition-colors px-2 py-1"
      >
        NEXT ►
      </button>
    </div>
  );
};

export default BlueprintNav;

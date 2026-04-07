import { useEffect, useMemo, useRef, useState, useCallback } from "react";

const DEFAULT_FLYERS = [
  "/images/GCCI6.jpeg",
  "/images/GCCI7.jpeg",
  "/images/GCCI8.jpeg",
  "/images/GCCI9.jpeg",
  "/images/GCCI10.jpeg",
  "/images/GCCI11.jpeg",
  "/images/GCCI12.jpeg",
  "/images/GCCI13.jpeg",
  "/images/GCCI14.jpeg",
  "/images/GCCI15.jpeg",
  "/images/GCCI16.jpeg",
  "/images/GCCI17.jpeg",
  "/images/GCCI18.jpeg",
  "/images/GCCI20.jpeg",
  "/images/GCCI21.jpeg",
  "/images/GCCI22.jpeg",
  "/images/GCCI23.jpeg",
];

export default function FlyerSlider({ flyers, interval = 6000 }) {
  const sourceFlyers =
    Array.isArray(flyers) && flyers.length > 0 ? flyers : DEFAULT_FLYERS;
  const activeFlyers = sourceFlyers.slice(0, 19);
  const totalFlyers = activeFlyers.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const extendedFlyers = useMemo(() => {
    if (!totalFlyers) return [];
    return [...activeFlyers, activeFlyers[0], activeFlyers[1] ?? activeFlyers[0]];
  }, [activeFlyers, totalFlyers]);

  const goNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const goPrev = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? totalFlyers - 1 : prev - 1));
  }, [totalFlyers]);

  const goToSlide = useCallback((index) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  }, []);

  // Reset loop when we reach cloned slides
  useEffect(() => {
    if (currentIndex >= totalFlyers) {
      const t = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 700);
      return () => clearTimeout(t);
    }
  }, [currentIndex, totalFlyers]);

  // Auto-advance
  useEffect(() => {
    if (!totalFlyers || isPaused) return;
    intervalRef.current = setInterval(goNext, interval);
    return () => clearInterval(intervalRef.current);
  }, [interval, totalFlyers, isPaused, goNext]);

  // Keyboard navigation
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? goNext() : goPrev();
    }
    setTouchStart(null);
  };

  if (!totalFlyers) return null;

  const activeDot = currentIndex >= totalFlyers ? 0 : currentIndex;

  return (
    <section
      ref={sliderRef}
      className="relative w-full overflow-hidden shadow-2xl bg-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      tabIndex={0}
      role="region"
      aria-label="Event flyers carousel"
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {/* Slide track */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          /* 
           * Responsive height using aspect ratio trick:
           * aspect-ratio maintains perfect proportions on every screen.
           * Fallback heights for older browsers.
           */
          aspectRatio: "4 / 3",
          maxHeight: "80vh",
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex h-full"
          style={{
            width: `${extendedFlyers.length * 100}%`,
            transform: `translateX(-${(currentIndex / extendedFlyers.length) * 100}%)`,
            transition: isTransitioning
              ? "transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)"
              : "none",
            willChange: "transform",
          }}
        >
          {extendedFlyers.map((flyer, index) => (
            <div
              key={index}
              style={{ width: `${100 / extendedFlyers.length}%`, flexShrink: 0 }}
              className="h-full"
            >
              <img
                src={flyer}
                alt={`Event flyer ${(index % totalFlyers) + 1} of ${totalFlyers}`}
                className="w-full h-full object-contain bg-black"
                loading={index < 2 ? "eager" : "lazy"}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Side gradient vignettes */}
      <div
        className="absolute inset-y-0 left-0 w-12 pointer-events-none z-10"
        style={{ background: "linear-gradient(to right, rgba(0,0,0,0.35), transparent)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-12 pointer-events-none z-10"
        style={{ background: "linear-gradient(to left, rgba(0,0,0,0.35), transparent)" }}
      />

      {/* Prev arrow */}
      <button
        onClick={goPrev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center rounded-full bg-white/85 hover:bg-white text-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 group"
        style={{ width: "clamp(32px, 6vw, 48px)", height: "clamp(32px, 6vw, 48px)" }}
        aria-label="Previous flyer"
      >
        <svg
          className="transition-transform group-hover:-translate-x-0.5"
          style={{ width: "clamp(14px, 2.5vw, 22px)", height: "clamp(14px, 2.5vw, 22px)" }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next arrow */}
      <button
        onClick={goNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center rounded-full bg-white/85 hover:bg-white text-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 group"
        style={{ width: "clamp(32px, 6vw, 48px)", height: "clamp(32px, 6vw, 48px)" }}
        aria-label="Next flyer"
      >
        <svg
          className="transition-transform group-hover:translate-x-0.5"
          style={{ width: "clamp(14px, 2.5vw, 22px)", height: "clamp(14px, 2.5vw, 22px)" }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-3 sm:bottom-4 z-20 flex items-center gap-1.5 rounded-full px-3 py-1.5"
        style={{ background: "rgba(0,0,0,0.4)" }}
      >
        {activeFlyers.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            aria-label={`Go to flyer ${i + 1}`}
            aria-current={activeDot === i ? "true" : "false"}
            className="rounded-full transition-all duration-300 focus:outline-none"
            style={{
              height: "10px",
              width: activeDot === i ? "28px" : "10px",
              background: activeDot === i ? "#ffffff" : "rgba(255,255,255,0.5)",
            }}
          />
        ))}
      </div>

      {/* Counter badge */}
      <div
        className="absolute top-3 right-3 z-20 rounded-lg text-white font-bold border border-white/20 text-xs sm:text-sm px-3 py-1"
        style={{ background: "rgba(0,0,0,0.45)" }}
      >
        {activeDot + 1} / {totalFlyers}
      </div>

      {/* Paused indicator */}
      {isPaused && (
        <div
          className="absolute bottom-3 left-3 z-20 rounded-lg text-white text-xs font-semibold border border-white/20 px-3 py-1"
          style={{ background: "rgba(0,0,0,0.45)" }}
        >
          Paused
        </div>
      )}
    </section>
  );
}
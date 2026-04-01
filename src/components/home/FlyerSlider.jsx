import { useEffect, useMemo, useRef, useState } from "react";

const DEFAULT_FLYERS = [
  "/images/GCCI1.jpeg",
  "/images/GCCI2.jpeg",
  "/images/GCCI3.jpeg",
  "/images/GCCI4.jpeg",
  "/images/GCCI5.jpeg",
];

export default function FlyerSlider({ flyers, interval = 6000 }) {
  const sourceFlyers =
    Array.isArray(flyers) && flyers.length > 0 ? flyers : DEFAULT_FLYERS;
  const activeFlyers = sourceFlyers.slice(0, 6);
  const totalFlyers = activeFlyers.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const sliderRef = useRef(null);

  const extendedFlyers = useMemo(() => {
    if (totalFlyers === 0) return [];
    return [
      ...activeFlyers,
      activeFlyers[0],
      activeFlyers[1] || activeFlyers[0],
    ];
  }, [activeFlyers, totalFlyers]);

  useEffect(() => {
    if (!totalFlyers || isPaused) return undefined;

    const slideInterval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [interval, totalFlyers, isPaused]);

  useEffect(() => {
    if (currentIndex >= totalFlyers) {
      const resetTimer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 700);

      return () => clearTimeout(resetTimer);
    }

    return undefined;
  }, [currentIndex, totalFlyers]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    sliderRef.current?.addEventListener("keydown", handleKeyDown);
    return () =>
      sliderRef.current?.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!totalFlyers) return null;

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  const goPrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? totalFlyers - 1 : prev - 1));
  };

  const goNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  const activeDot = currentIndex === totalFlyers ? 0 : currentIndex;

  return (
    <section
      ref={sliderRef}
      className="relative w-full overflow-hidden lg:hidden block shadow-2xl border border-gray-300/50 bg-gray-100"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      tabIndex="0"
      role="region"
      aria-label="Event flyers carousel"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none z-10" />

      {/* Slider Container */}
      <div
        className="relative w-full h-[280px] sm:h-[470px] md:h-[500px] m-auto  overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`flex h-full w-full ${
            isTransitioning ? "transition-transform duration-700 ease-out" : ""
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {extendedFlyers.map((flyer, index) => (
            <div key={index} className="min-w-full h-full flex-shrink-0">
              <img
                src={flyer}
                alt={`Event flyer ${(index % totalFlyers) + 1} of ${totalFlyers}`}
                className="w-full h-full object-cover"
                loading={index < 2 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={goPrev}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/85 hover:bg-white text-blue-600 p-2 sm:p-3 shadow-lg hover:shadow-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 group"
        aria-label="Previous event flyer"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={goNext}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/85 hover:bg-white text-blue-600 p-2 sm:p-3 shadow-lg hover:shadow-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 group"
        aria-label="Next event flyer"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Indicator Dots */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 sm:bottom-6 z-20 flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        {activeFlyers.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 ${
              activeDot === index
                ? "h-3 w-8 bg-white"
                : "h-3 w-3 bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to flyer ${index + 1}`}
            aria-current={activeDot === index ? "true" : "false"}
          />
        ))}
      </div>

      {/* Counter Badge */}
      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20 rounded-lg bg-black/40 backdrop-blur-sm text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 font-bold border border-white/20">
        {activeDot + 1}/{totalFlyers}
      </div>

      {/* Play State Indicator */}
      {isPaused && (
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-20 rounded-lg bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1.5 font-semibold border border-white/20">
          ⏸ Paused
        </div>
      )}

      {/* Keyboard Navigation Hint (hidden by default) */}
      <style>{`
        @media (max-width: 640px) {
          [role="region"]:focus-visible {
            outline: 2px solid #2563eb;
            outline-offset: 2px;
          }
        }
      `}</style>
    </section>
  );
}

import { useEffect, useState } from "react";

export default function FlyerSlider({ flyers = [], interval = 2000 }) {
  // Clone first flyer for infinite loop

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const extendedFlyers = [...flyers, flyers[0]];
  // Auto slide
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [interval]);

  // Handle infinite loop reset
  useEffect(() => {
    if (currentIndex === flyers.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false); // remove animation
        setCurrentIndex(0); // jump to the real first flyer
        // Re-enable transition for next slides
        setTimeout(() => setIsTransitioning(true), 50);
      }, 700); // same as transition duration

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, flyers.length]);
  if (!flyers.length) return null;
  return (
    <div className="relative w-full overflow-hidden mb-10 h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
      {/* Slides container */}
      <div
        className={`flex ${isTransitioning ? "transition-transform duration-700" : ""}`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {extendedFlyers.map((flyer, index) => (
          <div key={index} className="min-w-full">
            <img
              src={flyer}
              alt={`flyer-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {flyers.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ||
              (currentIndex === flyers.length && index === 0)
                ? "bg-white"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

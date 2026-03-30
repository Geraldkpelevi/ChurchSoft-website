import { useEffect, useState } from "react";

export default function DailyQuote() {
  const quotes = [
    {
      text: "I can do all things through Christ who strengthens me.",
      verse: "Philippians 4:13",
    },
    {
      text: "The Lord is my shepherd; I shall not want.",
      verse: "Psalm 23:1",
    },
    {
      text: "But seek first the kingdom of God and His righteousness.",
      verse: "Matthew 6:33",
    },
    {
      text: "Be strong and courageous. Do not be afraid.",
      verse: "Joshua 1:9",
    },
  ];

  // Add a clone of the first quote for infinite loop
  const extendedQuotes = [...quotes, quotes[0]];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  // Handle the infinite loop reset
  useEffect(() => {
    if (currentIndex === quotes.length) {
      // Wait for the transition to finish
      const timeout = setTimeout(() => {
        setIsTransitioning(false); // remove animation
        setCurrentIndex(0); // jump to the real first slide

        // Re-enable transition for next slides
        setTimeout(() => setIsTransitioning(true), 50);
      }, 800); 

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, quotes.length]);

  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-600">
          Daily Scripture
        </h2>
        <p className="text-gray-500 mt-2">
          Be encouraged by the Word of God
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative overflow-hidden">
        <div
          className={`flex ${isTransitioning ? "transition-transform duration-800" : ""}`}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {extendedQuotes.map((quote, index) => (
            <div key={index} className="min-w-full px-4">
              <div className="bg-white rounded-2xl shadow-md p-8 text-center">
                <p className="text-lg text-gray-700 italic mb-4">
                  "{quote.text}"
                </p>
                <h4 className="font-semibold text-blue-600">
                  — {quote.verse}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {quotes.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index || (currentIndex === quotes.length && index === 0)
                ? "bg-blue-600"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
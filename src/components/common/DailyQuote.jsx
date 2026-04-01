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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isPaused, quotes.length]);

  const nextQuote = () => setCurrentIndex((prev) => (prev + 1) % quotes.length);
  const prevQuote = () =>
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);

  const activeQuote = quotes[currentIndex];

  return (
    <section className="py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 lg:px-10 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-10 md:mb-12">
        <p className="text-xs sm:text-sm md:text-base uppercase tracking-widest text-blue-700 opacity-80 mb-2">
          Daily Inspiration
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-blue-900">
          Scripture Quote of the Day
        </h2>
        <p className="mt-3 text-sm sm:text-base md:text-lg text-blue-600 max-w-3xl mx-auto">
          Receive a short encouragement each day from scripture and let God’s
          word guide your steps.
        </p>
      </div>

      <div
        className="relative max-w-4xl mx-auto overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm sm:shadow-md"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-100 opacity-20 pointer-events-none" />
        <div className="p-6 sm:p-8 md:p-10 lg:p-12 relative">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-900 italic tracking-normal sm:tracking-tight leading-relaxed sm:leading-relaxed md:leading-relaxed">
            “{activeQuote.text}”
          </p>
          <p className="mt-6 text-right text-base sm:text-lg md:text-xl font-bold text-blue-700">
            — {activeQuote.verse}
          </p>

          <div className="mt-8 flex justify-between items-center gap-3">
            <button
              onClick={prevQuote}
              className="rounded-full border border-blue-200 bg-white/90 px-4 py-2 sm:px-5 sm:py-2.5 font-medium text-blue-700 hover:bg-blue-50 transition duration-200"
              aria-label="Previous quote"
            >
              ◀
            </button>

            <div className="flex gap-2">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-200 ${
                    currentIndex === index
                      ? "bg-blue-700 w-8 rounded-full"
                      : "bg-blue-200"
                  }`}
                  aria-label={`Select quote ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextQuote}
              className="rounded-full border border-blue-200 bg-white/90 px-4 py-2 sm:px-5 sm:py-2.5 font-medium text-blue-700 hover:bg-blue-50 transition duration-200"
              aria-label="Next quote"
            >
              ▶
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-xs sm:text-sm text-blue-700 opacity-80 hidden lg:block">
        <span className="font-semibold">Tip:</span> Hover to pause automatic
        rotation.
      </div>
    </section>
  );
}

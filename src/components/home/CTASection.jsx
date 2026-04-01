import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 via-blue-200 to-blue-300 text-white py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1505944352838-36d71ec6c8f5?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/70 to-blue-900/80"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        <p className="text-xs sm:text-sm md:text-base uppercase tracking-wider text-cyan-200 mb-3 sm:mb-4 font-semibold">
          Join the Movement
        </p>

        <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-5 md:mb-6 leading-tight">
          Be Part of Something Greater
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-blue-100 max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed">
          Discover your role in the Great Commission Church International family
          through worship, service, and meaningful community partnerships.
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          <Link to="/membership" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-200 text-blue-900 font-bold text-sm sm:text-base px-6 py-3.5 sm:py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5">
              Join Now
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </Link>

          <Link to="/contact" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-cyan-200 text-cyan-100 hover:text-blue-900 hover:bg-white hover:border-white bg-blue-900/30 font-semibold text-sm sm:text-base px-6 py-3.5 sm:py-4 rounded-full transition-all duration-300">
              Contact Us
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13V9"
                />
              </svg>
            </button>
          </Link>
        </div>

        <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-cyan-200/90">
          <span className="bg-white/10 rounded-full px-2 py-1">
            Weekly Prayer Groups
          </span>
          <span className="bg-white/10 rounded-full px-2 py-1">
            Bible Study Sessions
          </span>
          <span className="bg-white/10 rounded-full px-2 py-1">
            Mission Outreach
          </span>
          <span className="bg-white/10 rounded-full px-2 py-1">
            Volunteer Teams
          </span>
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { churchData } from "../../data/churchData";
import NewsCard from "../common/NewsCard";

function TrendingNews() {
  return (
    <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <p className="inline-block mb-3 text-xs sm:text-sm md:text-base uppercase tracking-wider bg-white/10 border border-white/20 text-blue-100 rounded-full px-4 py-2">
            Latest Updates
          </p>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
            Trending News
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-blue-200 max-w-2xl mx-auto">
            Stay informed with recent announcements, worship highlights, and
            important ministry events from G.C.C.I.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mb-8 md:mb-10">
          {churchData.newsData.map((item, index) => (
            <NewsCard
              key={index}
              {...item}
              className="backdrop-blur-sm  hover:shadow-2xl hover:border-blue-300 transition-all duration-300"
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-400 text-blue-900 font-bold text-sm sm:text-base px-5 sm:px-7 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            View All News
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
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TrendingNews;

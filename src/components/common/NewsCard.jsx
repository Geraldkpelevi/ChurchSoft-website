function NewsCard({ image, title, date, description, link, className = "" }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`block group h-full ${className}`}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border  hover:border-blue-200 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative h-48 sm:h-52 md:h-56 lg:h-60 xl:h-64 overflow-hidden flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 md:p-6 lg:p-7 flex-1 flex flex-col">
          {/* Date Badge */}
          <div className="inline-block bg-blue-100 text-blue-800 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mb-3 flex-shrink-0">
            {date}
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-blue-600 transition-colors duration-300 flex-shrink-0">
            {title.split(" ").slice(0, 6).join(" ")}
            {title.split(" ").length > 6 && "..."}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 flex-1">
            {description.split(" ").slice(0, 12).join(" ")}
            {description.split(" ").length > 12 && "..."}
          </p>

          {/* Read More Link */}
          <div className="flex items-center text-blue-600 font-semibold text-sm sm:text-base group-hover:text-blue-700 transition-colors duration-300 flex-shrink-0">
            <span>Read More</span>
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
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
          </div>
        </div>
      </div>
    </a>
  );
}

export default NewsCard;

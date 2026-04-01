import { churchData } from "../../data/churchData.js";

export default function AboutSection() {
  return (
    <section className="py-10 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-6 sm:mt-10 lg:mt-12 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            Great Commission Church International
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0 leading-relaxed">
            A global Christ-centered movement transforming nations through
            discipleship, faith, and purposeful service
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          {/* Image - Enhanced with Border and Shadow */}
          <div className="flex justify-center order-2 lg:order-1 px-2 sm:px-0">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-full">
              {/* Decorative Background */}
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl opacity-40 sm:opacity-50"></div>

              {/* Main Image Container */}
              <div className="relative rounded-lg sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-2 border-white">
                <img
                  src="https://gna.org.gh/web/wp-content/uploads/2025/12/Social-Christians-Forgiveness-1-scaled.jpg"
                  alt="GCCI Church Members"
                  className="w-full h-auto sm:h-full object-cover aspect-square"
                />
                {/* Overlay Accent */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Text Content - Enhanced */}
          <div className="order-1 lg:order-2 px-2 sm:px-0">
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {/* Introduction */}
              <div>
                <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold text-blue-900">
                    Great Commission Church International
                  </span>{" "}
                  <span className="text-blue-600 font-semibold">(G.C.C.I)</span>{" "}
                  is a transformative Christ-centered ministry committed to
                  raising world-class disciples across all nations, tribes, and
                  people groups. We are dedicated to building believers who
                  authentically reflect the life and character of Jesus Christ
                  in every dimension of their existence.
                </p>
              </div>

              {/* Core Statements - Card Layout */}
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                {/* Vision Card */}
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-blue-100 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                      <div className="flex items-center justify-center h-9 sm:h-10 w-9 sm:w-10 rounded-lg bg-blue-100">
                        <svg
                          className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M1 11a6 6 0 016-6h.01a6 6 0 016 6v1h3a3 3 0 013 3v5a3 3 0 01-3 3H4a3 3 0 01-3-3v-5a3 3 0 013-3h3v-1zm9 0a4 4 0 00-4 4v5h8v-5a4 4 0 00-4-4z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1 sm:mb-2">
                        Our Vision
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                        {churchData.vision}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mission Card */}
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-amber-100 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                      <div className="flex items-center justify-center h-9 sm:h-10 w-9 sm:w-10 rounded-lg bg-amber-100">
                        <svg
                          className="w-5 sm:w-6 h-5 sm:h-6 text-amber-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5.951-1.429 5.951 1.429a1 1 0 001.169-1.409l-7-14z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1 sm:mb-2">
                        Our Mission
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                        {churchData.mission}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mandate Card */}
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-green-100 hover:border-green-400 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                      <div className="flex items-center justify-center h-9 sm:h-10 w-9 sm:w-10 rounded-lg bg-green-100">
                        <svg
                          className="w-5 sm:w-6 h-5 sm:h-6 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1 sm:mb-2">
                        Our Core Mandate
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                        {churchData.coreBusiness}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2 sm:pt-4 md:pt-6">
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-full sm:w-auto text-center sm:text-left justify-center sm:justify-start"
                >
                  Learn Our Full Story
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
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Key Stats */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 text-white">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 md:gap-6 lg:gap-8">
            <div className="text-center">
              <div className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">
                Global
              </div>
              <p className="text-xs sm:text-sm md:text-base text-blue-100">
                Presence across nations and continents
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">
                Discipleship
              </div>
              <p className="text-xs sm:text-sm md:text-base text-blue-100">
                Focused on growth and spiritual maturity
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">
                Purpose-Driven
              </div>
              <p className="text-xs sm:text-sm md:text-base text-blue-100">
                Every action aligned with Christ's mandate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

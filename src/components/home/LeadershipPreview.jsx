import { Link } from "react-router-dom";
import { churchData } from "../../data/churchData";

export default function LeadershipPreview() {
  const leaders = churchData.leadership.executive.slice(0, 4);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-semibold mb-2 sm:mb-3">
            Leadership Team
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Leadership
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-1 sm:px-0 leading-relaxed">
            Meet the visionary leaders guiding G.C.C.I’s mission to transform
            lives and build God’s Kingdom across nations.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-4 xl:grid-cols-4 gap-5 sm:gap-6 md:gap-8 lg:gap-10 mb-10 sm:mb-12 md:mb-14">
          {leaders.map((leader, index) => (
            <div key={index} className="group h-full">
              <div className="relative h-full bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="relative overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50 aspect-square">
                  {leader.image ? (
                    <>
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base font-semibold text-blue-600 mb-2">
                    {leader.position}
                  </p>

                  <div className="h-1 w-10 sm:w-12 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-3 group-hover:w-full transition-all duration-300"></div>

                  <p className="text-xs sm:text-sm md:text-base text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                    Dedicated to advancing Christ’s mission with vision and
                    integrity
                  </p>
                </div>

                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-10 sm:mb-12"></div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-2xl p-8 sm:p-10 md:p-12 text-center border border-blue-100">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
            Meet Our Full Leadership Team
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto">
            Discover the complete executive and national leadership structure
            that drives G.C.C.I’s vision forward.
          </p>
          <Link
            to="/leadership"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-sm sm:text-base px-5 sm:px-6 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            View Full Leadership
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

        {/* Stats Bar */}
        <div className="mt-10 sm:mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          <div className="text-center p-4">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-1">
              Global
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Leadership across continents
            </p>
          </div>
          <div className="text-center p-4 border-t md:border-t-0 md:border-l md:border-r border-gray-200">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-1">
              Experienced
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Decades of ministry expertise
            </p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-1">
              Visionary
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Guiding the church forward
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

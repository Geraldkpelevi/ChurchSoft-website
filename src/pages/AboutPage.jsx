import { churchData } from "../data/churchData";

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Story
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            About G.C.C.I
          </h1>
          <p className="text-xl text-blue-100 mb-2">
            Transforming lives through faith, discipline, and purposeful service
          </p>
          <p className="text-base text-blue-100 max-w-2xl mx-auto">
            Discover our vision, mission, and the core values that drive Great
            Commission Church International in spreading God's Kingdom
            worldwide.
          </p>
        </div>
      </section>

      {/* MISSION & VISION CARDS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="group">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 h-full border border-amber-100 hover:shadow-lg transition-shadow duration-300">
                <div className="inline-block bg-orange-100 p-3 rounded-lg mb-4">
                  <svg
                    className="w-6 h-6 text-orange-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5.951-1.429 5.951 1.429a1 1 0 001.169-1.409l-7-14z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Our Mission
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {churchData.mission}
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 h-full border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                <div className="inline-block bg-blue-100 p-3 rounded-lg mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M1 11a6 6 0 016-6h.01a6 6 0 016 6v1h3a3 3 0 013 3v5a3 3 0 01-3 3H4a3 3 0 01-3-3v-5a3 3 0 013-3h3v-1zm9 0a4 4 0 00-4 4v5h8v-5a4 4 0 00-4-4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Our Vision
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {churchData.vision}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PURPOSE */}
      <section className="py-20 px-6 bg-gradient-to-r from-amber-900 to-amber-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Core Purpose</h2>
          <p className="text-xl text-amber-50 leading-relaxed">
            {churchData.coreBusiness}
          </p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <span className="bg-amber-700 px-4 py-2 rounded-full text-sm font-semibold">
              Winning
            </span>
            <span className="bg-amber-700 px-4 py-2 rounded-full text-sm font-semibold">
              Churching
            </span>
            <span className="bg-amber-700 px-4 py-2 rounded-full text-sm font-semibold">
              Discipling
            </span>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg">
              Principles that guide our mission and shape our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {churchData.coreValues.map((value, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-gray-100 rounded-xl p-7 hover:border-blue-400 hover:shadow-lg hover:bg-blue-50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 group-hover:bg-blue-600 transition-colors duration-300">
                      <span className="text-blue-600 group-hover:text-white font-bold text-lg">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-500 italic font-medium">
                      {value.scripture}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our Community
          </h3>
          <p className="text-gray-600 text-lg mb-8">
            Be part of something meaningful. Discover how you can contribute to
            our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Get in Touch
            </a>
            <a
              href="/events"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Explore Events
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

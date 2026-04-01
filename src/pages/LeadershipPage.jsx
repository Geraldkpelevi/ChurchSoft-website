import { churchData } from "../data/churchData";

export default function LeadershipPage() {
  const { executive, national, regional, district } = churchData.leadership;

  const LeadershipSection = ({ title, data, bgColor = "bg-white" }) => (
    <section
      className={`py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 ${bgColor}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dedicated leaders committed to guiding our community with wisdom and
            faith.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 lg:gap-8">
          {data.map((leader, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {leader.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 font-medium">
                  {leader.position}
                </p>
                <div className="mt-4 w-12 h-1 bg-blue-600 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Our Leadership Team
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
            Meet the dedicated leaders who guide our church community with
            wisdom, faith, and unwavering commitment to serving our members and
            spreading God's word.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="w-20 h-1 bg-white rounded-full"></div>
            <div className="w-4 h-1 bg-blue-300 rounded-full"></div>
            <div className="w-20 h-1 bg-white rounded-full"></div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
      </section>

      {/* Leadership Sections */}
      <LeadershipSection
        title="Executive Council"
        data={executive}
        bgColor="bg-gray-50"
      />
      <LeadershipSection
        title="National Council"
        data={national}
        bgColor="bg-white"
      />
      <LeadershipSection
        title="Regional Leaders"
        data={regional}
        bgColor="bg-gray-50"
      />
      <LeadershipSection
        title="District Leaders"
        data={district}
        bgColor="bg-white"
      />

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

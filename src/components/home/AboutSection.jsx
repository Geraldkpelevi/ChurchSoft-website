import { churchData } from "../../data/churchData";

export default function AboutSection() {
  return (
    <section className="py-16 px-6 mt-10 sm:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Text Content */}
        <div className="font-stretch-50%">
          <h2 className="text-4xl font-bold mb-4 text-blue-900">
            Great Commission Church International (G.C.C.I)
          </h2>

          <p className="text-gray-600 mb-4">
            Great Commission Church International <i className="text-blue-700">(G.C.C.I)</i> is a Christ-centered
            ministry committed to raising disciples across all nations, tribes,
            and people groups. Our focus is on building believers who reflect
            the life and character of Christ in every area of their lives.
          </p>

          <p className="text-gray-600 mb-4">
            <span className="font-semibold text-gray-800">Our Vision:</span>{" "}
            {churchData.vision}
          </p>

          <p className="text-gray-600 mb-4">
            <span className="font-semibold text-gray-800">Our Mission:</span>{" "}
            {churchData.mission}
          </p>

          <p className="text-gray-600 mb-6">
            <span className="font-semibold text-gray-800">Our Mandate:</span>{" "}
            {churchData.coreBusiness}
          </p>

          <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-semibold">
            Learn More
          </button>
        </div>

        {/* Image / Visual */}
        <div className="flex justify-center">
          <div className="w-full h-100 md:h-100 bg-gray-200 rounded-lg flex items-center justify-center">
            <img
              src="https://gna.org.gh/web/wp-content/uploads/2025/12/Social-Christians-Forgiveness-1-scaled.jpg"
              alt="GCCI Church Members"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
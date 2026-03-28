import { churchData } from "../data/churchData";

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* HERO / HEADER */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">About G.C.C.I</h1>
        <p className="max-w-2xl mx-auto text-gray-300">
          Discover our vision, mission, and the core values that drive Great
          Commission Church International.
        </p>
      </section>

      {/* MISSION */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-gray-600">{churchData.mission}</p>
      </section>

      {/* VISION */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
        <p className="max-w-3xl mx-auto text-gray-600">{churchData.vision}</p>
      </section>

      {/* CORE BUSINESS */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Core Business</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          {churchData.coreBusiness}
        </p>
      </section>

      {/* CORE VALUES */}
      {/* CORE VALUES */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Core Values</h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {churchData.coreValues.map((value, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm"
            >
              <h3 className="font-semibold text-lg mb-2">
                {index + 1}. {value.title}
              </h3>
              <p className="text-gray-600 text-sm italic">{value.scripture}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

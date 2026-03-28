import { churchData } from "../data/churchData";

export default function LeadershipPage() {
  const { executive, national, regional, district } = churchData.leadership;

  const Section = ({ title, data }) => (
    <section className="py-16 px-6 font-[DM Sans]">
      <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>

      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {data.map((leader, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg text-center">
            <img
              src={leader.image}
              alt={leader.name}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="font-semibold text-sm">{leader.name}</h3>
            <p className="text-gray-500 text-sm">{leader.position}</p>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="pt-20">
      {/* HEADER */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Our Leadership</h1>
        <p className="text-gray-300 mt-2">
          Meet the leaders guiding GCCI across all levels
        </p>
      </section>

      <Section title="Executive Council" data={executive} />
      <Section title="National Council" data={national} />
      <Section title="Regional Leaders" data={regional} />
      <Section title="District Leaders" data={district} />
    </div>
  );
}

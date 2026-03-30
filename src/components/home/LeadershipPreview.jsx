import { Link } from "react-router-dom";
import { churchData } from "../../data/churchData";

export default function LeadershipPreview() {
  const leaders = churchData.leadership.executive.slice(0, 4);

  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10 font-[Playfair Display] text-blue-600">Our Leadership</h2>

      <div className="grid md:grid-cols-4 gap-6 mb-15">
        {leaders.map((leader, index) => (
          <div key={index} className="p-4 shadow border-gray-200 rounded-lg">
            <img
              src={leader.image}
              alt={leader.name}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="font-semibold">{leader.name}</h3>
            <p className="text-gray-500">{leader.position}</p>
          </div>
        ))}
      </div>
      <Link
        to="/leadership"
        className="border mt-40 border-gray-200 text-blue-500 px-6 py-3 rounded-lg hover:text-white hover:font-semibold hover:bg-blue-700 transition"
      >
        View All
      </Link>
    </section>
  );
}

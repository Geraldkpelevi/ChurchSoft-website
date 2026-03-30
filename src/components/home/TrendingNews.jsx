import { churchData } from "../../data/churchData";
import NewsCard from "../common/NewsCard";
import { Link } from "react-router-dom";

function TrendingNews() {
  return (
    <section className="bg-[#001866] py-16 px-6">
      <h1 className="text-white text-4xl text-center mb-20 font-[Playfair Display] font-semibold">
        Trending News
      </h1>
      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {churchData.newsData.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>

      {/* Button */}
      <Link to="/news">
        <div className="flex justify-center mt-12">
          <button className="border border-gray-500 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
            View All
          </button>
        </div>
      </Link>
    </section>
  );
}

export default TrendingNews;

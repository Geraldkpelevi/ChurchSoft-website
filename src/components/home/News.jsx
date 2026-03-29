import React from "react";
import NewsCard from "../common/NewsCard";

function News() {
  const newsData = [
  {
    image: "https://gna.org.gh/web/wp-content/uploads/2025/12/IMG-20251226-WA0008.jpg",
    date: "March 13, 2026",
    title: "Apostle Dr Ansah urges peace among Ghanaians",
    description:
      "Accra, Dec 24, GNA – Apostle Dr Samuel Vincent Ansah, Chairman of the Ghana National Council of the Great Commission Church International (GCCI), has wished Ghanaians a Merry Christmas and a prosperous 2026....View more",
    link: "https://gna.org.gh/2024/12/gcci-chairman-urges-christians-to-use-christmas-to-reflect-on-their-callings/",
  },
  {
    image: "https://gna.org.gh/web/wp-content/uploads/2024/11/Social-Great-Commission-02b-1536x1152.jpg",
    date: "March 13, 2026",
    title:
      "Apostle Prof. Asuming-Brempong advises Christians to be wary of Satan’s devices ...",
    description:
      "For the second time, the General Superintendent of Assemblies of God...View more",
    link: "https://gna.org.gh/2025/10/apostle-prof-asuming-brempong-advises-christians-to-be-wary-of-satans-devices/",
  },
  {
    image: "https://tse1.mm.bing.net/th/id/OIP.SJZNyKfw4ThfEBwO84S_fwHaEb?rs=1&pid=ImgDetMain&o=7&rm=3",
    date: "March 12, 2026",
    title:
      "GCCI Chair urges Churches to develop structures for Christ-like disciples making ...",
    description:
      "Accra, Nov 30, GNA – Apostle Dr Samuel Vincent Ansah, Chair, Ghana National Council, Great Commission Church International (GCCI) has urged Churches to develop structures for making Christ-like disciples....View more",
    link: "https://gna.org.gh/2024/11/gcci-chair-urges-churches-to-develop-structures-for-christ-like-disciples-making/",
  },
];

  return (
    <section className="bg-[#001866] py-16 px-6">
      <h1 className="text-white text-4xl text-center mb-20">Trending News</h1>
      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {newsData.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <button className="border border-gray-500 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
          View All
        </button>
      </div>
    </section>
  );
}

export default News;
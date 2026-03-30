import React from "react";
import NewsCard from "../components/common/NewsCard";
import { churchData } from "../data/churchData";

function NewsPage() {


  return (
    <section className="bg-[#001866] py-16 px-6">
      <h1 className="text-white text-4xl text-center mb-20 font-[Playfair Display] font-semibold">Trending News</h1>
      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {churchData.newsData.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>  
    </section>
  );
}

export default NewsPage;
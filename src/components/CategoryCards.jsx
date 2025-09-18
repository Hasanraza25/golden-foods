import React from "react";

// Example placeholder images (replace with real ones)
import MacaroniImg from "../assets/category/recipie_macaroni.png";
import SpaghettiImg from "../assets/category/recipie_spaghetti.png";
import ChaatMasalaImg from "../assets/category/chat_masala.png";
import VermicelliImg from "../assets/category/u2.png";
import ClassicSpaghettiImg from "../assets/category/classic_spaghetti.png";
import ClassicMacaroniImg from "../assets/category/classic_macaroni.png";

const categories = [
  {
    name: "Golden Recipe Macaroni",
    image: MacaroniImg,
    tagline: "Perfect texture, crafted for every recipe.",
  },
  {
    name: "Golden Recipe Spaghetti",
    image: SpaghettiImg,
    tagline: "Long, smooth, and authentic taste.",
  },
  {
    name: "Golden Chaat Masala",
    image: ChaatMasalaImg,
    tagline: "A flavorful twist for every snack.",
  },
  {
    name: "Golden U-Shaped Vermicelli",
    image: VermicelliImg,
    tagline: "Delicate strands, endless creativity.",
  },
  {
    name: "Golden Classic Spaghetti",
    image: ClassicSpaghettiImg,
    tagline: "Timeless taste, crafted with tradition.",
  },
  {
    name: "Golden Classic Macaroni",
    image: ClassicMacaroniImg,
    tagline: "Classic comfort, golden quality.",
  },
];

const CategoryCards = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-20 bg-gradient-to-b  from-white to-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Our Premium Categories
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
          >
            <div className="overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-52 object-contain p-6 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {category.name}
              </h3>
              <p className="text-gray-500 text-sm">{category.tagline}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryCards;

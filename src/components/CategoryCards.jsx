import React from "react";

import MacaroniImg from "../assets/category/recipie_macaroni.png";
import SpaghettiImg from "../assets/category/recipie_spaghetti.png";
import ChaatMasalaImg from "../assets/category/chat_masala.png";
import VermicelliImg from "../assets/category/u2.png";
import ClassicSpaghettiImg from "../assets/category/classic_spaghetti.png";
import ClassicMacaroniImg from "../assets/category/classic_macaroni.png";
import GoldenFoodsWatermark from "../assets/goldenfoods.png"; // <-- uncomment & add when ready

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
  // Duplicate list so CSS translation (-50%) can create a seamless loop
  const looped = categories.concat(categories);

  return (
    <section className="relative pt-16 -mb-28">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-8 z-10 relative drop-shadow-lg">
        Our Premium Categories
      </h2>

      {/* MARQUEE: container hides overflow, track translates */}
      <div className="relative">
        {/* outer wrapper hides scrollbar/overflow */}
        <div className="marquee no-scrollbar">
          {/* track: duplicated items, nowrap */}
          <div className="marquee-track flex gap-8 flex-nowrap items-stretch">
            {looped.map((cat, idx) => (
              <article
                key={idx}
                className="min-w-[260px] max-w-[300px] shrink-0 bg-white/6 backdrop-blur-md border border-yellow-400/18 rounded-3xl p-4
                           flex flex-col items-center text-center shadow-md transform transition-transform duration-300 hover:scale-105"
                aria-hidden={idx >= categories.length ? "true" : "false"}
              >
                <div className="w-full flex items-center justify-center p-4">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-36 h-36 object-contain transition-transform duration-500"
                  />
                </div>

                <h3 className="mt-3 text-lg font-semibold text-yellow-300">
                  {cat.name}
                </h3>
                <p className="text-sm text-gray-200 mt-1">{cat.tagline}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Full-width Golden Foods PNG (breaks out of container padding) */}
      <div className="mt-12">
        <div className="w-screen relative">
          {/* uncomment and replace when you have the PNG */}
          <img
            src={GoldenFoodsWatermark}
            alt="Golden Foods"
            className="w-full object-contain pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;

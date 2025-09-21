import React, { useState, useEffect } from "react";

import MacaroniImg from "../assets/category/recipie_macaroni.png";
import SpaghettiImg from "../assets/category/recipie_spaghetti.png";
import ChaatMasalaImg from "../assets/category/chaat_masala.png";
import VermicelliImg from "../assets/category/U2.png";
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
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Triple the categories for smoother infinite scroll
  const looped = [...categories, ...categories, ...categories];

  // Detect mobile/tablet for disabling hover effects
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative pt-8 sm:pt-12 pb-6 sm:pb-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-yellow-400 mb-8 sm:mb-12 z-10 relative drop-shadow-2xl px-4">
        Our Premium Categories
      </h2>

      {/* Enhanced Marquee Container - Removed shadows, optimized for mobile */}
      <div 
        className="relative h-[300px] sm:h-[380px] md:h-[420px] lg:h-[480px] xl:h-[520px] overflow-x-hidden overflow-y-auto py-6 sm:py-8 md:py-12"
      >
        {/* Marquee Track */}
        <div 
          className={`flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center h-full transition-all duration-700 ease-out ${
            isHovered && !isMobile ? 'animate-marquee-paused' : 'animate-marquee-fast'
          }`}
          style={{
            width: 'max-content',
            willChange: 'transform',
            paddingTop: '20px',
            paddingBottom: '20px'
          }}
        >
          {looped.map((cat, idx) => (
            <article
              key={`${cat.name}-${idx}`}
              className={`group relative flex-shrink-0 
                         w-[180px] h-[220px] 
                         sm:w-[220px] sm:h-[280px] 
                         md:w-[260px] md:h-[320px] 
                         lg:w-[300px] lg:h-[360px] 
                         xl:w-[320px] xl:h-[380px]
                         bg-gradient-to-br from-red-800/20 via-red-700/15 to-red-900/25 
                         backdrop-blur-lg rounded-lg sm:rounded-xl md:rounded-2xl 
                         p-3 sm:p-4 md:p-5 lg:p-6
                         flex flex-col items-center justify-between text-center 
                         shadow-lg sm:shadow-xl 
                         ${!isMobile ? 'hover:shadow-red-500/30 transform transition-all duration-500 ease-out hover:scale-105 ' : 'transition-none'}
                         border border-yellow-400/30 
                         ${!isMobile ? 'hover:border-yellow-400/60 cursor-pointer' : ''}
                         overflow-hidden z-20`}
              aria-hidden={idx >= categories.length ? "true" : "false"}
              onMouseEnter={() => !isMobile && setIsHovered(true)}
              onMouseLeave={() => !isMobile && setIsHovered(false)}
            >
              {/* Animated Background Glow - Only on desktop */}
              {!isMobile && (
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-red-500/10 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg sm:rounded-xl md:rounded-2xl"></div>
              )}
              
              {/* Floating Particles Effect - Only on desktop */}
              {!isMobile && (
                <div className="absolute inset-0 overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-70
                                 animate-pulse transition-all duration-1000"
                      style={{
                        left: `${25 + i * 20}%`,
                        top: `${15 + i * 20}%`,
                        animationDelay: `${i * 0.3}s`
                      }}
                    ></div>
                  ))}
                </div>
              )}

              {/* Product Image Container - Fixed height for alignment */}
              <div className={`relative w-full flex items-center justify-center z-10
                              h-[80px] sm:h-[100px] md:h-[120px] lg:h-[140px] xl:h-[160px]
                              ${!isMobile ? 'transform group-hover:scale-110 transition-transform duration-500' : ''}`}>
                <div className="relative">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className={`object-contain transition-all duration-500 ease-out
                               ${!isMobile ? 'group-hover:rotate-6 group-hover:drop-shadow-xl filter group-hover:brightness-110' : ''}
                               w-16 h-16 
                               sm:w-20 sm:h-20 
                               md:w-24 md:h-24 
                               lg:w-28 lg:h-28 
                               xl:w-32 xl:h-32`}
                    loading="lazy"
                  />
                  {/* Glow Effect Behind Image - Only on desktop */}
                  {!isMobile && (
                    <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-lg 
                                    scale-0 group-hover:scale-125 transition-all duration-500 -z-10"></div>
                  )}
                </div>
              </div>

              {/* Product Name - Fixed height for alignment */}
              <div className="w-full flex items-center justify-center h-[50px] sm:h-[60px] md:h-[70px] lg:h-[80px] xl:h-[90px]">
                <h3 className={`font-bold text-yellow-300 z-10
                               ${!isMobile ? 'group-hover:text-yellow-200 transition-colors duration-300' : ''}
                               leading-tight px-2
                               text-sm 
                               sm:text-base 
                               md:text-lg 
                               lg:text-xl 
                               xl:text-2xl`}>
                  {cat.name}
                </h3>
              </div>
              
              {/* Product Tagline - Fixed height for alignment */}
              <div className="w-full flex items-center justify-center h-[40px] sm:h-[50px] md:h-[60px] lg:h-[70px] xl:h-[80px]">
                <p className={`text-white/90 leading-relaxed z-10
                              ${!isMobile ? 'group-hover:text-white transition-colors duration-300' : ''}
                              px-2 text-center
                              text-xs 
                              sm:text-xs 
                              md:text-sm 
                              lg:text-base 
                              xl:text-base`}>
                  {cat.tagline}
                </p>
              </div>

              {/* Hover Border Animation - Only on desktop */}
              {!isMobile && (
                <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-transparent 
                                group-hover:border-yellow-400/50 transition-all duration-500
                                group-hover:shadow-[0_0_20px_rgba(251,191,36,0.2)]"></div>
              )}
            </article>
          ))}
        </div>
      </div>

      {/* Golden Foods Watermark */}
      {/* <div className="mt-8 sm:mt-12">
        <div className="w-screen relative">
          <img
            src={GoldenFoodsWatermark}
            alt="Golden Foods"
            className="w-full object-contain pointer-events-none"
          />
        </div>
      </div> */}
    </section>
  );
};

export default CategoryCards;

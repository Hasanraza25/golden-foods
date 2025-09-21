import React, { useState, useEffect } from "react";

// Import images
import ColoredMacaroni from "../assets/images/new_images/colored-macroni-curly.png";
import ColoredPasta from "../assets/images/new_images/colored-pasta-2-styles.png";
import ColoredVermicelli from "../assets/images/new_images/colored-vermicili.png";
import Vermilici from "../assets/images/new_images/vermilici.png";

const ProductShowcase = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const products = [
    {
      id: 1,
      name: "Colored Macaroni Curly",
      image: ColoredMacaroni,
      description:
        "Premium quality colorful macaroni with perfect texture and vibrant colors",
    },
    {
      id: 2,
      name: "Colored Pasta Varieties",
      image: ColoredPasta,
      description:
        "Multiple pasta styles in beautiful colors for creative cooking",
    },
    {
      id: 3,
      name: "Colored Vermicelli",
      image: ColoredVermicelli,
      description:
        "Delicate vermicelli strands in vibrant colors for special occasions",
    },
    {
      id: 4,
      name: "Premium Vermicelli",
      image: Vermilici,
      description:
        "Traditional vermicelli crafted with authentic Italian techniques",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % products.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-yellow-400 mb-2 sm:mb-3 md:mb-4 lg:mb-6">
            Our Premium Product Range
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
            Discover our colorful collection of authentic Italian-style pasta,
            crafted with precision and passion since 1999
          </p>
        </div>

        {/* Main Product Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-center max-w-7xl mx-auto">
          {/* Product Image Side - First on Mobile, Left on Desktop */}
          <div className="relative order-1 lg:order-1 flex items-center justify-center">
            <div className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px]">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === activeProduct
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                >
                  <div className="w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info Side - Second on Mobile, Right on Desktop */}
          <div className="relative order-2 lg:order-2 flex items-center justify-center">
            <div className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px]">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === activeProduct
                      ? "translate-x-0 opacity-100"
                      : "translate-x-10 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="bg-white/15 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 h-full border border-white/30 shadow-xl">
                    <div className="h-full flex flex-col justify-center">
                      {/* Product Title */}
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-yellow-400 mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight">
                        {product.name}
                      </h3>

                      {/* Product Description */}
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white leading-relaxed mb-4 sm:mb-6 md:mb-7 lg:mb-8 opacity-90">
                        {product.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-2 sm:space-y-3 md:space-y-4">
                        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-yellow-400 rounded-full flex-shrink-0 shadow-lg" />
                          <span className="text-xs sm:text-sm md:text-base lg:text-lg text-white font-medium">
                            Premium Quality Ingredients
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-yellow-400 rounded-full flex-shrink-0 shadow-lg" />
                          <span className="text-xs sm:text-sm md:text-base lg:text-lg text-white font-medium">
                            Authentic Italian Techniques
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-yellow-400 rounded-full flex-shrink-0 shadow-lg" />
                          <span className="text-xs sm:text-sm md:text-base lg:text-lg text-white font-medium">
                            Perfect Texture & Taste
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Navigation */}
        <div className="flex justify-center space-x-2 sm:space-x-3 md:space-x-4 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveProduct(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 shadow-lg ${
                index === activeProduct
                  ? "bg-yellow-400 scale-125 shadow-yellow-400/50"
                  : "bg-white/50 hover:bg-white/70 hover:scale-110"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

import { useState, useRef, useEffect } from "react";
import { categories, productsData } from "../data/products";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [sortBy, setSortBy] = useState("default");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [sortOpen, setSortOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  const dropdownRef = useRef(null);
  const categoryRef = useRef(null);

  const products = productsData[selectedCategory] || [];

  // Close dropdown when clicking outside or pressing Escape
  useEffect(() => {
    function handleDocClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setSortOpen(false);
      }
      if (categoryRef.current && !categoryRef.current.contains(e.target)) {
        setCategoryOpen(false);
      }
    }

    function handleKey(e) {
      if (e.key === "Escape") {
        setSortOpen(false);
        setCategoryOpen(false);
      }
    }

    document.addEventListener("mousedown", handleDocClick);
    document.addEventListener("touchstart", handleDocClick);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("mousedown", handleDocClick);
      document.removeEventListener("touchstart", handleDocClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  // Apply Filters
  const filteredProducts = products
    .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
    .sort((a, b) => {
      if (sortBy === "lowToHigh") return a.price - b.price;
      if (sortBy === "highToLow") return b.price - a.price;
      if (sortBy === "aToZ") return a.name.localeCompare(b.name);
      if (sortBy === "zToA") return b.name.localeCompare(a.name);
      return 0;
    });

  const sortOptions = [
    { value: "default", label: "Default", icon: "↔" },
    { value: "lowToHigh", label: "Price: Low → High", icon: "⬇️" },
    { value: "highToLow", label: "Price: High → Low", icon: "⬆️" },
    { value: "aToZ", label: "Name: A → Z", icon: "🔤" },
    { value: "zToA", label: "Name: Z → A", icon: "🔡" },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }

        /* Responsive text utilities */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Hide number input arrows */
        .no-arrows::-webkit-outer-spin-button,
        .no-arrows::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        .no-arrows[type="number"] {
          -moz-appearance: textfield;
        }

        /* Custom range slider styling */
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          border: 2px solid white;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          transition: all 0.2s ease;
        }

        .slider-thumb::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(251, 191, 36, 0.4);
        }

        .slider-thumb::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          border: 2px solid white;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          transition: all 0.2s ease;
        }

        .slider-thumb::-moz-range-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(251, 191, 36, 0.4);
        }

        /* Custom scrollbar for category section */
        .category-scroll::-webkit-scrollbar {
          height: 6px;
        }

        .category-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
          margin: 0 8px;
        }

        .category-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, #fbbf24, #f59e0b);
          border-radius: 3px;
          transition: all 0.3s ease;
        }

        .category-scroll::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(90deg, #f59e0b, #d97706);
          transform: scaleY(1.2);
        }

        /* Hide scrollbar for Firefox */
        .category-scroll {
          scrollbar-width: thin;
          scrollbar-color: #fbbf24 rgba(255, 255, 255, 0.1);
        }
      `}</style>

      <div className="p-4 sm:p-6 lg:p-8 xl:p-12 2xl:p-16 bg-gradient-to-br from-red-900 via-red-800 to-yellow-900 min-h-screen text-white">
        {/* Filters */}
        <div className="flex flex-col mb-6 gap-4 lg:gap-6 relative z-20">
          {/* Categories Section */}
          <div className="w-full">
            {/* Desktop Categories - Hidden on mobile and tablet */}
            <div className="hidden lg:flex gap-2 xl:gap-3 2xl:gap-4 overflow-x-auto justify-start 2xl:justify-center pb-4 px-2 category-scroll">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 xl:px-6 xl:py-3.5 2xl:px-8 2xl:py-4 text-sm xl:text-base 2xl:text-lg rounded-full transition-all whitespace-nowrap shrink-0 font-medium 2xl:font-semibold
                  ${
                    selectedCategory === cat
                      ? "bg-yellow-500 text-black shadow-lg hover:shadow-xl"
                      : "bg-white/10 hover:bg-white/20 hover:scale-105"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Mobile & Tablet Categories Dropdown - Visible on mobile and tablet */}
            <div ref={categoryRef} className="lg:hidden relative">
              <button
                onClick={() => setCategoryOpen(!categoryOpen)}
                className="w-full flex items-center justify-between px-3 py-3 bg-white/10 hover:bg-white/15 rounded-xl border border-yellow-400/20 transition-all min-h-[48px]"
              >
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <span className="text-yellow-300 text-xs sm:text-sm font-medium shrink-0">
                    Category:
                  </span>
                  <span
                    className="text-white font-medium truncate text-xs sm:text-sm"
                    title={selectedCategory}
                  >
                    {selectedCategory}
                  </span>
                </div>
                <svg
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 transition-transform duration-300 shrink-0 ml-2 ${
                    categoryOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Mobile & Tablet Categories Dropdown Menu */}
              <div
                className={`absolute z-50 top-full left-0 right-0 mt-2
                bg-gradient-to-br from-white/95 via-yellow-50/90 to-white/95
                backdrop-blur-xl rounded-xl overflow-hidden
                transform transition-all duration-300 origin-top
                border border-yellow-400/30 shadow-2xl ${
                  categoryOpen
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="py-2 max-h-60 overflow-y-auto">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setCategoryOpen(false);
                      }}
                      className={`flex items-center w-full text-left px-3 py-3
                      transition-all duration-200 font-medium text-xs sm:text-sm
                      ${
                        selectedCategory === cat
                          ? "bg-gradient-to-r from-yellow-100 to-yellow-200 text-red-700 border-l-4 border-yellow-500"
                          : "text-gray-800 border-l-4 border-transparent hover:bg-gradient-to-r hover:from-red-50 hover:to-yellow-50 hover:text-red-600 hover:border-yellow-400"
                      }`}
                    >
                      <span className="truncate pr-2" title={cat}>
                        {cat}
                      </span>
                      {selectedCategory === cat && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 text-yellow-600 ml-auto shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Filters Section */}
          <div className="w-full flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 lg:gap-6 backdrop-blur-xl border border-yellow-400/20 rounded-2xl px-4 lg:px-6 py-4 lg:py-5 shadow-xl relative overflow-visible">
            {/* Glow accent */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/10 via-transparent to-red-800/10 pointer-events-none" />

            {/* Sort Dropdown */}
            <div ref={dropdownRef} className="relative z-50 lg:order-1">
              <div
                className="relative group"
                onMouseEnter={() => setSortOpen(true)}
                onMouseLeave={() => setSortOpen(false)}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => setSortOpen((s) => !s)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      setSortOpen((s) => !s);
                  }}
                  aria-haspopup="true"
                  aria-expanded={sortOpen}
                  className="w-full lg:w-auto text-white font-semibold hover:text-yellow-300 transition-all duration-300 hover:scale-105 flex items-center justify-between lg:justify-start space-x-2 relative px-3 py-2 rounded-md"
                >
                  <span>Sort By</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      sortOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-400 transition-all duration-300 group-hover:w-full" />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute z-50 top-full left-0 mt-3 w-full lg:w-64
                  bg-gradient-to-br from-white/95 via-yellow-50/90 to-white/95
                  backdrop-blur-xl rounded-2xl overflow-hidden
                  transform transition-all duration-250 origin-top-left
                  border border-yellow-400/30 shadow-2xl ${
                    sortOpen
                      ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="py-2">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSortBy(option.value);
                          setSortOpen(false);
                        }}
                        className={`flex items-center justify-between w-full text-left px-6 py-3
                        transition-all duration-200 font-medium text-gray-800
                        ${
                          sortBy === option.value
                            ? "bg-gradient-to-r from-yellow-100 to-yellow-200 text-red-700 border-l-4 border-yellow-500 shadow-inner"
                            : "border-l-4 border-transparent hover:bg-gradient-to-r hover:from-red-50 hover:to-yellow-50 hover:text-red-600 hover:border-yellow-400"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-lg leading-none">
                            {option.icon}
                          </span>
                          {option.label}
                        </span>

                        {/* Active check */}
                        {sortBy === option.value && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-yellow-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Price Range Slider */}
            <div className="flex flex-col gap-3 z-10 w-full lg:min-w-[280px] lg:max-w-[320px] lg:order-2">
              <div className="flex items-center justify-between">
                <span className="text-yellow-300 font-medium text-sm lg:text-base">
                  Price Range:
                </span>
                <div className="px-3 py-1 bg-yellow-500/20 rounded-full border border-yellow-400/30">
                  <span className="text-yellow-200 text-xs lg:text-sm font-medium">
                    Rs. {priceRange[0]} - Rs. {priceRange[1]}
                  </span>
                </div>
              </div>

              <div className="relative">
                {/* Track Background */}
                <div className="h-2 bg-white/20 rounded-full relative overflow-hidden">
                  {/* Active Range */}
                  <div
                    className="absolute h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-inner"
                    style={{
                      left: `${(priceRange[0] / 500) * 100}%`,
                      width: `${
                        ((priceRange[1] - priceRange[0]) / 500) * 100
                      }%`,
                    }}
                  />
                </div>

                {/* Min Range Slider */}
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange[0]}
                  onChange={(e) =>
                    setPriceRange([
                      Math.min(+e.target.value, priceRange[1] - 10),
                      priceRange[1],
                    ])
                  }
                  className="absolute top-0 left-0 w-full h-2 appearance-none bg-transparent cursor-pointer slider-thumb"
                />

                {/* Max Range Slider */}
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([
                      priceRange[0],
                      Math.max(+e.target.value, priceRange[0] + 10),
                    ])
                  }
                  className="absolute top-0 left-0 w-full h-2 appearance-none bg-transparent cursor-pointer slider-thumb"
                />
              </div>

              {/* Price Labels */}
              <div className="flex justify-between text-xs text-yellow-200/70">
                <span>Rs. 0</span>
                <span>Rs. 500+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 sm:gap-6 xl:gap-8 2xl:gap-10 relative z-10 max-w-screen-2xl mx-auto">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="relative bg-white/10 backdrop-blur-lg rounded-2xl 2xl:rounded-3xl p-4 xl:p-6 2xl:p-8 shadow-lg hover:scale-105 transition-all duration-500 border border-yellow-500/40 opacity-0 animate-fadeInUp w-full flex flex-col"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
              }}
            >
              {/* Placeholder image */}
              <div className="w-full h-40 xl:h-48 2xl:h-60 flex items-center justify-center bg-white/5 rounded-lg 2xl:rounded-xl mb-4 2xl:mb-6 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                  className="max-w-full max-h-full object-contain"
                  style={{ imageRendering: "auto" }}
                />
              </div>

              <h3 className="text-lg xl:text-xl 2xl:text-2xl font-semibold mb-2 2xl:mb-4 transition-colors duration-300 hover:text-yellow-300 line-clamp-2 flex-grow">
                {product.name}
              </h3>
              <p className="text-yellow-400 font-bold mb-3 xl:mb-4 2xl:mb-6 transition-all duration-300 hover:text-yellow-300 hover:scale-105 text-lg xl:text-xl 2xl:text-2xl">
                Rs. {product.price}
              </p>
              <button className="w-full px-4 py-2.5 xl:px-5 xl:py-3 2xl:px-6 2xl:py-4 bg-yellow-500 text-black rounded-lg 2xl:rounded-xl font-medium 2xl:font-semibold hover:bg-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-lg transform text-sm xl:text-base 2xl:text-lg mt-auto">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpDown, ArrowDown, ArrowUp } from "lucide-react";
import { categories, productsData } from "../data/products";
import productsCatalogBg from "../assets/products-catelog-2.png";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [sortBy, setSortBy] = useState("default");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOpen, setSortOpen] = useState(false);

  const dropdownRef = useRef(null);

  const navigate = useNavigate();

  const products = productsData[selectedCategory] || [];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Close dropdown when clicking outside or pressing Escape
  useEffect(() => {
    function handleDocClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setSortOpen(false);
      }
    }

    function handleKey(e) {
      if (e.key === "Escape") {
        setSortOpen(false);
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
    .filter(
      (p) =>
        p.price >= priceRange[0] &&
        p.price <= priceRange[1] &&
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "lowToHigh") return a.price - b.price;
      if (sortBy === "highToLow") return b.price - a.price;
      return 0;
    });

  const sortOptions = [
    { value: "default", label: "Default", icon: ArrowUpDown },
    { value: "lowToHigh", label: "Price: Low to High", icon: ArrowDown },
    { value: "highToLow", label: "Price: High to Low", icon: ArrowUp },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section with Background Image - Full Viewport Height */}
      <div
        className="relative flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${productsCatalogBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-7xl mx-auto text-center relative z-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 drop-shadow-2xl text-shadow-lg">
            Our Products
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/95 max-w-3xl mx-auto drop-shadow-lg font-medium leading-relaxed mb-12">
            Discover our premium collection of pasta and food products
          </p>

          {/* Professional Mouse Scroll Indicator */}
          <div className="flex flex-col items-center space-y-2">
            {/* Mouse Icon */}
            <div className="w-6 h-10 border-2 border-white/60 rounded-full relative">
              <div className="w-1 h-3 bg-white/60 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
            </div>
            {/* Scroll Text */}
            <span className="text-white/60 text-sm font-medium tracking-wider">
              SCROLL
            </span>
          </div>
        </div>

        {/* Subtle overlay for text readability without dimming too much */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 z-10"></div>

        {/* Additional text shadow overlay only behind text */}
        <div className="absolute inset-0 flex items-center justify-center z-15">
          <div className="w-full max-w-4xl h-32 bg-black/20 blur-3xl rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Categories Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
            Categories
          </h2>
          {/* Desktop: flex-wrap, Mobile/Tablet: horizontal scroll */}
          <div className="hidden md:flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg"
                    : "bg-white/10 text-white hover:bg-white/20 border border-yellow-400/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile/Tablet: Horizontal scroll */}
          <div className="md:hidden overflow-x-auto scrollbar-hide">
            <div
              className="flex gap-3 pb-2 px-4"
              style={{ width: "max-content" }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg"
                      : "bg-white/10 text-white hover:bg-white/20 border border-yellow-400/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-white/10 rounded-2xl p-6 mb-8 border border-yellow-400/20 z-50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search Field */}
            <div className="space-y-2">
              <label className="block text-yellow-300 font-semibold text-sm">
                Search Products
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by product name..."
                  className="w-full px-4 py-3 pl-12 bg-white/10 border border-yellow-400/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="space-y-2">
              <label className="block text-yellow-300 font-semibold text-sm">
                Sort By
              </label>
              <div ref={dropdownRef} className="relative z-50">
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="w-full px-4 py-3 bg-white/10 border border-yellow-400/30 rounded-xl text-white text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    {(() => {
                      const IconComponent = sortOptions.find((opt) => opt.value === sortBy)?.icon;
                      return IconComponent ? <IconComponent size={16} /> : null;
                    })()}
                    {sortOptions.find((opt) => opt.value === sortBy)?.label}
                  </span>
                  <svg
                    className={`w-5 h-5 text-yellow-400 transition-transform duration-200 ${
                      sortOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {sortOpen && (
                  <div className="absolute z-[9999] top-full left-0 right-0 mt-2 bg-red-900/95 backdrop-blur-lg rounded-xl border border-yellow-400/30 shadow-2xl overflow-hidden">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSortBy(option.value);
                          setSortOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-all cursor-pointer ${
                          sortBy === option.value
                            ? "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border-l-4 border-yellow-400"
                            : "text-white hover:bg-white/10 hover:text-yellow-300"
                        }`}
                      >
                        <option.icon size={16} />
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Price Range */}
            <div className="space-y-2">
              <label className="block text-yellow-300 font-semibold text-sm">
                Price Range
              </label>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white text-sm">
                    Rs. {priceRange[0]}
                  </span>
                  <span className="text-white text-sm">
                    Rs. {priceRange[1]}
                  </span>
                </div>

                <div className="relative">
                  {/* Track */}
                  <div className="h-2 bg-white/20 rounded-full">
                    <div
                      className="absolute h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                      style={{
                        left: `${(priceRange[0] / 500) * 100}%`,
                        width: `${
                          ((priceRange[1] - priceRange[0]) / 500) * 100
                        }%`,
                      }}
                    />
                  </div>

                  {/* Min slider */}
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
                    className="absolute top-0 left-0 w-full h-2 appearance-none bg-transparent cursor-pointer range-slider"
                  />

                  {/* Max slider */}
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
                    className="absolute top-0 left-0 w-full h-2 appearance-none bg-transparent cursor-pointer range-slider"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-white/80">
            Showing {filteredProducts.length} products in "{selectedCategory}"
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-yellow-400 hover:text-yellow-300 text-sm underline cursor-pointer"
            >
              Clear search
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl group cursor-pointer"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
                onClick={() => navigate(`/products/${product.id}`)}
              >
                {/* Product Image */}
                <div className="w-full h-48 bg-white/5 rounded-xl mb-4 flex items-center justify-center overflow-hidden group-hover:bg-white/10 transition-all">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-yellow-300 transition-colors line-clamp-2">
                    {product.name}
                  </h3>

                  <p className="text-2xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors">
                    Rs. {product.price}
                  </p>

                  <button
                    className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-xl hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/products/${product.id}`);
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              No products found
            </h3>
            <p className="text-white/60 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setPriceRange([0, 500]);
                setSortBy("default");
              }}
              className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-xl hover:from-yellow-400 hover:to-orange-400 transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

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

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .text-shadow-lg {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8),
            0 0 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.3);
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .range-slider::-webkit-slider-thumb {
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

        .range-slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(251, 191, 36, 0.4);
        }

        .range-slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          border: 2px solid white;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}

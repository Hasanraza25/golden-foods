import { useState } from "react";

// Dummy data
const categories = ["All", "Macaroni", "Spaghetti", "Chaat Masala", "Vermicelli"];

const products = [
  { id: 1, name: "Classic Macaroni", category: "Macaroni", image: "/macaroni.png" },
  { id: 2, name: "Masala Macaroni", category: "Macaroni", image: "/macaroni2.png" },
  { id: 3, name: "Italian Spaghetti", category: "Spaghetti", image: "/spaghetti.png" },
  { id: 4, name: "Cheese Spaghetti", category: "Spaghetti", image: "/spaghetti2.png" },
  { id: 5, name: "Tangy Chaat Masala", category: "Chaat Masala", image: "/chaat.png" },
  { id: 6, name: "Sweet Vermicelli", category: "Vermicelli", image: "/vermicelli.png" },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="p-6">
      {/* Filter Bar */}
      <div className="flex gap-4 mb-6 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg transition ${
              selectedCategory === cat
                ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="p-4 rounded-xl shadow-lg bg-white/20 backdrop-blur-md border border-yellow-400 hover:scale-105 transition transform"
          >
            <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-4" />
            <h3 className="text-lg font-bold text-yellow-700">{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

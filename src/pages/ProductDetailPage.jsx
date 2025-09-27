import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { detailedProducts } from "../data/detailedProducts.js";

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    const productData = detailedProducts.products[id];
    if (productData) {
      setProduct(productData);

      // Get related products
      const related =
        productData.relatedProducts
          ?.map((relatedId) => detailedProducts.products[relatedId])
          .filter(Boolean) || [];
      setRelatedProducts(related);

      setLoading(false);
    } else {
      navigate("/products");
    }
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-yellow-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-yellow-900 flex items-center justify-center">
        <div className="text-white text-xl">Product not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-yellow-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-4 md:mb-6 lg:mb-8">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-white/70 text-sm md:text-base">
            <button
              onClick={() => navigate("/")}
              className="hover:text-yellow-400 transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <button
              onClick={() => navigate("/products")}
              className="hover:text-yellow-400 transition-colors cursor-pointer"
            >
              Products
            </button>
            <span>/</span>
            <span className="text-yellow-400  xs:max-w-[160px] sm:max-w-xs md:max-w-none">
              {product.name}
            </span>
          </div>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-yellow-400/20">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-contain"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {product.name}
              </h1>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-400"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-white/80">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-yellow-400">
                  Rs. {product.price}.00 PKR
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-xl text-white/60 line-through">
                    Rs. {product.originalPrice}.00 PKR
                  </span>
                )}
              </div>
            </div>

            {/* Product Features */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-yellow-400/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-white">
                    {product.happyCustomers} Happy customers
                  </span>
                </div>

                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-white">{feature}</span>
                  </div>
                ))}

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <span className="text-white">{product.deliveryTime}</span>
                </div>
              </div>
            </div>
            <div className="mb-16">
              <div className="flex justify-center">
                <a
                  href={product.shopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold text-lg rounded-2xl hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
                >
                  <svg
                    className="w-6 h-6 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM8 15a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Shop Now Button */}

        {/* Product Description */}
        <div className="mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-yellow-400/20">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">
              Product Description
            </h2>
            <p className="text-white/90 leading-relaxed mb-6">
              {product.description}
            </p>
            <p className="text-white/80 leading-relaxed">
              {product.longDescription}
            </p>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-yellow-400/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Ingredients */}
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">
                  Ingredients
                </h3>
                <ul className="space-y-2">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-white/80 flex items-center">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nutritional Info */}
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">
                  Nutritional Information
                </h3>
                <div className="space-y-2">
                  {Object.entries(product.nutritionalInfo).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between text-white/80"
                      >
                        <span className="capitalize">
                          {key.replace(/([A-Z])/g, " $1")}
                        </span>
                        <span className="font-semibold">{value}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Cooking Instructions */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">
                Cooking Instructions
              </h3>
              <ol className="space-y-2">
                {product.cookingInstructions.map((instruction, index) => (
                  <li key={index} className="text-white/80 flex items-start">
                    <span className="bg-yellow-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </span>
                    {instruction}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.slice(0, 4).map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl group cursor-pointer"
                  onClick={() => navigate(`/products/${relatedProduct.id}`)}
                >
                  <div className="w-full h-48 bg-white/5 rounded-xl mb-4 flex items-center justify-center overflow-hidden group-hover:bg-white/10 transition-all">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-white group-hover:text-yellow-300 transition-colors line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-2xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors">
                      Rs. {relatedProduct.price}
                    </p>
                    <button className="w-full py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-xl hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

import { useState, useRef, useEffect, useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Dish1 from "../assets/pasta.png";
import Dish2 from "../assets/images/noodles-plate.png";
import Dish3 from "../assets/pasta.png";
import FloatingIngredients from "./FloatingIngredients";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: Dish1,
    recipeTitle: "Chef's Signature Pasta",
    recipeText:
      "Hand-tossed pasta with roasted tomatoes, parmesan curls, and fresh basil — a heartwarming dish for all occasions.",
    cta: "View Recipe",
  },
  {
    image: Dish2,
    recipeTitle: "Hot Noodles Delight",
    recipeText:
      "Crispy vegetables, silky noodles and a spicy sesame glaze. Built for quick dinners that still feel special.",
    cta: "Try Now",
  },
  {
    image: Dish3,
    recipeTitle: "Garden Herb Salad",
    recipeText:
      "Colorful greens tossed with citrus vinaigrette, toasted seeds, and micro-herbs — perfect as a side or a light main.",
    cta: "Learn More",
  },
];

export default function BannerPremium() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const count = slides.length;
  const startXRef = useRef(null);
  const startYRef = useRef(null);
  const timerRef = useRef(null);

  const prev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIndex((i) => (i === 0 ? count - 1 : i - 1));
    setTimeout(() => setIsTransitioning(false), 800);
  }, [count, isTransitioning]);

  const next = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIndex((i) => (i === count - 1 ? 0 : i + 1));
    setTimeout(() => setIsTransitioning(false), 800);
  }, [count, isTransitioning]);

  const goTo = useCallback((i) => {
    if (isTransitioning || i === index) return;
    setIsTransitioning(true);
    setIndex(i);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [index, isTransitioning]);

  // Enhanced autoplay with pause/resume functionality
  const startAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isPaused) {
        setIndex((i) => (i === count - 1 ? 0 : i + 1));
      }
    }, 4000);
  }, [count, isPaused]);

  const stopAutoplay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  // Enhanced touch/swipe handling
  const onPointerDown = useCallback((e) => {
    setIsPaused(true);
    const clientX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    const clientY = e.clientY ?? e.touches?.[0]?.clientY ?? 0;
    startXRef.current = clientX;
    startYRef.current = clientY;
  }, []);

  const onPointerUp = useCallback((e) => {
    const endX = e.clientX ?? e.changedTouches?.[0]?.clientX ?? 0;
    const endY = e.clientY ?? e.changedTouches?.[0]?.clientY ?? 0;
    
    if (startXRef.current !== null && startYRef.current !== null) {
      const deltaX = startXRef.current - endX;
      const deltaY = Math.abs(startYRef.current - endY);
      
      // Only trigger swipe if horizontal movement is greater than vertical
      if (Math.abs(deltaX) > 80 && Math.abs(deltaX) > deltaY) {
        deltaX > 0 ? next() : prev();
      }
    }
    
    startXRef.current = null;
    startYRef.current = null;
    setTimeout(() => setIsPaused(false), 1000);
  }, [next, prev]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section className="relative w-full  bg-gradient-to-r from-yellow-50 via-white to-orange-50 py-16 overflow-hidden">
      <FloatingIngredients />
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-stretch px-6 md:px-12 gap-8 z-10">
        {/* Fixed Left Controller */}
        <div className="w-full translate-y-1/2 md:w-1/5 flex flex-col pr-6 self-start">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Recipes <span className="text-[#FDC400]">You Love</span>
            </h2>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              Explore premium dishes designed by our chefs.
            </p>
          </div>

          {/* Arrows closer to text */}
          <div className="flex gap-3 mt-8 mb-44 sm:mb-0">
            <button
              onClick={prev}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 text-gray-800 hover:bg-yellow-100"
            >
              <FaArrowLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 text-gray-800 hover:bg-yellow-100"
            >
              <FaArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Sliding Content */}
        <div
          className="w-full md:w-4/5 relative overflow-hidden rounded-2xl"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onTouchStart={(e) => (startXRef.current = e.touches[0].clientX)}
          onTouchEnd={onPointerUp}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((s, i) => (
              <div
                key={i}
                className="min-w-full flex flex-col md:flex-row overflow-hidden"
              >
                {/* Image */}
                <motion.div
                  key={`img-${index}`}
                  className="w-full md:w-1/2 h-64 md:h-auto"
                >
                  <img
                    src={s.image}
                    alt={s.recipeTitle}
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                {/* Text */}
                <motion.div
                  key={`text-${index}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="w-full md:w-1/2 p-8 flex flex-col justify-center"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {s.recipeTitle}
                  </h3>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {s.recipeText}
                  </p>

                  {/* CTA + dots */}
                  <motion.div
                    key={`cta-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-6 flex items-center gap-4"
                  >
                    <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-full shadow-md hover:scale-105 transition-transform">
                      {s.cta}
                    </button>
                    {/* dots */}
                    <div className="flex gap-2">
                      {slides.map((_, j) => (
                        <button
                          key={j}
                          onClick={() => goTo(j)}
                          className={`w-2.5 h-2.5 rounded-full ${
                            j === index ? "bg-yellow-500" : "bg-gray-300"
                          }`}
                        ></button>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-center gap-3 mt-6">
          <button
            onClick={prev}
            disabled={isTransitioning}
            className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-800 hover:bg-yellow-100 hover:border-yellow-400 transition-all duration-300 disabled:opacity-50"
          >
            <FaArrowLeft size={16} />
          </button>
          <button
            onClick={next}
            disabled={isTransitioning}
            className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-800 hover:bg-yellow-100 hover:border-yellow-400 transition-all duration-300 disabled:opacity-50"
          >
            <FaArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

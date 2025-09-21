import { useState, useRef, useEffect, useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Dish1 from "../assets/pasta.png";
import Dish2 from "../assets/images/noodles-plate.png";
import Dish3 from "../assets/pasta.png";

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
    setTimeout(() => setIsTransitioning(false), 600);
  }, [count, isTransitioning]);

  const next = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIndex((i) => (i === count - 1 ? 0 : i + 1));
    setTimeout(() => setIsTransitioning(false), 600);
  }, [count, isTransitioning]);

  const goTo = useCallback(
    (i) => {
      if (isTransitioning || i === index) return;
      setIsTransitioning(true);
      setIndex(i);
      setTimeout(() => setIsTransitioning(false), 600);
    },
    [index, isTransitioning]
  );

  // Smooth autoplay
  const startAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isPaused) {
        setIndex((i) => (i === count - 1 ? 0 : i + 1));
      }
    }, 5000);
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

  const onPointerUp = useCallback(
    (e) => {
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
      setTimeout(() => setIsPaused(false), 500);
    },
    [next, prev]
  );

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section className="relative w-full bg-white md:py-16 overflow-hidden">
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-stretch px-6 md:px-12 sm:gap-8 z-10">
        {/* Fixed Left Controller */}
        <div className="w-full translate-y-12 md:translate-y-1/2 md:w-1/5 flex flex-col pr-6 self-start">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Recipes <span className="text-[#FDC400]">You Love</span>
            </h2>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              Explore premium dishes designed by our chefs.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3 mt-8 mb-12 sm:mb-0">
            <button
              onClick={prev}
              disabled={isTransitioning}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 text-gray-800 hover:bg-yellow-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              <FaArrowLeft size={18} />
            </button>
            <button
              onClick={next}
              disabled={isTransitioning}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 text-gray-800 hover:bg-yellow-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
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
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="flex transition-transform duration-600 ease-out"
            style={{ 
              transform: `translateX(-${index * 100}%)`,
              willChange: 'transform'
            }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="min-w-full flex flex-col md:flex-row overflow-hidden bg-white shadow-lg"
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2 h-80 md:h-auto relative overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.recipeTitle}
                    className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                  <div className={`transition-all duration-500 ${i === index ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-2'}`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {slide.recipeTitle}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {slide.recipeText}
                    </p>

                    {/* CTA and Navigation Dots */}
                    <div className="flex items-center gap-4">
                      <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                        {slide.cta}
                      </button>
                      
                      {/* Navigation Dots */}
                      <div className="flex gap-2">
                        {slides.map((_, j) => (
                          <button
                            key={j}
                            onClick={() => goTo(j)}
                            disabled={isTransitioning}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              j === index 
                                ? "bg-yellow-500 scale-110" 
                                : "bg-gray-300 hover:bg-gray-400"
                            } disabled:cursor-not-allowed`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

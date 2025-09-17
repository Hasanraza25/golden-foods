import { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Dish1 from "../assets/pasta.png";
import Dish2 from "../assets/images/noodles-plate.png";
import Dish3 from "../assets/pasta.png";
import FloatingIngredients from "./FloatingIngredients";

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
  const count = slides.length;
  const startXRef = useRef(null);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(count - 1, i + 1));
  const goTo = (i) => setIndex(i);

  // swipe
  const onPointerDown = (e) => {
    startXRef.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
  };
  const onPointerUp = (e) => {
    const endX = e.clientX ?? e.changedTouches?.[0]?.clientX ?? 0;
    const delta = startXRef.current - endX;
    if (Math.abs(delta) > 50) delta > 0 ? next() : prev();
    startXRef.current = null;
  };

  return (
    <section className="relative w-full bg-gradient-to-r from-yellow-50 via-white to-orange-50 py-16 overflow-hidden">
      <FloatingIngredients />
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-stretch px-6 md:px-12 gap-8 z-10">
        {/* Fixed Left Controller */}
        <div className="w-full translate-y-1/2 md:w-1/5 flex flex-col pr-6 self-start">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Recipes <span className="text-yellow-600">You Love</span>
            </h2>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              Explore premium dishes designed by our chefs.
            </p>
          </div>

          {/* Arrows closer to text */}
          <div className="flex gap-3 mt-8">
            <button
              onClick={prev}
              disabled={index === 0}
              className={`p-3 rounded-full border ${
                index === 0
                  ? "text-gray-400 border-gray-200 cursor-not-allowed bg-white"
                  : "text-gray-800 border-gray-300 hover:bg-yellow-100"
              }`}
            >
              <FaArrowLeft size={16} />
            </button>
            <button
              onClick={next}
              disabled={index === count - 1}
              className={`p-3 rounded-full border ${
                index === count - 1
                  ? "text-gray-400 border-gray-200 cursor-not-allowed bg-white"
                  : "text-gray-800 border-gray-300 hover:bg-yellow-100"
              }`}
            >
              <FaArrowRight size={16} />
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
                <div className="w-full md:w-1/2 h-64 md:h-auto">
                  <img
                    src={s.image}
                    alt={s.recipeTitle}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {s.recipeTitle}
                  </h3>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {s.recipeText}
                  </p>
                  <div className="mt-6 flex items-center gap-4">
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

// import { useState, useRef, useEffect } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Import your images
// import Dish1 from "../assets/pasta.png";
// import Dish2 from "../assets/images/noodles-plate.png";
// import Dish3 from "../assets/pasta.png";

// // Ingredient decorations
// import NoodleBg from "../assets/curvenoodle.png";
// import TomatoBg from "../assets/tomoto.png";

// gsap.registerPlugin(ScrollTrigger);

// const slides = [
//   {
//     image: Dish1,
//     recipeTitle: "Chef's Signature Pasta",
//     recipeText:
//       "Hand-tossed pasta with roasted tomatoes, parmesan curls, and fresh basil — a heartwarming dish for all occasions.",
//     cta: "View Recipe",
//   },
//   {
//     image: Dish2,
//     recipeTitle: "Hot Noodles Delight",
//     recipeText:
//       "Crispy vegetables, silky noodles and a spicy sesame glaze. Built for quick dinners that still feel special.",
//     cta: "Try Now",
//   },
//   {
//     image: Dish3,
//     recipeTitle: "Garden Herb Salad",
//     recipeText:
//       "Colorful greens tossed with citrus vinaigrette, toasted seeds, and micro-herbs — perfect as a side or a light main.",
//     cta: "Learn More",
//   },
// ];

// export default function BannerPremium() {
//   const [index, setIndex] = useState(0);
//   const count = slides.length;
//   const startXRef = useRef(null);

//   const prev = () => setIndex((i) => Math.max(0, i - 1));
//   const next = () => setIndex((i) => Math.min(count - 1, i + 1));
//   const goTo = (i) => setIndex(i);

//   // swipe handling
//   const onPointerDown = (e) => {
//     startXRef.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
//   };
//   const onPointerUp = (e) => {
//     const endX = e.clientX ?? e.changedTouches?.[0]?.clientX ?? 0;
//     const delta = startXRef.current - endX;
//     if (Math.abs(delta) > 50) delta > 0 ? next() : prev();
//     startXRef.current = null;
//   };

//   // GSAP parallax effect
//   useEffect(() => {
//     gsap.utils.toArray(".parallax").forEach((el, i) => {
//       gsap.to(el, {
//         x: i % 2 === 0 ? 100 : -100, // alternate left/right
//         y: i % 2 === 0 ? -60 : 60,   // slight vertical
//         ease: "none",
//         scrollTrigger: {
//           trigger: el,
//           start: "top bottom",
//           scrub: true, // follows scroll
//         },
//       });
//     });
//   }, []);

//   return (
//     <section className="relative w-full bg-gradient-to-r from-yellow-50 via-white to-orange-50 py-16 overflow-hidden">
//       {/* Background Ingredients */}
//       <img
//         src={NoodleBg}
//         alt="noodle"
//         className="parallax absolute top-10 -left-20 w-40 opacity-50 pointer-events-none"
//       />
//       <img
//         src={TomatoBg}
//         alt="tomato"
//         className="parallax absolute bottom-16 -right-16 w-28 opacity-50 pointer-events-none"
//       />

//       {/* Main content */}
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch px-6 md:px-12 gap-8 relative z-10">
//         {/* Fixed Left Controller */}
//         <div className="w-full md:w-1/5 flex flex-col pr-6 self-start">
//           <div>
//             <h2 className="text-3xl font-extrabold text-gray-900">
//               Recipes <span className="text-yellow-600">You Love</span>
//             </h2>
//             <p className="mt-2 text-gray-600 text-sm leading-relaxed">
//               Explore premium dishes designed by our chefs.
//             </p>
//           </div>

//           {/* Arrows closer to text */}
//           <div className="flex gap-3 mt-8">
//             <button
//               onClick={prev}
//               disabled={index === 0}
//               className={`p-3 rounded-full border ${
//                 index === 0
//                   ? "text-gray-400 border-gray-200 cursor-not-allowed bg-white"
//                   : "text-gray-800 border-gray-300 hover:bg-yellow-100"
//               }`}
//             >
//               <FaArrowLeft size={16} />
//             </button>
//             <button
//               onClick={next}
//               disabled={index === count - 1}
//               className={`p-3 rounded-full border ${
//                 index === count - 1
//                   ? "text-gray-400 border-gray-200 cursor-not-allowed bg-white"
//                   : "text-gray-800 border-gray-300 hover:bg-yellow-100"
//               }`}
//             >
//               <FaArrowRight size={16} />
//             </button>
//           </div>
//         </div>

//         {/* Sliding Content */}
//         <div
//           className="w-full md:w-4/5 relative overflow-hidden rounded-2xl shadow-lg"
//           onPointerDown={onPointerDown}
//           onPointerUp={onPointerUp}
//           onTouchStart={(e) => (startXRef.current = e.touches[0].clientX)}
//           onTouchEnd={onPointerUp}
//         >
//           <div
//             className="flex transition-transform duration-700 ease-in-out"
//             style={{ transform: `translateX(-${index * 100}%)` }}
//           >
//             {slides.map((s, i) => (
//               <div
//                 key={i}
//                 className="min-w-full flex flex-col md:flex-row overflow-hidden"
//               >
//                 {/* Image */}
//                 <div className="w-full md:w-1/2 h-72 md:h-auto">
//                   <img
//                     src={s.image}
//                     alt={s.recipeTitle}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Text */}
//                 <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-white">
//                   <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
//                     {s.recipeTitle}
//                   </h3>
//                   <p className="mt-4 text-gray-600 leading-relaxed">
//                     {s.recipeText}
//                   </p>
//                   <div className="mt-6 flex items-center gap-4">
//                     <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-full shadow-md hover:scale-105 transition-transform">
//                       {s.cta}
//                     </button>
//                     {/* dots */}
//                     <div className="flex gap-2">
//                       {slides.map((_, j) => (
//                         <button
//                           key={j}
//                           onClick={() => goTo(j)}
//                           className={`w-2.5 h-2.5 rounded-full ${
//                             j === index ? "bg-yellow-500" : "bg-gray-300"
//                           }`}
//                         ></button>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

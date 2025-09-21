import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pastaVideo from "../assets/pasta-on-plate-with-smoke-no-masla-3.mp4";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const CookAndEat = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for sequential animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      // 1. First animate the main heading
      tl.fromTo(
        ".main-title",
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
        }
      )
        // 2. Then animate the subtitle
        .fromTo(
          ".subtitle",
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        )
        // 3. Animate decorative elements
        .fromTo(
          ".decorative-line",
          {
            scaleX: 0,
            opacity: 0,
          },
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.currentTime = 0;
      video.play().catch(console.log);
    }
  };

  const handleVideoEnd = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play().catch(console.log);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 lg:py-28 xl:py-36 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10">
        {/* Main Title Section - Fully Responsive */}
        <div className="text-center mb-8">
          <h2 className="main-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Cook &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">
              Eat
            </span>
          </h2>
          <p className="subtitle text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Experience the magic of perfectly cooked pasta with aromatic steam
            rising from every plate
          </p>
          <div className="decorative-line mt-4 sm:mt-6 md:mt-8 flex justify-center">
            <div className="w-16 sm:w-20 md:w-24 lg:w-32 xl:w-40 h-0.5 sm:h-1 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 rounded-full"></div>
          </div>
        </div>

        {/* Video Section - Fully Responsive */}
        <div className="w-full flex justify-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
            <video
              ref={videoRef}
              onLoadedData={handleVideoLoad}
              onEnded={handleVideoEnd}
              className="w-full h-auto object-contain mx-auto block"
              muted
              playsInline
              preload="metadata"
              style={{
                backgroundColor: "transparent",
                maxHeight: "50vh sm:60vh md:65vh lg:70vh xl:75vh",
                opacity: 1,
                transform: "none",
                filter: "none",
              }}
            >
              <source src={pastaVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Bottom Quote Section - Fully Responsive */}
        <div className="text-center px-2 sm:px-4 md:px-6 lg:px-8">
          <blockquote className="text-lg sm:text-xl md:text-2xl font-light text-gray-700 italic max-w-4xl mx-auto leading-relaxed">
            "Every plate tells a story, every steam carries the aroma of
            passion, and every bite delivers the promise of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 font-medium">
              perfection
            </span>
            ."
          </blockquote>
          <cite className="block mt-4 sm:mt-6 text-sm sm:text-base text-gray-500 font-medium">
            - Golden Pvt Ltd 
          </cite>
        </div>
      </div>
    </section>
  );
};

export default CookAndEat;

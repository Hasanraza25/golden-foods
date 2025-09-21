import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Factory, Award, Globe, Users } from "lucide-react";

// Import images
import Image06 from "../assets/aboutus.png";
import Image18 from "../assets/images/new_images/innovation.png";
import pastaImg from "../assets/images/single-pasta.png";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const HeritageInnovation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("heritage");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [counters, setCounters] = useState({
    years: 0,
    products: 0,
    towns: 0,
    teaYears: 0,
  });
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  // Pasta refs for floating animations
  const pasta1Ref = useRef(null);
  const pasta4Ref = useRef(null);

  const stats = [
    { key: "years", label: "Years of Excellence", target: 25, suffix: "+" },
    { key: "products", label: "Product SKUs", target: 40, suffix: "+" },
    { key: "towns", label: "Towns Served", target: 200, suffix: "+" },
    { key: "teaYears", label: "Years Tea Factory", target: 67, suffix: "" },
  ];

  // Fast and smooth tab transition function
  const handleTabChange = (newTab) => {
    if (newTab === activeTab || isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Create timeline for fast smooth transition
    const tl = gsap.timeline();

    // Quick slide out current content
    tl.to([contentRef.current, imageRef.current], {
      opacity: 0,
      y: -20,
      duration: 0.15,
      ease: "power2.in"
    })
    // Change content immediately when hidden
    .call(() => {
      setActiveTab(newTab);
    })
    // Quick slide in new content
    .fromTo([contentRef.current, imageRef.current], 
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.2,
        ease: "power2.out",
        stagger: 0.05
      }
    )
    // Complete transition
    .call(() => {
      setIsTransitioning(false);
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pasta floating animations
      const pasta1 = pasta1Ref.current;
      const pasta4 = pasta4Ref.current;

      // Set initial states for pasta
      gsap.set([pasta1, pasta4], {
        opacity: 0.7,
        scale: 1,
        rotation: 0,
      });

      // Pasta entrance animation
      gsap.to([pasta1, pasta4], {
        opacity: 0.9,
        duration: 0.8,
        ease: "power2.out",
        delay: 1,
      });

      // Pasta 1 - Left side of heading - Gentle floating with rotation
      gsap.to(pasta1, {
        y: "-=15",
        rotation: 360,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(pasta1, {
        x: "+=8",
        duration: 3.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 0.5,
      });

      // Pasta 4 - Right side of heading - Figure-8 style movement
      gsap.to(pasta4, {
        y: "+=15",
        rotation: 180,
        duration: 3.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 2,
      });

      gsap.to(pasta4, {
        x: "-=8",
        duration: 2.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 0.3,
      });

      // Header Animation - Only on downward scroll
      gsap.fromTo(
        sectionRef.current.querySelector(".header-content"),
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      // Tab Navigation Animation
      gsap.fromTo(
        sectionRef.current.querySelector(".tab-navigation"),
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      // Initial Content Animation
      gsap.fromTo(
        contentRef.current,
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current.querySelector(".main-content"),
            start: "top 75%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      // Initial Image Animation
      gsap.fromTo(
        imageRef.current,
        {
          x: 100,
          opacity: 0,
          scale: 0.9,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current.querySelector(".main-content"),
            start: "top 75%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      // Stats Animation
      gsap.fromTo(
        sectionRef.current.querySelectorAll(".stat-card"),
        {
          y: 50,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current.querySelector(".stats-section"),
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
            onEnter: () => setIsVisible(true),
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        setTimeout(() => {
          let current = 0;
          const increment = stat.target / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= stat.target) {
              current = stat.target;
              clearInterval(timer);
            }
            setCounters((prev) => ({
              ...prev,
              [stat.key]: Math.floor(current),
            }));
          }, 30);
        }, index * 200);
      });
    }
  }, [isVisible]);

  const heritageContent = {
    title: "Our Heritage & Legacy",
    subtitle: "Excellence Since 1999",
    description:
      "Leading food manufacturer specializing in premium Macaroni, Pasta, Spaghetti, Vermicelli, and Tea products with nationwide distribution.",
    features: [
      "Premium food manufacturing since 1999",
      "67+ years tea industry expertise",
      "200+ towns distribution network",
      "Top-tier quality standards",
    ],
    image: Image06,
  };

  const innovationContent = {
    title: "Innovation & Quality Excellence",
    subtitle: "Leading Italian Foods Market",
    description:
      "Innovative approach delivering 40+ premium Italian food SKUs with state-of-the-art manufacturing and natural Khas Masala Chai.",
    features: [
      "40+ premium Italian food SKUs",
      "Complete supply chain operations",
      "Natural Khas Masala Chai",
      "International quality standards",
    ],
    image: Image18,
  };

  const currentContent =
    activeTab === "heritage" ? heritageContent : innovationContent;

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-16 lg:py-20 xl:py-24 bg-white overflow-hidden"
    >
      {/* Floating Pasta Elements - Only 2 Pasta around heading */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        {/* Pasta 1 - Left side of heading */}
        <div
          ref={pasta1Ref}
          className="absolute top-12 left-4 md:top-16 md:left-12 lg:top-20 lg:left-20 xl:top-24 xl:left-28"
          style={{ zIndex: 1 }}
        >
          <img
            src={pastaImg}
            alt="Floating Pasta"
            className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 object-contain"
            style={{
              filter:
                "drop-shadow(0 4px 8px rgba(220, 38, 38, 0.25)) drop-shadow(0 2px 4px rgba(251, 191, 36, 0.15))",
              willChange: "transform",
            }}
          />
          <div className="absolute inset-0 bg-gradient-radial from-red-400/10 via-transparent to-transparent rounded-full blur-lg scale-125"></div>
        </div>

        {/* Pasta 4 - Right side of heading */}
        <div
          ref={pasta4Ref}
          className="absolute top-12 right-4 md:top-16 md:right-12 lg:top-20 lg:right-20 xl:top-24 xl:right-28"
          style={{ zIndex: 1 }}
        >
          <img
            src={pastaImg}
            alt="Floating Pasta"
            className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 object-contain"
            style={{
              filter:
                "drop-shadow(0 4px 8px rgba(251, 191, 36, 0.25)) drop-shadow(0 2px 4px rgba(220, 38, 38, 0.15))",
              willChange: "transform",
            }}
          />
          <div className="absolute inset-0 bg-gradient-radial from-yellow-400/10 via-transparent to-transparent rounded-full blur-lg scale-125"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="header-content text-center mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-red-600 mb-3 md:mb-4 lg:mb-6">
            Golden Pvt Ltd
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
            Pakistan's trusted food manufacturer delivering premium quality
            products with complete supply chain excellence.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="tab-navigation flex justify-center mb-10 md:mb-12 px-4">
          <div className="bg-gray-100 backdrop-blur-lg rounded-full p-1 shadow-lg border border-gray-200 w-full max-w-lg md:max-w-none md:w-auto">
            <div className="flex w-full md:w-auto">
              <button
                onClick={() => handleTabChange("heritage")}
                disabled={isTransitioning}
                className={`flex-1 md:flex-none px-3 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 rounded-full font-semibold transition-all duration-200 text-xs md:text-sm lg:text-base text-center ${
                  activeTab === "heritage"
                    ? "bg-gradient-to-r from-red-600 to-yellow-500 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
                } ${isTransitioning ? "opacity-70" : ""}`}
              >
                <span className="block md:inline">Our Heritage</span>
              </button>
              <button
                onClick={() => handleTabChange("innovation")}
                disabled={isTransitioning}
                className={`flex-1 md:flex-none px-3 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 rounded-full font-semibold transition-all duration-200 text-xs md:text-sm lg:text-base text-center ${
                  activeTab === "innovation"
                    ? "bg-gradient-to-r from-red-600 to-yellow-500 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
                } ${isTransitioning ? "opacity-70" : ""}`}
              >
                <span className="block md:inline">Innovation & Quality</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-stretch mb-12 md:mb-16">
          {/* Content Side */}
          <div ref={contentRef} className="content-side flex order-2 lg:order-1">
            <div className="bg-gray-50 backdrop-blur-lg rounded-2xl p-4 md:p-6 lg:p-8 shadow-xl border border-gray-200 w-full flex flex-col">
              <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-red-600 mb-3 md:mb-4">
                {currentContent.title}
              </h3>
              <h4 className="text-base md:text-lg lg:text-xl text-gray-700 font-semibold mb-4 md:mb-6">
                {currentContent.subtitle}
              </h4>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8 flex-grow">
                {currentContent.description}
              </p>

              {/* Features List */}
              <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                {currentContent.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex-shrink-0" />
                    <span className="text-gray-700 text-xs md:text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Core Values Section */}
              <div className="mt-auto p-2 md:p-3 bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl border border-red-200">
                <h5 className="text-sm md:text-base font-semibold text-red-600 mb-1">
                  Our Mission
                </h5>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Delivering premium FMCG products with lasting partnerships
                  nationwide.
                </p>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div ref={imageRef} className="image-side relative flex order-1 lg:order-2">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img
                src={currentContent.image}
                alt={currentContent.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 min-h-[250px] md:min-h-[300px] lg:min-h-[350px] xl:min-h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              {/* Floating Badge */}
              <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-gradient-to-r from-red-600 to-yellow-500 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold shadow-lg">
                {activeTab === "heritage" ? "Since 1999" : "40+ SKUs"}
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Counter */}
        <div className="stats-section grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.key}
              className="stat-card bg-gray-50 backdrop-blur-lg rounded-2xl p-4 md:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-red-300"
            >
              <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500 mb-1 md:mb-2">
                {counters[stat.key]}
                {stat.suffix}
              </div>
              <div className="text-xs md:text-sm lg:text-base text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeritageInnovation;

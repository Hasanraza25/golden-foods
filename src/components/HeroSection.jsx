import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Import all plate images
import blankPlate from "../assets/images/blank-plate.png";
import pastaPlate from "../assets/images/pasta-plate.png";
import noodlesPlate from "../assets/images/noodles-plate.png";
import hotNoodlesPlate from "../assets/images/hot-noodles-plate.png";
import noodlesPastaMixPlate from "../assets/images/noodles-pasta-mix-plate.png";
import whiteNoodlesPlate from "../assets/images/white-chowmein-plate.png";

export default function Hero() {
  const plateRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const heroRef = useRef(null);
  const smokeRef = useRef(null);
  const strokeBorderRef = useRef(null);
  const hotSmokeRef = useRef(null);

  const plates = [
    { src: blankPlate, name: "Blank Plate", hasSmoke: false },
    { src: pastaPlate, name: "Golden Pasta", hasSmoke: true },
    { src: noodlesPlate, name: "Premium Noodles", hasSmoke: true },
    { src: whiteNoodlesPlate, name: "White Chowmein", hasSmoke: true },
    { src: noodlesPastaMixPlate, name: "Pasta Mix", hasSmoke: true },
    { src: hotNoodlesPlate, name: "Hot Noodles", hasSmoke: true },
  ];

  useEffect(() => {
    const plate = plateRef.current;
    const text = textRef.current;
    const button = buttonRef.current;
    const hero = heroRef.current;
    const smoke = smokeRef.current;
    const strokeBorder = strokeBorderRef.current;
    const hotSmoke = hotSmokeRef.current;

    // Set initial states with smoother properties
    gsap.set(plate, { 
      rotation: 0, 
      scale: 1, 
      opacity: 0, 
      y: 30, 
      filter: "blur(0px) drop-shadow(0 25px 50px rgba(220,38,38,0.4))",
      width: "100%",
      height: "100%",
      transformOrigin: "center center"
    });
    gsap.set(text, { x: -30, opacity: 0 });
    gsap.set(button, { y: 20, opacity: 0, scale: 0.95 });
    gsap.set(smoke, { opacity: 0, scale: 0 });
    gsap.set(hotSmoke, { opacity: 0 });
    gsap.set(strokeBorder, { rotation: 0, opacity: 0 });

    // Smoother entrance animation
    const tl = gsap.timeline();
    
    tl.to(hero, { opacity: 1, duration: 0.6, ease: "power2.out" })
      .to(text, { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" })
      .to(button, { y: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.1)" }, "-=0.8")
      .to(strokeBorder, { opacity: 1, duration: 1, ease: "power2.out" }, "-=0.8")
      .to(plate, { opacity: 1, scale: 1, y: 0, duration: 1.4, ease: "power3.out" }, "-=1");

    // Ultra-smooth stroke border rotation
    gsap.to(strokeBorder, {
      rotation: -360,
      duration: 25,
      ease: "none",
      repeat: -1
    });

    // Buttery smooth continuous plate rotation
    const plateRotationTween = gsap.to(plate, {
      rotation: "+=360",
      duration: 120, // Slower for smoother feel
      repeat: -1,
      ease: "none"
    });

    // Enhanced transition smoke effect
    const createTransitionSmoke = () => {
      const smokeParticles = smoke.children;
      
      Array.from(smokeParticles).forEach((particle, index) => {
        gsap.set(particle, { 
          opacity: 0, 
          scale: 0,
          x: gsap.utils.random(-15, 15),
          y: gsap.utils.random(-15, 15),
          rotation: gsap.utils.random(0, 360)
        });
        
        gsap.to(particle, {
          opacity: gsap.utils.random(0.7, 1),
          scale: gsap.utils.random(1.2, 2),
          x: gsap.utils.random(-40, 40),
          y: gsap.utils.random(-40, 40),
          rotation: gsap.utils.random(180, 540),
          duration: 0.8,
          ease: "power2.out",
          delay: index * 0.04
        });
        
        gsap.to(particle, {
          opacity: 0,
          scale: 0,
          duration: 0.4,
          delay: 0.6 + (index * 0.04),
          ease: "power2.in"
        });
      });
    };

    // Enhanced hot smoke effect
    const createHotSmoke = (show = true) => {
      if (!show) {
        gsap.to(hotSmoke.children, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out"
        });
        return;
      }

      const hotSmokeParticles = hotSmoke.children;
      
      Array.from(hotSmokeParticles).forEach((particle, index) => {
        const animateParticle = () => {
          gsap.set(particle, {
            opacity: 0,
            scale: gsap.utils.random(0.4, 0.7),
            x: gsap.utils.random(-12, 12),
            y: 0,
            rotation: gsap.utils.random(0, 360)
          });

          gsap.to(particle, {
            opacity: gsap.utils.random(0.3, 0.6),
            y: gsap.utils.random(-70, -100),
            x: gsap.utils.random(-20, 20),
            scale: gsap.utils.random(1, 1.4),
            rotation: gsap.utils.random(180, 540),
            duration: gsap.utils.random(3, 4),
            ease: "power1.out",
            delay: index * 0.25,
            onComplete: () => {
              gsap.to(particle, {
                opacity: 0,
                scale: 0,
                duration: 0.5,
                ease: "power2.in",
                onComplete: animateParticle
              });
            }
          });
        };
        
        animateParticle();
      });
    };
    
    // Ultra-smooth plate animation cycle
    let currentPlateIndex = 0;
    let isAnimating = false;
    let continuousRotationTween = null;
    
    const startContinuousRotation = () => {
      if (continuousRotationTween) {
        continuousRotationTween.kill();
      }
      
      const currentRotation = gsap.getProperty(plate, "rotation");
      continuousRotationTween = gsap.to(plate, {
        rotation: currentRotation + 360,
        duration: 120,
        repeat: -1,
        ease: "none"
      });
    };
    
    const changeSlide = () => {
      if (isAnimating) return;
      isAnimating = true;
      
      // Kill the continuous rotation
      if (continuousRotationTween) {
        continuousRotationTween.kill();
      }
      
      const currentRotation = gsap.getProperty(plate, "rotation");
      
      // Fast rotation with proper completion handling
      gsap.to(plate, {
        rotation: currentRotation + 720,
        duration: 1.4,
        ease: "power2.inOut",
        onUpdate: function() {
          const progress = this.progress();
          if (progress > 0.15 && progress < 0.85) {
            const blurAmount = Math.sin((progress - 0.15) / 0.7 * Math.PI) * 4;
            plate.style.filter = `blur(${blurAmount}px) drop-shadow(0 25px 50px rgba(220,38,38,0.4))`;
          }
        },
        onComplete: () => {
          gsap.to(plate, {
            filter: "blur(0px) drop-shadow(0 25px 50px rgba(220,38,38,0.4))",
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => {
              // Restart continuous rotation from current position
              startContinuousRotation();
              isAnimating = false;
            }
          });
        }
      });
      
      gsap.delayedCall(0.7, () => {
        const nextIndex = (currentPlateIndex + 1) % plates.length;
        const nextPlate = plates[nextIndex];
        
        createTransitionSmoke();
        
        plate.src = nextPlate.src;
        plate.style.width = "100%";
        plate.style.height = "100%";
        
        createHotSmoke(nextPlate.hasSmoke);
        
        currentPlateIndex = nextIndex;
      });
    };
    
    // Start initial continuous rotation
    startContinuousRotation();
    
    const autoSlideInterval = setInterval(() => {
      changeSlide();
    }, 5000); // Exactly 5 seconds as requested
    
    gsap.delayedCall(3.5, changeSlide);
    
    return () => {
      clearInterval(autoSlideInterval);
      if (continuousRotationTween) {
        continuousRotationTween.kill();
      }
      gsap.killTweensOf([plate, text, button, hero, smoke, strokeBorder, hotSmoke]);
    };
  }, []);

  return (
    <>
      <section 
        ref={heroRef}
        className="relative min-h-screen overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-yellow-900 text-white flex flex-col"
        style={{ opacity: 0 }}
      >
        {/* Amazing Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-yellow-400/8 via-red-500/5 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 via-transparent to-yellow-900/20"></div>
          {/* Enhanced shadow effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10"></div>
        </div>

        {/* Removed Floating Elements section completely */}
        {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 bg-yellow-400/30 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div> */}

        {/* Main Content Container - Fixed for mobile */}
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 xl:px-16 py-8 sm:py-12 lg:py-16 xl:py-20 relative z-20 max-w-7xl mx-auto w-full gap-8 lg:gap-4">
          {/* Left Content - Mobile optimized */}
          <div className="w-full lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl flex-shrink-0 text-center lg:text-left order-1 lg:order-1" ref={textRef}>
            <div className="mb-4 sm:mb-6 lg:mb-8">
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-red-500/20 text-yellow-300 px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-sm border border-yellow-400/30">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                Premium Quality Since 1990
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 lg:mb-8">
              <span className="block text-white mb-1 sm:mb-2">Authentic</span>
              <span className="block bg-gradient-to-r from-yellow-400 via-red-400 to-yellow-500 bg-clip-text text-transparent">
                Golden Foods
              </span>
              
            </h1>
            
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 lg:mb-12 text-red-100 leading-relaxed max-w-lg lg:max-w-xl xl:max-w-2xl font-light mx-auto lg:mx-0">
              Crafting premium pasta, noodles, and traditional delicacies with 
              <span className="text-yellow-300 font-medium"> authentic recipes</span> and 
              <span className="text-yellow-300 font-medium"> finest ingredients</span> for over three decades.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center lg:justify-start" ref={buttonRef}>
              <button className="bg-gradient-to-r from-red-600 to-yellow-500 text-white px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-lg font-semibold hover:from-red-500 hover:to-yellow-400 transition-all duration-300 shadow-lg hover:shadow-red-500/25 hover:scale-105 transform text-sm sm:text-base lg:text-lg">
                Explore Products
              </button>
              <button className="border-2 border-yellow-400 text-yellow-300 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-red-900 transition-all duration-300 text-sm sm:text-base lg:text-lg">
                Our Heritage
              </button>
            </div>

            {/* Stats - Mobile optimized */}
            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-8 mt-8 sm:mt-10 lg:mt-16">
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-yellow-400">30+</div>
                <div className="text-xs sm:text-sm text-red-200 font-medium">Years Experience</div>
              </div>
              <div className="w-px h-6 sm:h-8 lg:h-12 bg-red-400/50"></div>
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-yellow-400">50+</div>
                <div className="text-xs sm:text-sm text-red-200 font-medium">Premium Products</div>
              </div>
              <div className="w-px h-6 sm:h-8 lg:h-12 bg-red-400/50"></div>
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-yellow-400">100K+</div>
                <div className="text-xs sm:text-sm text-red-200 font-medium">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Right Side - Plate Display - Mobile responsive */}
          <div className="relative flex items-center justify-center flex-shrink-0 order-2 lg:order-2 w-full lg:w-auto md:-ml-20">
            {/* Stroke Border - Increased sizes */}
            <div 
              ref={strokeBorderRef}
              className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] xl:w-[560px] xl:h-[560px] 2xl:w-[580px] 2xl:h-[580px] rounded-full flex items-center justify-center"
              style={{
                background: 'transparent',
                border: 'none',
                zIndex: 10
              }}
            >
              <svg className="w-full h-full" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="95"
                  fill="none"
                  stroke="url(#amazingGradient)"
                  strokeWidth="2"
                  strokeDasharray="8 4"
                  strokeLinecap="round"
                  opacity="0.8"
                />
                <defs>
                  <linearGradient id="amazingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="33%" stopColor="#dc2626" />
                    <stop offset="66%" stopColor="#fbbf24" />
                    <stop offset="100%" stopColor="#dc2626" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            {/* Transition Smoke - Updated for mobile */}
            <div ref={smokeRef} className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 13 }}>
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full blur-sm"
                  style={{
                    background: 'radial-gradient(circle, rgba(251,191,36,0.8) 0%, rgba(220,38,38,0.4) 50%, transparent 100%)'
                  }}
                />
              ))}
            </div>

            {/* Hot Food Smoke - Updated for mobile */}
            <div ref={hotSmokeRef} className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 14 }}>
              {[...Array(4)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full blur-sm"
                  style={{
                    background: 'radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(251,191,36,0.3) 40%, transparent 100%)'
                  }}
                />
              ))}
            </div>
            
            {/* Main Plate - Increased sizes */}
            <div className="relative w-[250px] h-[250px] md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px] xl:w-[440px] xl:h-[440px] 2xl:w-[530px] 2xl:h-[530px] flex items-center justify-center" style={{ zIndex: 12 }}>
              <img 
                ref={plateRef}
                src={blankPlate}
                alt="Golden Foods Premium Plate"
                className="object-contain w-full h-full"
                style={{
                  filter: 'drop-shadow(0 15px 35px rgba(220,38,38,0.4))'
                }}
              />
              
              {/* Enhanced Glow - Updated for mobile */}
              <div className="absolute inset-0 rounded-full bg-gradient-radial from-yellow-400/15 via-red-500/10 to-transparent blur-lg lg:blur-xl"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-radial from-yellow-400/10 via-transparent to-transparent blur-xl lg:blur-2xl scale-125 lg:scale-150"></div>
            </div>
          </div>
        </div>

        {/* Quality Indicators - Mobile responsive */}
        <div className="absolute -bottom-4 sm:bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 sm:gap-3 lg:gap-6 text-red-200 text-xs sm:text-sm">
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="hidden sm:inline">ISO Certified</span>
            <span className="sm:hidden">ISO</span>
          </div>
          <div className="w-px h-2 sm:h-3 lg:h-4 bg-red-400/50"></div>
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <span className="hidden sm:inline">HACCP Compliant</span>
            <span className="sm:hidden">HACCP</span>
          </div>
          <div className="w-px h-2 sm:h-3 lg:h-4 bg-red-400/50"></div>
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <span className="hidden sm:inline">Premium Quality</span>
            <span className="sm:hidden">Premium</span>
          </div>
        </div>
      </section>
    </>
  );
}

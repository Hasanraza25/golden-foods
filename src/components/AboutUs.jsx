import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import aboutImg from "../assets/aboutus.png";
import pastaImg from "../assets/images/single-pasta.png";

const AboutUs = () => {
  const sectionRef = useRef(null);
  const pasta1Ref = useRef(null);
  const pasta2Ref = useRef(null);
  const pasta3Ref = useRef(null);
  const pasta4Ref = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const pasta1 = pasta1Ref.current;
    const pasta2 = pasta2Ref.current;
    const pasta3 = pasta3Ref.current;
    const pasta4 = pasta4Ref.current;
    const textContent = textRef.current;
    const imageContent = imageRef.current;

    // Set initial states
    gsap.set([pasta1, pasta2, pasta3, pasta4], {
      opacity: 0.8,
      scale: 1,
      rotation: 0
    });

    gsap.set(textContent, {
      x: -50,
      opacity: 0
    });

    gsap.set(imageContent, {
      x: 50,
      opacity: 0,
      scale: 0.9
    });

    // Main content entrance animation
    const entranceTl = gsap.timeline({ delay: 0.5 });

    entranceTl.to(textContent, {
      x: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out"
    })
    .to(imageContent, {
      x: 0,
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power3.out"
    }, "-=0.8")
    .to([pasta1, pasta2, pasta3, pasta4], {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6");

    // Pasta 1 - Top Right - Gentle floating with rotation
    gsap.to(pasta1, {
      y: "-=20",
      rotation: 360,
      duration: 4,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });

    gsap.to(pasta1, {
      x: "-=10",
      duration: 3.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 0.5
    });

    // Pasta 2 - Left Side - Opposite movement
    gsap.to(pasta2, {
      y: "+=25",
      rotation: -270,
      duration: 3.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 0.8
    });

    gsap.to(pasta2, {
      x: "+=15",
      duration: 4.2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 1.2
    });

    // Pasta 3 - Bottom Right - Circular motion
    gsap.to(pasta3, {
      rotation: 360,
      duration: 6,
      ease: "none",
      repeat: -1
    });

    gsap.to(pasta3, {
      y: "-=15",
      x: "-=15",
      duration: 2.8,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 1.5
    });

    // Pasta 4 - Top Left - Figure-8 style movement
    gsap.to(pasta4, {
      y: "+=18",
      rotation: 180,
      duration: 3.2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 2
    });

    gsap.to(pasta4, {
      x: "+=12",
      duration: 2.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 0.3
    });

    // Cleanup function
    return () => {
      gsap.killTweensOf([pasta1, pasta2, pasta3, pasta4, textContent, imageContent]);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      {/* Floating Pasta Elements - 4 Different Positions */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        {/* Pasta 1 - Top Right */}
        <div
          ref={pasta1Ref}
          className="absolute top-8 -right-4 md:top-12 md:-right-2 lg:top-16 lg:right-4 xl:top-20 xl:right-8 "
          style={{ zIndex: 1 }}
        >
          <img
            src={pastaImg}
            alt="Floating Pasta"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 object-contain"
            style={{
              filter: 'drop-shadow(0 8px 16px rgba(251, 191, 36, 0.3)) drop-shadow(0 4px 8px rgba(220, 38, 38, 0.2))',
              willChange: 'transform'
            }}
          />
          <div className="absolute inset-0 bg-gradient-radial from-yellow-400/15 via-transparent to-transparent rounded-full blur-xl scale-150"></div>
        </div>

        {/* Pasta 2 - Left Side */}
        <div
          ref={pasta2Ref}
          className="absolute top-1/2 -left-4 md:top-1/2 md:-left-2 lg:top-1/2 lg:left-2 xl:top-1/2 xl:left-6 transform -translate-y-1/2"
          style={{ zIndex: 1 }}
        >
          <img
            src={pastaImg}
            alt="Floating Pasta"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 object-contain"
            style={{
              filter: 'drop-shadow(0 6px 12px rgba(251, 191, 36, 0.25)) drop-shadow(0 3px 6px rgba(220, 38, 38, 0.15))',
              willChange: 'transform'
            }}
          />
          <div className="absolute inset-0 bg-gradient-radial from-red-400/12 via-transparent to-transparent rounded-full blur-lg scale-125"></div>
        </div>

        {/* Pasta 3 - Bottom Right */}
        <div
          ref={pasta3Ref}
          className="absolute bottom-8 -right-6 md:bottom-12 md:-right-4 lg:bottom-16 lg:right-2 xl:bottom-20 xl:right-6"
          style={{ zIndex: 1 }}
        >
          <img
            src={pastaImg}
            alt="Floating Pasta"
            className="w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 lg:w-26 lg:h-26 xl:w-30 xl:h-30 object-contain"
            style={{
              filter: 'drop-shadow(0 6px 12px rgba(34, 197, 94, 0.25)) drop-shadow(0 3px 6px rgba(59, 130, 246, 0.15))',
              willChange: 'transform'
            }}
          />
          <div className="absolute inset-0 bg-gradient-radial from-green-400/10 via-transparent to-transparent rounded-full blur-lg scale-125"></div>
        </div>


        {/* Enhanced decorative particles */}
        <div className="absolute top-1/4 right-1 md:right-3 lg:right-6">
          <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-400/40 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-3/4 left-2 md:left-4 lg:left-8">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-400/30 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        <div className="absolute bottom-1/4 right-8 md:right-12 lg:right-16">
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-green-400/35 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        </div>
        <div className="absolute top-1/3 left-4 md:left-8 lg:left-12">
          <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-purple-400/30 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
      </div>

      {/* Main content with proper spacing */}
      <div className="relative py-20 px-6 z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-tr from-yellow-400 to-red-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition duration-300"></div>
            <img
              src={aboutImg}
              alt="About Golden Pvt. Ltd."
              className="relative rounded-2xl shadow-2xl object-cover w-full h-[500px] transform group-hover:scale-105 transition duration-500"
            />
          </div>

          {/* Text Content */}
          <div ref={textRef} className="space-y-6 pl-4 lg:pl-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              About <span className="text-yellow-400">Us</span>
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Golden Pvt. Ltd. is a leading manufacturer of high-quality food
              products, including{" "}
              <span className="text-yellow-400 font-semibold">Macaroni</span>,{" "}
              <span className="text-yellow-400 font-semibold">Pasta</span>,{" "}
              <span className="text-yellow-400 font-semibold">Spaghetti</span>,{" "}
              <span className="text-yellow-400 font-semibold">Tea</span>, and{" "}
              <span className="text-yellow-400 font-semibold">Vermicelli</span>,
              based in Islamabad, Pakistan. Established in 1999, we bring over{" "}
              <span className="text-yellow-400 font-semibold">
                70 years of experience
              </span>{" "}
              in the tea industry and a deep understanding of consumer needs.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              With a{" "}
              <span className="font-semibold text-yellow-400">
                state-of-the-art Italian plant
              </span>{" "}
              and innovative technology, we produce over{" "}
              <span className="font-semibold text-yellow-400">50+ SKUs</span> in
              some of the most emerging food categories. Our extensive
              distribution network of{" "}
              <span className="font-semibold text-yellow-400">
                150+ distributors
              </span>{" "}
              ensures our products are widely available across Pakistan.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              Committed to{" "}
              <span className="text-yellow-400 font-semibold">quality</span> and{" "}
              <span className="text-yellow-400 font-semibold">innovation</span>,
              Golden Pvt. Ltd. continues to deliver exceptional products that
              cater to diverse tastes, making us a trusted leader in the food
              manufacturing industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

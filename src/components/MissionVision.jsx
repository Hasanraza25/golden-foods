import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Eye, Award, Users, Globe, Zap } from "lucide-react";
import missionVisionImg from "../assets/mission-vision.png";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const MissionVision = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        sectionRef.current.querySelector(".section-header"),
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      // Cards animation
      gsap.fromTo(
        cardsRef.current,
        {
          y: 80,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current.querySelector(".cards-container"),
            start: "top 75%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      // Image animation
      gsap.fromTo(
        sectionRef.current.querySelector(".image-container"),
        {
          x: 100,
          opacity: 0,
          scale: 0.8,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current.querySelector(".image-container"),
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const missionFeatures = [
    { icon: Award, text: "Highest Standard of Excellence" },
    { icon: Users, text: "Total Customer Satisfaction" },
    { icon: Globe, text: "Integrity in All Business Spheres" },
  ];

  const visionFeatures = [
    { icon: Zap, text: "Food Safety & Availability" },
    { icon: Target, text: "Premium Quality Products" },
    { icon: Eye, text: "Brand Loyalty & Trust" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-20 lg:py-24  overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="section-header text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Our Purpose & Direction
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Driving excellence through unwavering commitment to quality, innovation, and customer satisfaction
          </p>
        </div>

        {/* New Layout: Image at top, then Mission and Vision side by side */}
        <div className="space-y-12 md:space-y-16">
          {/* Hero Image Section */}
         

          {/* Mission and Vision Cards Side by Side */}
          <div className="cards-container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Card */}
            <div
              ref={(el) => (cardsRef.current[0] = el)}
              className="group bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:bg-white/20 hover:scale-105"
            >
              <div className="flex items-center mb-4 md:mb-6">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-3 md:p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 md:w-8 md:h-8 text-red-700" />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white ml-4 md:ml-6">
                  Our Mission
                </h3>
              </div>
              
              <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6">
                Golden Pvt Ltd strives to achieve the highest standard of excellence daily, 
                continuously improving all business aspects while maintaining honesty, fairness, 
                and integrity to gain total customer satisfaction and trust.
              </p>

              <div className="space-y-3">
                {missionFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white/10 rounded-xl p-3">
                    <feature.icon className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                    <span className="text-sm text-white/90 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision Card */}
            <div
              ref={(el) => (cardsRef.current[1] = el)}
              className="group bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:bg-white/20 hover:scale-105"
            >
              <div className="flex items-center mb-4 md:mb-6">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-3 md:p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-6 h-6 md:w-8 md:h-8 text-red-700" />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white ml-4 md:ml-6">
                  Our Vision
                </h3>
              </div>
              
              <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6">
                We commit to making food safe and available everywhere. Our aim is to deliver 
                the best quality products that delight consumers and build lasting loyalty 
                and trust in our brands and organization.
              </p>

              <div className="space-y-3">
                {visionFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white/10 rounded-xl p-3">
                    <feature.icon className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                    <span className="text-sm text-white/90 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

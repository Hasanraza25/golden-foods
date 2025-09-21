import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Wheat, Settings, Flame, CheckCircle } from "lucide-react";

// Import images
import NoodlesGrow from "../assets/images/new_images/advance-machinery.png";
import NoodlesOnStove from "../assets/images/new_images/noodles-on-stove.png";
import Image01 from "../assets/images/new_images/01.png";
import Image04 from "../assets/images/new_images/04.png";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const ManufacturingExcellence = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const timelineRef = useRef(null);
  const stepsRef = useRef([]);
  const indicatorsRef = useRef(null);

  const manufacturingSteps = [
    {
      id: 1,
      title: "Premium Ingredient Selection",
      description: "We carefully select the finest durum wheat and natural ingredients to ensure superior quality in every product.",
      image: Image01,
      icon: Wheat
    },
    {
      id: 2,
      title: "Advanced Processing",
      description: "Our state-of-the-art machinery processes ingredients with precision, maintaining nutritional value and texture.",
      image: NoodlesGrow,
      icon: Settings
    },
    {
      id: 3,
      title: "Perfect Cooking Process",
      description: "Each batch is carefully monitored during the cooking process to achieve the perfect texture and consistency.",
      image: NoodlesOnStove,
      icon: Flame
    },
    {
      id: 4,
      title: "Quality Assurance",
      description: "Rigorous quality checks ensure every product meets our high standards before reaching your table.",
      image: Image04,
      icon: CheckCircle
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation - Only on downward scroll
      gsap.fromTo(headerRef.current, 
        {
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
          }
        }
      );

      // Timeline Line Animation - Only on downward scroll
      gsap.fromTo(timelineRef.current,
        {
          scaleY: 0,
          transformOrigin: "top center"
        },
        {
          scaleY: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none none"
          }
        }
      );

      // Steps Animation with Progress Tracking - Only on downward scroll
      stepsRef.current.forEach((step, index) => {
        if (!step) return;

        const contentElement = step.querySelector('.step-content');
        const imageElement = step.querySelector('.step-image');
        const progressElement = step.querySelector('.progress-bar');
        const nodeElement = step.querySelector('.timeline-node');

        // Content Animation - Only triggers on first downward scroll
        gsap.fromTo(contentElement,
          {
            x: index % 2 === 0 ? -100 : 100,
            opacity: 0,
            scale: 0.8
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 75%",
              end: "bottom 25%",
              toggleActions: "play none none none",
              onEnter: () => setActiveStep(index),
              once: true // This ensures animation only happens once
            }
          }
        );

        // Image Animation - Only triggers on first downward scroll
        gsap.fromTo(imageElement,
          {
            x: index % 2 === 0 ? 100 : -100,
            opacity: 0,
            scale: 0.9,
            rotation: index % 2 === 0 ? 5 : -5
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 75%",
              end: "bottom 25%",
              toggleActions: "play none none none",
              once: true // This ensures animation only happens once
            }
          }
        );

        // Progress Bar Animation - Only triggers on first downward scroll
        gsap.fromTo(progressElement,
          {
            width: "0%"
          },
          {
            width: "100%",
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: step,
              start: "top 60%",
              end: "bottom 40%",
              toggleActions: "play none none none",
              once: true // This ensures animation only happens once
            }
          }
        );

        // Timeline Node Animation - Only triggers on first downward scroll
        if (nodeElement) {
          gsap.fromTo(nodeElement,
            {
              scale: 0,
              opacity: 0
            },
            {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: step,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none none",
                once: true // This ensures animation only happens once
              }
            }
          );
        }

        // Floating Elements Animation - Only triggers on first downward scroll
        const floatingElements = step.querySelectorAll('.floating-element');
        floatingElements.forEach((element, i) => {
          gsap.fromTo(element,
            {
              scale: 0,
              opacity: 0,
              rotation: 0
            },
            {
              scale: 1,
              opacity: 0.8,
              rotation: 360,
              duration: 1,
              ease: "elastic.out(1, 0.3)",
              delay: i * 0.2,
              scrollTrigger: {
                trigger: step,
                start: "top 50%",
                end: "bottom 50%",
                toggleActions: "play none none none",
                once: true // This ensures animation only happens once
              }
            }
          );
        });

        // Active step tracking that works on both directions but doesn't animate
        ScrollTrigger.create({
          trigger: step,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => setActiveStep(index),
          onEnterBack: () => setActiveStep(index)
        });
      });

      // Indicators Animation - Only on downward scroll
      gsap.fromTo(indicatorsRef.current,
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: indicatorsRef.current,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none none",
            once: true // This ensures animation only happens once
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Active step indicator animation
  useEffect(() => {
    const indicators = indicatorsRef.current?.querySelectorAll('.indicator');
    if (indicators) {
      indicators.forEach((indicator, index) => {
        gsap.to(indicator, {
          scale: index === activeStep ? 1.25 : 1,
          backgroundColor: index === activeStep ? "#fbbf24" : "rgba(255,255,255,0.3)",
          duration: 0.3,
          ease: "power2.out"
        });
      });
    }
  }, [activeStep]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24  overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `radial-gradient(circle at 25% 25%, yellow 2px, transparent 2px),
                                radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-yellow-400 mb-4 sm:mb-6">
            Manufacturing Excellence
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            From raw ingredients to your table - witness our commitment to quality through every step of our manufacturing process
          </p>
        </div>

        {/* Manufacturing Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div 
            ref={timelineRef}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 via-white to-yellow-400 rounded-full hidden lg:block" 
          />

          {/* Steps */}
          <div className="space-y-12 lg:space-y-20">
            {manufacturingSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.id}
                  ref={el => stepsRef.current[index] = el}
                  className="relative"
                >
                  <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}>
                    {/* Content Side */}
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
                      <div className="step-content">
                        <div className={`bg-gradient-to-br ${
                          activeStep === index 
                            ? 'from-yellow-400/20 to-white/10 border-yellow-400/50' 
                            : 'from-white/10 to-red-800/30 border-white/20'
                        } backdrop-blur-lg rounded-2xl p-6 sm:p-8 border transition-all duration-500`}>
                          
                          {/* Step Number & Icon */}
                          <div className="flex items-center space-x-4 mb-4">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                              activeStep === index 
                                ? 'bg-yellow-400 text-red-900' 
                                : 'bg-white text-red-900'
                            } transition-all duration-500 shadow-lg`}>
                              <IconComponent size={24} strokeWidth={2} />
                            </div>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                              activeStep === index 
                                ? 'bg-yellow-400 text-red-900' 
                                : 'bg-white/80 text-red-900'
                            } transition-all duration-500 shadow-lg`}>
                              {index + 1}
                            </div>
                          </div>

                          <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-4 transition-colors duration-500 ${
                            activeStep === index ? 'text-yellow-300' : 'text-white'
                          }`}>
                            {step.title}
                          </h3>
                          
                          <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                            {step.description}
                          </p>

                          {/* Progress Indicator */}
                          <div className="mt-6 w-full bg-white/20 rounded-full h-2 overflow-hidden">
                            <div className="progress-bar h-2 rounded-full bg-gradient-to-r from-yellow-400 to-white" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'} relative`}>
                      <div className="step-image relative w-full h-[300px] sm:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Overlay Effects */}
                        <div className={`absolute inset-0 transition-all duration-500 ${
                          activeStep === index 
                            ? 'bg-gradient-to-t from-yellow-400/30 via-transparent to-white/10' 
                            : 'bg-gradient-to-t from-red-900/50 via-transparent to-transparent'
                        }`} />
                        
                        {/* Animated Border */}
                        <div className={`absolute inset-0 border-4 rounded-2xl transition-all duration-500 ${
                          activeStep === index 
                            ? 'border-yellow-400/60 shadow-[0_0_30px_rgba(251,191,36,0.3)]' 
                            : 'border-transparent'
                        }`} />
                      </div>

                      {/* Floating Elements */}
                      <div className="floating-element absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-0" />
                      <div className="floating-element absolute -bottom-4 -left-4 w-6 h-6 bg-white rounded-full opacity-0" />
                    </div>
                  </div>

                  {/* Timeline Node (Desktop) */}
                  <div className="timeline-node absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 hidden lg:block">
                    <div className={`w-6 h-6 rounded-full border-4 transition-all duration-500 shadow-lg ${
                      activeStep === index 
                        ? 'bg-yellow-400 border-white' 
                        : 'bg-white border-yellow-400'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Indicators */}
        <div ref={indicatorsRef} className="flex justify-center space-x-4 mt-12">
          {manufacturingSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className="indicator w-4 h-4 rounded-full transition-all duration-300 bg-white/30 hover:bg-white/50 shadow-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManufacturingExcellence;
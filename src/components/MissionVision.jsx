import React from "react";
import missionVisionImg from "../assets/mission-vision.png"; // replace with your long image

const MissionVision = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-red-900 via-red-800 to-yellow-900 py-16 px-6 md:px-12 lg:px-20 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-8">
          {/* Mission */}
          <div
            className="backdrop-blur-md bg-white/10 p-6 rounded-2xl shadow-lg"
            data-aos="fade-right"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-300">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed">
              Golden (Pvt) Itd wants to achieve its mission by striving to attain 
              the highest standard of excellence each and every day. To constantly 
              strive to achieve excellence, to continually improve all aspects of 
              the business in which we operate, to strive for honesty, fairness 
              and integrity in all spheres of our business, and to gain total 
              customer satisfaction and trust.
            </p>
          </div>

          {/* Vision */}
          <div
            className="backdrop-blur-md bg-white/10 p-6 rounded-2xl shadow-lg"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-300">
              Our Vision
            </h2>
            <p className="text-lg leading-relaxed">
              We commit to making food safe & available everywhere. Our aim is to 
              deliver the best quality products that delight our consumers and 
              build loyalty and trust in our brands and organization.
            </p>
          </div>
        </div>

        {/* Image */}
        <div
          className="flex justify-center md:justify-end"
          data-aos="fade-left"
        >
          <img
            src={missionVisionImg}
            alt="Our Mission and Vision"
            className="rounded-2xl shadow-2xl w-full md:w-[90%] lg:w-[85%] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

import React from "react";
import { motion } from "framer-motion";
import noodleImg from "../assets/noodle.png";
import tomatoImg from "../assets/tomato.png";
import chilliImg from "../assets/chilli.png";
import pastaImg from "../assets/images/single-pasta.png";
import twistedPastaImg from "../assets/twisted-pasta.png";

const floatAnimation = {
  y: [0, -20, 0, 20, 0], // move up and down
  transition: {
    duration: 6, // time for one full cycle
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const FloatingIngredients = () => {
  return (
    <div className="absolute inset-0 w-full h-full  overflow-hidden pointer-events-none">
      {/* Noodle */}
      <motion.img
        src={noodleImg}
        alt="noodle"
        className="absolute top-40 left-0 w-40"
        style={{ filter: "blur(3px)" }}
        animate={floatAnimation}
      />

      {/* Pasta */}
      <motion.img
        src={pastaImg}
        alt="pasta"
        className="absolute left-3/5 sm:left-1/5 w-44"
        style={{ filter: "blur(2.5px)" }}
        animate={{
          ...floatAnimation,
          transition: { ...floatAnimation.transition, duration: 7 },
        }}
      />

      {/* Twisted Pasta */}
      <motion.img
        src={twistedPastaImg}
        alt="twisted pasta"
        className="absolute hidden sm:block rotate-45 bottom-0 right-5/12 w-40"
        style={{ filter: "blur(3.5px)" }}
        animate={{
          ...floatAnimation,
          transition: { ...floatAnimation.transition, duration: 8 },
        }}
      />

      {/* Tomato */}
      <motion.img
        src={tomatoImg}
        alt="tomato"
        className="absolute right-10 hidden sm:block w-32"
        style={{ filter: "blur(3px)" }}
        animate={{
          ...floatAnimation,
          transition: { ...floatAnimation.transition, duration: 6.5 },
        }}
      />

      {/* Tomato (2nd) */}
      <motion.img
        src={tomatoImg}
        alt="tomato"
        className="absolute left-30 bottom-8 sm:bottom-0 w-32"
        style={{ filter: "blur(2.5px)" }}
        animate={{
          ...floatAnimation,
          transition: { ...floatAnimation.transition, duration: 9 },
        }}
      />

      {/* Chilli */}
      <motion.img
        src={chilliImg}
        alt="chilli"
        className="absolute right-1/12 top-4/6 w-44"
        style={{ filter: "blur(3.5px)" }}
        animate={{
          ...floatAnimation,
          transition: { ...floatAnimation.transition, duration: 7.5 },
        }}
      />
    </div>
  );
};

export default FloatingIngredients;

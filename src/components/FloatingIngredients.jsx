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
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const ingredients = [
  {
    src: noodleImg,
    alt: "noodle",
    className: "top-40 left-0 w-20 sm:w-32 md:w-40",
    blur: 3,
    duration: 6,
  },
  {
    src: pastaImg,
    alt: "pasta",
    className: "left-1/4 sm:left-1/5 md:left-3/5 w-24 sm:w-32 md:w-44",
    blur: 2.5,
    duration: 7,
  },
  {
    src: twistedPastaImg,
    alt: "twisted pasta",
    className:
      "rotate-45 bottom-4 sm:bottom-0 right-1/4 md:right-5/12 w-20 sm:w-28 md:w-40 hidden sm:block",
    blur: 2,
    duration: 8,
  },
  {
    src: tomatoImg,
    alt: "tomato",
    className: "right-4 sm:right-10 w-20 sm:w-28 md:w-32 hidden sm:block",
    blur: 3,
    duration: 6.5,
  },
  {
    src: tomatoImg,
    alt: "tomato",
    className: "left-10 sm:left-30 bottom-4 sm:bottom-0 w-20 sm:w-28 md:w-32",
    blur: 2.5,
    duration: 9,
  },
  {
    src: chilliImg,
    alt: "chilli",
    className: "right-4 sm:right-1/12 top-2/3 sm:top-4/6 w-24 sm:w-32 md:w-44",
    blur: 3.5,
    duration: 7.5,
  },
];

// extra duplicates ONLY for mobile
const mobileDuplicates = [
  {
    src: tomatoImg,
    alt: "tomato",
    className: "top-28 right-0 w-16 sm:hidden",
    blur: 2,
    duration: 8,
  },
  {
    src: noodleImg,
    alt: "noodle",
    className: "bottom-1/3 right-1/4 w-16 sm:hidden",
    blur: 2.5,
    duration: 7,
  },
  {
    src: chilliImg,
    alt: "chilli",
    className: "top-32 left-1/2 w-16 sm:hidden",
    blur: 3,
    duration: 6.5,
  },
];

const FloatingIngredients = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {ingredients.map((item, index) => (
        <motion.img
          key={`ingredient-${index}`}
          src={item.src}
          alt={item.alt}
          className={`absolute ${item.className}`}
          style={{ filter: `blur(${item.blur}px)` }}
          animate={{
            ...floatAnimation,
            transition: {
              ...floatAnimation.transition,
              duration: item.duration,
            },
          }}
        />
      ))}

      {/* Extra duplicates only for mobile screens */}
      {mobileDuplicates.map((item, index) => (
        <motion.img
          key={`mobile-dup-${index}`}
          src={item.src}
          alt={item.alt}
          className={`absolute ${item.className}`}
          style={{ filter: `blur(${item.blur}px)` }}
          animate={{
            ...floatAnimation,
            transition: {
              ...floatAnimation.transition,
              duration: item.duration,
            },
          }}
        />
      ))}
    </div>
  );
};

export default FloatingIngredients;

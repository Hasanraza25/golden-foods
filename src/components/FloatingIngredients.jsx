import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import noodleImg from "../assets/noodle.png";
import tomatoImg from "../assets/tomato.png";
import chilliImg from "../assets/chilli.png";
import pastaImg from "../assets/images/single-pasta.png";

const FloatingIngredients = () => {
  const { scrollY } = useScroll();

  // Different transforms for each ingredient
  const yNoodle = useTransform(scrollY, [0, 500], [0, 120]);
  const yPasta = useTransform(scrollY, [0, 500], [0, -100]);
  const yTomato = useTransform(scrollY, [0, 500], [0, -150]);
  const yChilli = useTransform(scrollY, [0, 500], [0, 80]);

  const blurNoodle = useTransform(scrollY, [0, 500], ["blur(0px)", "blur(3px)"]);
  const blurPasta = useTransform(scrollY, [0, 500], ["blur(0px)", "blur(2px)"]);
  const blurTomato = useTransform(scrollY, [0, 500], ["blur(0px)", "blur(4px)"]);
  const blurChilli = useTransform(scrollY, [0, 500], ["blur(0px)", "blur(2.5px)"]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Noodle */}
      <motion.img
        src={noodleImg}
        alt="noodle"
        className="absolute top-20 left-10 w-40"
        style={{ y: yNoodle, filter: blurNoodle }}
      />

      {/* Pasta */}
      <motion.img
        src={pastaImg}
        alt="pasta"
        className="absolute left-1/4 w-36"
        style={{ top: "30rem", y: yPasta, filter: blurPasta }}
      />

      {/* Tomato */}
      <motion.img
        src={tomatoImg}
        alt="tomato"
        className="absolute right-10 w-32"
        style={{ top: "35rem", y: yTomato, filter: blurTomato }}
      />

      {/* Chilli */}
      <motion.img
        src={chilliImg}
        alt="chilli"
        className="absolute right-1/4 w-28"
        style={{ bottom: "15rem", y: yChilli, filter: blurChilli }}
      />
    </div>
  );
};

export default FloatingIngredients;

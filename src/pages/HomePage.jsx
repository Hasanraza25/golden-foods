import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import MissionVision from "../components/MissionVision";
import FloatingNoodles from "../components/FloatingNoodle";

const HomePage = () => {
  return (
    <>
      <FloatingNoodles />
      <Navbar />
      <Hero />
      <AboutUs />
      <MissionVision />
    </>
  );
};

export default HomePage;

import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import MissionVision from "../components/MissionVision";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <MissionVision />
    </>
  );
};

export default HomePage;

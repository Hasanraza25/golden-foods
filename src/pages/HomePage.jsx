import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import MissionVision from "../components/MissionVision";
import BannerPremium from "../components/Banner";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <MissionVision />
      <BannerPremium />
    </>
  );
};

export default HomePage;

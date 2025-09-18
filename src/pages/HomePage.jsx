import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import MissionVision from "../components/MissionVision";
import BannerPremium from "../components/Banner";
import Footer from "../components/Footer";
import CategoryCards from "../components/CategoryCards";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <MissionVision />
      <BannerPremium />
      <CategoryCards/>
      <Footer />
    </>
  );
};

export default HomePage;

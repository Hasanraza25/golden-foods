import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/HeroSection";
// import AboutUs from "../components/AboutUs";
import MissionVision from "../components/MissionVision";
import HeritageInnovation from "../components/HeritageInnovation";
import ProductShowcase from "../components/ProductShowcase";
import ManufacturingExcellence from "../components/ManufacturingExcellence";
import CategoryCards from "../components/CategoryCards";
import BannerPremium from "../components/Banner";
import CookAndEat from "../components/CookAndEat";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Hero />
      <CategoryCards />
      <HeritageInnovation />
      <MissionVision />
      <BannerPremium /> 
      <ManufacturingExcellence />
      <ProductShowcase />
      <CookAndEat />
    </>
  );
};

export default HomePage;

import React from "react";
import HeroSection from "./HeroSection";
import WhyChooseUs from "./WhyChoose";
import TopServices from "./TopService";
import HomeService from "./HomeService";

const HomePage = () => {
  return (
    <div>
      <div>
        <HeroSection />
        <HomeService />
        <WhyChooseUs />
      </div>
    </div>
  );
};

export default HomePage;

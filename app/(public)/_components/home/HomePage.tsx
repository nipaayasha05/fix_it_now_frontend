import React from "react";
import HeroSection from "./HeroSection";
import WhyChooseUs from "./WhyChoose";
import TopServices from "./TopService";
import HomeService from "./HomeService";
import OurValues from "./OurValues";

const HomePage = () => {
  return (
    <div>
      <div>
        <HeroSection />
        <HomeService />
        <WhyChooseUs />
        <OurValues />
      </div>
    </div>
  );
};

export default HomePage;

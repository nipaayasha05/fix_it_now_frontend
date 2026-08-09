import React from "react";
import HeroSection from "./HeroSection";
import WhyChooseUs from "./WhyChoose";
import TopServices from "./TopService";
import HomeService from "./HomeService";
import OurValues from "./OurValues";
import HomeTechnician from "./HomeTechnician";
import HomeCategory from "./HomeCategory";
import CustomerTestimonials from "./CustomerTestimonials";
import HowItWorks from "./HowItWorks";

const HomePage = () => {
  return (
    <div>
      <div>
        <HeroSection />
        <HomeService />
        <HomeTechnician />
        <HomeCategory />
        <WhyChooseUs />
        <HowItWorks />
        <OurValues />
        <CustomerTestimonials />
      </div>
    </div>
  );
};

export default HomePage;

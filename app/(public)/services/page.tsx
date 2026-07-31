import React from "react";
import AllServices from "../_components/services/AllServices";

const servicesPage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-8 mt-8">All Services</h1>
      <div>
        <AllServices />
      </div>
    </div>
  );
};

export default servicesPage;

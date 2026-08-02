import React, { Suspense } from "react";
import AllTechnicians from "../_components/technicians/AllTechnicians";
import SkeletonPage from "../_components/skeleton/Skeleton";

const TechnicianPage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl text-primary font-bold text-center mb-8 mt-8">
        All Technicians
      </h1>
      <div>
        <Suspense fallback={<SkeletonPage />}>
          <AllTechnicians />
        </Suspense>
      </div>
    </div>
  );
};

export default TechnicianPage;

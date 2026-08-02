import React, { Suspense } from "react";
import AllServices from "../_components/services/AllServices";
import { Skeleton } from "@/components/ui/skeleton";
import SkeletonPage from "../_components/skeleton/Skeleton";

const servicesPage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl text-primary font-bold text-center mb-8 mt-8">
        All Services
      </h1>
      <div>
        <Suspense fallback={<SkeletonPage />}>
          <AllServices />
        </Suspense>
      </div>
    </div>
  );
};

export default servicesPage;

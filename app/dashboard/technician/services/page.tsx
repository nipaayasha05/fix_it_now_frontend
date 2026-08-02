import React, { Suspense } from "react";
import Services from "../../_components/technician/services/Services";
import SkeletonPage from "@/app/(public)/_components/skeleton/Skeleton";

const ServicesPage = () => {
  return (
    <div>
      <Suspense fallback={<SkeletonPage />}>
        <Services />
      </Suspense>
    </div>
  );
};

export default ServicesPage;

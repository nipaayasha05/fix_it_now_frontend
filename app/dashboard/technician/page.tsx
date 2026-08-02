import React, { Suspense } from "react";
import TechnicianOverview from "../_components/technician/TechnicianOverview";
import SkeletonPage from "@/app/(public)/_components/skeleton/Skeleton";

const TechnicianPage = () => {
  return (
    <div>
      <Suspense fallback={<SkeletonPage />}>
        <TechnicianOverview />
      </Suspense>
    </div>
  );
};

export default TechnicianPage;

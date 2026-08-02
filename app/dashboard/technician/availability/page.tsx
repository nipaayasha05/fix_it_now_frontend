import React, { Suspense } from "react";
import Availability from "../../_components/technician/availability/Availability";
import SkeletonPage from "@/app/(public)/_components/skeleton/Skeleton";

const AvailabilityPage = () => {
  return (
    <div>
      <Suspense fallback={<SkeletonPage />}>
        <Availability />
      </Suspense>
    </div>
  );
};

export default AvailabilityPage;

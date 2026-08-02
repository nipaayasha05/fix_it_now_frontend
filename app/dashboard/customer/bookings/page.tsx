import React, { Suspense } from "react";
import MyBooking from "../../_components/customer/MyBooking/MyBooking";
import SkeletonPage from "@/app/(public)/_components/skeleton/Skeleton";

const Booking = () => {
  return (
    <div>
      <Suspense fallback={<SkeletonPage />}>
        <MyBooking />
      </Suspense>
    </div>
  );
};

export default Booking;

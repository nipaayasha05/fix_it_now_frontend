import React, { Suspense } from "react";
import Bookings from "../../_components/technician/bookings/Bookings";
import SkeletonPage from "@/app/(public)/_components/skeleton/Skeleton";

const BookingsPage = () => {
  return (
    <div>
      <Suspense fallback={<SkeletonPage />}>
        <Bookings />
      </Suspense>
    </div>
  );
};

export default BookingsPage;

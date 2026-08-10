import React, { Suspense } from "react";
import MyBooking from "../../_components/customer/MyBooking/MyBooking";
import SkeletonPage from "@/app/(public)/_components/skeleton/Skeleton";

const Booking = async ({
  searchParams,
}: {
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}) => {
  const query = await searchParams;
  return (
    <div>
      <Suspense fallback={<SkeletonPage />}>
        <MyBooking searchParams={query} />
      </Suspense>
    </div>
  );
};

export default Booking;

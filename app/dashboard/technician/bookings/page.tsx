import React, { Suspense } from "react";
import Bookings from "../../_components/technician/bookings/Bookings";
import SkeletonPage from "@/app/(public)/_components/skeleton/Skeleton";

const BookingsPage = async ({
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
        <Bookings searchParams={query} />
      </Suspense>
    </div>
  );
};

export default BookingsPage;

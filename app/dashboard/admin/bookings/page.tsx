import React, { Suspense } from "react";
import SkeletonPage from "@/app/(public)/_components/skeleton/Skeleton";
import AllBookings from "../../_components/admin/bookings/AllBookings";

const AllUsersBookings = async ({
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
        <AllBookings searchParams={query} />
      </Suspense>
    </div>
  );
};

export default AllUsersBookings;

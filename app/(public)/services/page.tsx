import React, { Suspense } from "react";
import AllServices from "../_components/services/AllServices";
import SkeletonPage from "../_components/skeleton/Skeleton";

export default async function ServicesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl text-primary font-bold text-center mb-8 mt-8">
        All Services
      </h1>

      <Suspense fallback={<SkeletonPage />}>
        <AllServices searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

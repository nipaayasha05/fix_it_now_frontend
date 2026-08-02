import SkeletonPage from "@/app/(public)/_components/skeleton/Skeleton";
import MyReview from "@/app/dashboard/_components/customer/review/MyReview";
import React, { Suspense } from "react";

export const ReviewPage = () => {
  return (
    <div>
      <Suspense fallback={<SkeletonPage />}>
        <MyReview />
      </Suspense>
    </div>
  );
};
export default ReviewPage;

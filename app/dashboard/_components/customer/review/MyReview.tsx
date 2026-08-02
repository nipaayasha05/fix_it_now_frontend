import { getEligibleReviews } from "@/app/dashboard/_actions/customer/getEligibleReview";
import React from "react";
import ReviewCard from "./ReviewCard";
import { TBooking } from "@/lib/type";

export const MyReview = async () => {
  const reviews = await getEligibleReviews();
  const acceptedReviews = reviews.data.filter(
    (review: TBooking) => review.status === "COMPLETED",
  );

  console.log(reviews);
  return (
    <>
      {acceptedReviews.length === 0 ? (
        <div className="flex min-h-[300px] items-center justify-center rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100">
              No Accepted Reviews Found
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              You do not have any accepted reviews yet. Please complete the
              payment for your bookings first.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 2xl:grid-cols-3">
          {acceptedReviews.map((review: TBooking) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}
    </>
  );
};

export default MyReview;

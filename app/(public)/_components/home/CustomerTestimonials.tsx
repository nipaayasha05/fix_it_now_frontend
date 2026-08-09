"use client";

import React, { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";
import { getReviewsPublic } from "../../_actions/review/review";

type Review = {
  id: string;
  rating: number;
  comment: string;
  customer: {
    name: string;
    profileImage: string | null;
  };
  booking: {
    service: {
      title: string;
    };
    totalPrice: number;
  };
};

const CustomerTestimonials = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const result = await getReviewsPublic();

        if (result?.success) {
          setReviews(result.data || []);
        }
      } catch (error) {
        console.error("Failed to load reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <section className="bg-slate-50 py-20 dark:bg-slate-950">
        <div className="mx-auto container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            {/* <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Customer Reviews
            </p> */}

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-64 animate-pulse rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="mb-5 h-5 w-28 rounded bg-slate-200 dark:bg-slate-800" />

                <div className="space-y-3">
                  <div className="h-4 rounded bg-slate-200 dark:bg-slate-800" />
                  <div className="h-4 rounded bg-slate-200 dark:bg-slate-800" />
                  <div className="h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-800" />
                </div>

                <div className="mt-8 border-t border-slate-200 pt-4 dark:border-slate-800">
                  <div className="h-4 w-32 rounded bg-slate-200 dark:bg-slate-800" />
                  <div className="mt-2 h-3 w-24 rounded bg-slate-200 dark:bg-slate-800" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          {/* <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Customer Reviews
          </p> */}

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Real experiences from customers who found trusted professionals
            through FixItNow.
          </p>
        </div>

        {/* Empty State */}
        {reviews.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-12 text-center dark:border-slate-700 dark:bg-slate-900">
            <p className="text-slate-500 dark:text-slate-400">
              No customer reviews available yet.
            </p>
          </div>
        ) : (
          /* Reviews */
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.slice(0, 6).map((review) => (
              <div
                key={review.id}
                className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
              >
                {/* Quote */}
                <Quote className="absolute right-6 top-6 h-9 w-9 text-blue-100 dark:text-blue-950" />

                {/* Rating */}
                <div className="mb-5 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={`h-4 w-4 ${
                        index < review.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-slate-300 dark:text-slate-700"
                      }`}
                    />
                  ))}

                  <span className="ml-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
                    {review.rating}.0
                  </span>
                </div>

                {/* Review */}
                <p className="mb-6 min-h-[50px] text-sm leading-6 text-slate-600 dark:text-slate-300">
                  “{review.comment.trim()}”
                </p>

                {/* Customer */}
                <div className="mt-auto flex items-center gap-3 border-t border-slate-200 pt-4 dark:border-slate-800">
                  {/* Avatar */}
                  {review.customer.profileImage ? (
                    <img
                      src={review.customer.profileImage}
                      alt={review.customer.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                      {review.customer.name.charAt(0).toUpperCase()}
                    </div>
                  )}

                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {review.customer.name}
                    </p>

                    <p className="mt-1 text-sm text-blue-600 dark:text-blue-400">
                      {review.booking.service.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CustomerTestimonials;

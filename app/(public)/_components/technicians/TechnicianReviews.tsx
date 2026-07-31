import { MessageSquareText, Star } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { TReview } from "@/lib/type";

type TechnicianReviewsProps = {
  reviews: TReview[];
  averageRating: string;
  totalReviews: number;
};

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }).map((_, index) => (
    <Star
      key={index}
      className={`
        h-4 w-4
        ${
          index < rating
            ? "fill-yellow-400 text-yellow-400"
            : "text-muted-foreground"
        }
      `}
    />
  ));
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const TechnicianReviews = ({
  reviews,
  averageRating,
  totalReviews,
}: TechnicianReviewsProps) => {
  return (
    <Card className="rounded-3xl border shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <MessageSquareText className="h-6 w-6 text-primary" />
          Customer Reviews
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Rating Summary */}
        <div
          className="
            flex
            flex-col
            gap-5
            rounded-3xl
            bg-primary/5
            p-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div>
            <p className="text-sm text-muted-foreground">Average Rating</p>

            <div className="mt-2 flex items-center gap-2">
              <h2 className="text-4xl font-bold">{averageRating}</h2>

              <Star className="h-7 w-7 fill-yellow-400 text-yellow-400" />
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Total Reviews</p>

            <p className="mt-2 text-3xl font-bold">{totalReviews}</p>
          </div>
        </div>

        {/* Reviews */}
        {reviews.length === 0 ? (
          <div
            className="
              rounded-2xl
              border
              border-dashed
              py-10
              text-center
            "
          >
            <MessageSquareText
              className="
                mx-auto
                mb-3
                h-10
                w-10
                text-muted-foreground
              "
            />

            <p className="font-medium">No reviews yet</p>

            <p className="text-sm text-muted-foreground">
              Be the first customer to review this technician.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="
                  rounded-3xl
                  border
                  bg-background
                  p-5
                  transition-all
                  hover:border-primary
                  hover:shadow-md
                "
              >
                <div className="flex gap-4">
                  {/* Avatar */}
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>C</AvatarFallback>
                  </Avatar>

                  <div className="flex-1 space-y-2">
                    <div
                      className="
                        flex
                        flex-col
                        justify-between
                        gap-2
                        sm:flex-row
                      "
                    >
                      <div>
                        <h3 className="font-semibold">Customer</h3>

                        <div className="flex">{renderStars(review.rating)}</div>
                      </div>

                      <p className="text-sm text-muted-foreground">
                        {new Date(review.createdAt).toLocaleDateString()}
                      </p>
                    </div>

                    <p className="leading-7 text-muted-foreground">
                      {review.comment}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TechnicianReviews;

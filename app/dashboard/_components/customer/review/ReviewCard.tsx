"use client";

import Link from "next/link";
import {
  Calendar,
  Clock,
  CreditCard,
  MapPin,
  Star,
  User,
  Wrench,
} from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TBooking } from "@/lib/type";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type ReviewCardProps = {
  review: TBooking;
};

export default function ReviewCard({ review }: ReviewCardProps) {
  const userReview = review.reviews?.[0];
  return (
    <Card className="group overflow-hidden border-0 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Top */}
      {/* <div className="h-2 bg-primary" /> */}

      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold">{review.service?.title}</h2>

            {/* <p className="mt-1 text-sm text-muted-foreground">
              {review.service?.description}
            </p> */}
          </div>

          <Badge
            variant={review.status === "COMPLETED" ? "default" : "secondary"}
          >
            {review.status}
          </Badge>
        </div>
      </CardHeader>

      <Separator />

      <CardContent className="space-y-6 pt-6">
        <div className="rounded-xl bg-muted/30 p-4">
          {/* Technician Header */}
          <div className="flex items-center gap-4">
            {review.technician?.technician?.profileImage ? (
              <Avatar className="h-12 w-12 border">
                <AvatarImage
                  src={review.technician?.technician?.profileImage || ""}
                  alt={review.technician?.technician?.name}
                />

                <AvatarFallback className=" text-lg font-bold text-primary-foreground">
                  {review.technician?.technician?.name?.charAt(0).toUpperCase()}
                  {/* {technician.technician.name.charAt(0).toUpperCase()} */}
                </AvatarFallback>
              </Avatar>
            ) : (
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                {review.technician?.technician?.name?.charAt(0).toUpperCase()}
              </div>
            )}

            <div>
              <h3 className="text-lg font-semibold">
                {review.technician?.technician?.name}
              </h3>

              <p className="text-sm text-muted-foreground">
                Professional Technician
              </p>
            </div>
          </div>

          {/* Details */}
          {/* <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 rounded-lg bg-background p-2.5">
              <MapPin className="size-5 text-primary" />

              <div>
                <p className="text-xs text-muted-foreground">Location</p>

                <p className="font-medium">{review.technician?.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-lg bg-background p-2.5">
              <Wrench className="size-5 text-primary" />

              <div>
                <p className="text-xs text-muted-foreground">Experience</p>

                <p className="font-medium">
                  {review.technician?.experience} Years
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-lg bg-background p-2.5">
              <Star className="size-5 text-yellow-500" />

              <div>
                <p className="text-xs text-muted-foreground">Rating</p>

                <p className="font-medium">
                  {review.technician?.averageRating} ⭐
                  <span className="text-sm text-muted-foreground">
                    {" "}
                    ({review.technician?.totalReviews} reviews)
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-lg bg-background p-2.5">
              <User className="size-5 text-primary" />

              <div>
                <p className="text-xs text-muted-foreground">Status</p>

                <Badge>{review.technician?.status}</Badge>
              </div>
            </div>
          </div> */}

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" />
              {review.technician?.location}
            </div>

            <div className="flex items-center gap-2">
              <Wrench className="size-4 text-primary" />
              {review.technician?.experience} Years
            </div>

            <div className="flex items-center gap-2">
              <Star className="size-4 text-yellow-500" />
              {review.technician?.averageRating}
            </div>
          </div>

          {/* Skills */}

          <div className="mt-5">
            <p className="mb-1 text-xs text-muted-foreground">Expertise</p>
            <div className="flex flex-wrap gap-2">
              {review.technician?.skills?.slice(0, 3).map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Bio */}

          <p className="mt-3 line-clamp-1 text-xs text-muted-foreground">
            {review.technician?.bio}
          </p>
        </div>

        <Separator />

        {/* Booking Info */}

        <div className="flex flex-wrap justify-between rounded-xl bg-muted/40 p-3">
          <div>
            <p className="text-xs text-muted-foreground">Amount</p>

            <p className="font-semibold">৳{review.totalPrice}</p>
          </div>

          <div>
            <p className="text-xs text-muted-foreground">Payment</p>

            <Badge>{review.payment?.status}</Badge>
          </div>

          <div>
            <p className="text-xs text-muted-foreground">Date</p>

            <p>{new Date(review.createdAt).toLocaleDateString()}</p>
          </div>
        </div>

        <Separator />

        {/* Footer */}

        <div className="flex items-center justify-between">
          {userReview ? (
            <div>
              <p className="font-semibold">
                Your Review ⭐ {userReview.rating}/5
              </p>

              <p className="text-sm text-muted-foreground">
                You already reviewed this service
              </p>
            </div>
          ) : (
            <div>
              <p className="font-semibold">How was your experience?</p>

              <p className="text-sm text-muted-foreground">
                Leave feedback for technician
              </p>
            </div>
          )}

          <Button>
            <Link
              href={
                userReview
                  ? `/dashboard/customer/reviews/${review.id}`
                  : `/dashboard/customer/review/${review.id}`
              }
            >
              {userReview ? "View Review" : "Write Review"}
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

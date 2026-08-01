"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Star } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { createReview } from "@/app/dashboard/_actions/customer/createReview";
import { TBooking } from "@/lib/type";
import { toast } from "sonner";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  review: TBooking;
};

export default function ReviewModal({ open, onOpenChange, review }: Props) {
  const router = useRouter();

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    startTransition(async () => {
      try {
        const res = await createReview({
          bookingId: review.id,
          rating,
          comment,
        });

        if (res.success) {
          toast.success("Review submitted successfully");

          onOpenChange(false);

          router.refresh();
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("Something went wrong");
        }
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Write Review</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Rating */}

          <div>
            <p className="mb-2 font-medium">Rating</p>

            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setRating(value)}
                >
                  <Star
                    className={`h-7 w-7 ${
                      value <= rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Comment */}

          <div>
            <p className="mb-2 font-medium">Comment</p>

            <Textarea
              rows={5}
              placeholder="Share your experience..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          <Button
            className="w-full"
            onClick={handleSubmit}
            disabled={isPending}
          >
            {isPending ? "Submitting..." : "Submit Review"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

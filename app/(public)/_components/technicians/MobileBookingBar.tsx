"use client";

import { Button } from "@/components/ui/button";

const MobileBookingBar = () => {
  const scrollToBooking = () => {
    const booking = document.getElementById("booking-card");

    booking?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div
      className="
      fixed
      bottom-0
      left-0
      right-0
      z-50
      border-t
      bg-background
      p-4
      md:hidden
      "
    >
      <Button
        onClick={scrollToBooking}
        className="
        w-full
        bg-orange-500
        hover:bg-orange-600
        text-white
        "
      >
        Book Now
      </Button>
    </div>
  );
};

export default MobileBookingBar;

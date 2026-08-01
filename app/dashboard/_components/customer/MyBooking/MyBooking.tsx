import { TBooking } from "@/lib/type";
import React from "react";
import MyBookingCard from "./MyBookingCard";
import { getMyBookings } from "@/app/dashboard/_actions/customer/getBooking";

export const MyBooking = async () => {
  const myBooking = await getMyBookings();

  const acceptedBookings = myBooking.data.filter(
    (booking: TBooking) => booking.status === "ACCEPTED",
  );

  return (
    <>
      {acceptedBookings.length === 0 ? (
        <div className="flex min-h-[300px] items-center justify-center rounded-lg border bg-gray-50">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700">
              No Accepted Bookings Found
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              You do not have any accepted bookings yet.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 2xl:grid-cols-3">
          {acceptedBookings.map((booking: TBooking) => (
            <MyBookingCard key={booking.id} booking={booking} />
          ))}
        </div>
      )}
    </>
  );
};

export default MyBooking;

import { getBookings } from "@/app/dashboard/_actions/technician/getBookings";
import { TBooking } from "@/lib/type";
import React from "react";
import TechnicianBookingCard from "./TechnicianBookingCard";

const Bookings = async () => {
  const bookings = await getBookings();
  // console.log(bookings.data);

  return (
    <>
      {bookings.data?.length === 0 ? (
        <div className="flex min-h-[300px] items-center justify-center rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100">
              No Bookings Found
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              You do not have any bookings yet.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 2xl:grid-cols-3">
          {bookings.data?.map((booking: TBooking) => (
            <TechnicianBookingCard key={booking.id} booking={booking} />
          ))}
        </div>
      )}
    </>
  );
};

export default Bookings;

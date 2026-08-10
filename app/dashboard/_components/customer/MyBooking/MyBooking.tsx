import { TBooking } from "@/lib/type";
import React from "react";
import MyBookingCard from "./MyBookingCard";
import { getMyBookings } from "@/app/dashboard/_actions/customer/getBooking";
import Pagination from "@/components/shared/Pagination";
import StatusFilter from "../../admin/bookings/StatusFilter";

type AllBookingsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export const MyBooking = async ({ searchParams }: AllBookingsProps) => {
  const query = {
    ...searchParams,
    status: "ACCEPTED",
  };

  const page = Number(searchParams.page) || 1;
  const limit = 3;
  const myBooking = await getMyBookings({ query, page, limit });

  // const acceptedBookings = myBooking.data?.data.filter(
  //   (booking: TBooking) => booking.status === "ACCEPTED",
  // );
  const bookings = myBooking.data?.data ?? [];

  return (
    <>
      <div>
        <div className="flex items-center justify-between space-y-5">
          <div>
            <h1 className="text-2xl font-bold">All Bookings</h1>

            <p className="text-sm text-muted-foreground">
              Manage and monitor all customer bookings from here.
            </p>
          </div>

          <StatusFilter
            currentStatus={
              typeof query?.status === "string" ? query.status : undefined
            }
          />
        </div>
        {bookings.length === 0 ? (
          <div className="flex min-h-[300px] items-center justify-center rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100">
                No Accepted Bookings Found
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                You do not have any accepted bookings yet.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 2xl:grid-cols-3">
              {bookings?.map((booking: TBooking) => (
                <MyBookingCard key={booking.id} booking={booking} />
              ))}
            </div>
            {/* Pagination */}
            <Pagination
              currentPage={myBooking.data?.meta?.page ?? page}
              totalPages={myBooking.data?.meta?.totalPages ?? 1}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default MyBooking;

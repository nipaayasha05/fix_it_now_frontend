import { getAllBookings } from "@/app/dashboard/_actions/admin/getAllBookings";
import BookingTable from "./BookingTable";
import StatusFilter from "./StatusFilter";
import Pagination from "@/components/shared/Pagination";

type AllBookingsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

const AllBookings = async ({ searchParams }: AllBookingsProps) => {
  const query = searchParams;

  const page = Number(query?.page) || 1;
  const limit = 10;

  const bookings = await getAllBookings({
    query,
    page,
    limit,
  });

  const bookingData = bookings?.data?.data || [];

  return (
    <div>
      {/* Header */}
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

      {/* Table */}
      <BookingTable bookingData={bookingData} page={page} limit={limit} />

      {/* Pagination */}
      <Pagination
        currentPage={bookings?.data?.meta?.page || page}
        totalPages={bookings?.data?.meta?.totalPages || 1}
      />
    </div>
  );
};

export default AllBookings;

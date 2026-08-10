"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TBooking } from "@/lib/type";
import { Star } from "lucide-react";

type BookingTableProps = {
  bookingData: TBooking[];
  page: number;
  limit: number;
};

const getStatusVariant = (status: string) => {
  switch (status) {
    case "COMPLETED":
      return "default";

    case "PENDING":
      return "secondary";

    case "CONFIRMED":
      return "outline";

    case "CANCELLED":
      return "destructive";

    default:
      return "secondary";
  }
};

const BookingTable = ({ bookingData, page, limit }: BookingTableProps) => {
  return (
    <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/40">
              <TableHead className="w-[60px]">#</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Technician</TableHead>
              <TableHead>Schedule</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Booked At</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {bookingData.length > 0 ? (
              bookingData.map((booking, index) => {
                const customer = booking.customer;
                const technician = booking.technician?.technician;
                const service = booking.service;
                const availability = booking.availability;

                return (
                  <TableRow key={booking.id} className="hover:bg-muted/30">
                    {/* Serial */}
                    <TableCell className="font-medium">
                      {(page - 1) * limit + index + 1}
                    </TableCell>

                    {/* Customer */}
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9">
                          <AvatarImage
                            src={customer?.profileImage || ""}
                            alt={customer?.name || "Customer"}
                          />

                          <AvatarFallback>
                            {customer?.name?.slice(0, 2).toUpperCase() || "CU"}
                          </AvatarFallback>
                        </Avatar>

                        <div className="min-w-0">
                          <p className="font-medium">
                            {customer?.name || "N/A"}
                          </p>

                          <p className="max-w-[180px] truncate text-xs text-muted-foreground">
                            {customer?.email || "N/A"}
                          </p>
                        </div>
                      </div>
                    </TableCell>

                    {/* Service */}
                    <TableCell>
                      <div className="max-w-[200px]">
                        <p className="truncate font-medium">
                          {service?.title || "N/A"}
                        </p>

                        <p className="text-xs text-muted-foreground">
                          {service?.duration
                            ? `${service.duration} min`
                            : "N/A"}
                        </p>
                      </div>
                    </TableCell>

                    {/* Technician */}
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9">
                          <AvatarImage
                            src={technician?.profileImage || ""}
                            alt={technician?.name || "Technician"}
                          />

                          <AvatarFallback>
                            {technician?.name?.slice(0, 2).toUpperCase() ||
                              "TE"}
                          </AvatarFallback>
                        </Avatar>

                        <div className="min-w-0">
                          <p className="font-medium">
                            {technician?.name || "N/A"}
                          </p>

                          <p className="max-w-[180px] truncate text-xs text-muted-foreground">
                            {technician?.email || "N/A"}
                          </p>

                          <p className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Star className="h-4 w-4 text-amber-500" />
                            {booking.technician?.averageRating || "0"}
                          </p>
                        </div>
                      </div>
                    </TableCell>

                    {/* Schedule */}
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium capitalize">
                          {availability?.day?.toLowerCase() || "N/A"}
                        </span>

                        <span className="text-xs text-muted-foreground">
                          {availability?.startTime || "--"} -{" "}
                          {availability?.endTime || "--"}
                        </span>
                      </div>
                    </TableCell>

                    {/* Price */}
                    <TableCell>
                      <span className="font-semibold">
                        ৳{booking.totalPrice}
                      </span>
                    </TableCell>

                    {/* Status */}
                    <TableCell>
                      <Badge
                        variant={getStatusVariant(booking.status)}
                        className="capitalize"
                      >
                        {booking.status?.toLowerCase()}
                      </Badge>
                    </TableCell>

                    {/* Booked At */}
                    <TableCell>
                      <span className="whitespace-nowrap text-sm text-muted-foreground">
                        {new Date(booking.createdAt).toLocaleDateString(
                          "en-GB",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          },
                        )}
                      </span>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell
                  colSpan={8}
                  className="h-32 text-center text-muted-foreground"
                >
                  No bookings found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BookingTable;

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

type TBooking = {
  id: string;
  status: "PENDING" | "ACCEPTED" | "COMPLETED" | "CANCELLED";
};

type TAvailability = {
  id: string;
  day: string;
  startTime: string;
  endTime: string;
  booking: TBooking[];
};

type AvailabilityTableProps = {
  slots: TAvailability[];
};

const AvailabilityTable = ({ slots }: AvailabilityTableProps) => {
  const getStatusBadge = (status?: TBooking["status"]) => {
    if (!status) {
      return (
        <Badge className="bg-green-600 hover:bg-green-600">Available</Badge>
      );
    }

    switch (status) {
      case "COMPLETED":
        return <Badge variant="secondary">Completed</Badge>;

      case "ACCEPTED":
        return <Badge>Accepted</Badge>;

      case "PENDING":
        return <Badge variant="outline">Pending</Badge>;

      case "CANCELLED":
        return <Badge variant="destructive">Cancelled</Badge>;

      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Day</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {slots.length === 0 ? (
          <TableRow>
            <TableCell
              colSpan={3}
              className="py-8 text-center text-muted-foreground"
            >
              No availability found.
            </TableCell>
          </TableRow>
        ) : (
          slots.map((slot) => (
            <TableRow key={slot.id}>
              <TableCell className="font-medium capitalize">
                {slot.day.toLowerCase()}
              </TableCell>

              <TableCell>
                {slot.startTime} - {slot.endTime}
              </TableCell>

              <TableCell>{getStatusBadge(slot.booking[0]?.status)}</TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};

export default AvailabilityTable;

"use client";
import { TBooking } from "@/lib/type";
import { Calendar, Clock, DollarSign, Wrench, MapPin } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookingStatusBadge } from "../../customer/customerHome/BookingStatusBadge";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { editBooking } from "@/app/dashboard/_actions/technician/editBooking";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type MyBookingCardProps = {
  booking: TBooking;
};

const TechnicianBookingCard = ({ booking }: MyBookingCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  const [status, setStatus] = useState(booking.status);

  const handleSave = async () => {
    const payload = {
      status,
    };

    const result = await editBooking(booking.id, payload);

    // console.log("result", result);

    if (result.success) {
      toast.success("Booking updated successfully");
      setIsEditing(false);
      router.refresh();
    }
  };

  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <div>
          <h3 className="text-lg font-semibold">{booking.service.title}</h3>

          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
            {booking.service.description}
          </p>
        </div>
        {isEditing ? (
          <Select
            value={status}
            onValueChange={(value) => setStatus(value as TBooking["status"])}
          >
            <SelectTrigger className="w-36">
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="PENDING">Pending</SelectItem>
              <SelectItem value="ACCEPTED">Accepted</SelectItem>
              <SelectItem value="DECLINED">Declined</SelectItem>
              {/* <SelectItem value="PAID">Paid</SelectItem> */}
              <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
              <SelectItem value="COMPLETED">Completed</SelectItem>
              <SelectItem value="CANCELLED">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        ) : (
          BookingStatusBadge(booking.status)
        )}{" "}
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="grid gap-3 text-sm sm:grid-cols-2">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-primary" />
            <span>৳ {booking.totalPrice}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span>{booking.service.duration} mins</span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{booking.availability.day}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span>
              {booking.availability.startTime} - {booking.availability.endTime}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{booking.technician.location}</span>
          </div>

          <div className="flex items-center gap-2">
            <Wrench className="h-4 w-4 text-primary" />
            <span>{booking.technician.experience} Years Experience</span>
          </div>
        </div>

        {booking.note && (
          <div className="rounded-md border bg-muted/40 p-3 text-sm">
            <span className="font-medium">Customer Note:</span> {booking.note}
          </div>
        )}

        <div className="border-t pt-3 text-xs text-muted-foreground">
          Booked on {new Date(booking.createdAt).toLocaleDateString("en-GB")}
        </div>
      </CardContent>
      <CardFooter>
        <div className="border-t pt-4">
          {isEditing ? (
            <div className="space-y-3">
              {/* <Label>Status</Label>

              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="w-full sm:w-52">
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="PENDING">Pending</SelectItem>
                  <SelectItem value="ACCEPTED">Accepted</SelectItem>
                  <SelectItem value="DECLINED">Declined</SelectItem>
                  <SelectItem value="COMPLETED">Completed</SelectItem>
                </SelectContent>
              </Select> */}

              <div className="flex  gap-2">
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => {
                    setStatus(booking.status);
                    setIsEditing(false);
                  }}
                >
                  Cancel
                </Button>

                <Button className="w-full" onClick={handleSave}>
                  Save
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center w-full">
              <Button variant="outline" onClick={() => setIsEditing(true)}>
                Edit Status
              </Button>
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default TechnicianBookingCard;

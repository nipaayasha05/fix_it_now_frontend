import { TAvailability } from "@/lib/type";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Clock3, CircleCheck, Ban } from "lucide-react";

type AvailabilityCardProps = {
  slot: TAvailability;
};

export const AvailabilityCard = ({ slot }: AvailabilityCardProps) => {
  return (
    <div>
      {" "}
      <Card className="transition-shadow hover:shadow-md">
        <CardContent className="space-y-5 p-5">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">{slot.day}</h3>
            </div>

            <Badge variant={slot.isAvailable ? "default" : "destructive"}>
              {slot.isAvailable ? "Available" : "Blocked"}
            </Badge>
          </div>

          {/* Time */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock3 className="h-4 w-4" />
            <span>
              {slot.startTime} - {slot.endTime}
            </span>
          </div>

          {/* Booking */}
          <div className="flex items-center justify-between rounded-lg border bg-muted/40 p-3">
            <span className="text-sm font-medium">Total Bookings</span>

            <Badge variant="secondary">{slot.booking?.length || 0}</Badge>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t pt-4">
            {/* <div className="flex items-center gap-2 text-sm">
              {slot.isAvailable ? (
                <>
                  <CircleCheck className="h-4 w-4 text-green-600" />
                  <span className="text-green-600">Accepting Bookings</span>
                </>
              ) : (
                <>
                  <Ban className="h-4 w-4 text-red-600" />
                  <span className="text-red-600">Not Available</span>
                </>
              )}
            </div> */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AvailabilityCard;

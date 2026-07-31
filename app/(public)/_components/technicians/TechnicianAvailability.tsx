import { CalendarDays, CheckCircle2, Clock3, XCircle } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { TAvailability } from "@/lib/type";

type TechnicianAvailabilityProps = {
  availabilities: TAvailability[];
};

const dayMap: Record<string, string> = {
  SUNDAY: "Sunday",
  MONDAY: "Monday",
  TUESDAY: "Tuesday",
  WEDNESDAY: "Wednesday",
  THURSDAY: "Thursday",
  FRIDAY: "Friday",
  SATURDAY: "Saturday",
};

const formatTime = (time: string) => {
  const [hour, minute] = time.split(":");

  const date = new Date();

  date.setHours(Number(hour));
  date.setMinutes(Number(minute));

  return date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
};

const TechnicianAvailability = ({
  availabilities,
}: TechnicianAvailabilityProps) => {
  return (
    <Card className="rounded-3xl border shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <CalendarDays className="h-6 w-6 text-primary" />
          Weekly Availability
        </CardTitle>

        <p className="text-sm text-muted-foreground">
          Available working schedules for this technician.
        </p>
      </CardHeader>

      <CardContent>
        {availabilities.length === 0 ? (
          <div className="rounded-2xl border border-dashed py-10 text-center">
            <CalendarDays className="mx-auto mb-3 h-10 w-10 text-muted-foreground" />

            <h3 className="font-semibold">No Schedule Available</h3>

            <p className="mt-1 text-sm text-muted-foreground">
              This technician has not added any availability.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {availabilities.map((slot) => (
              <div
                key={slot.id}
                className="
                  group rounded-2xl border bg-background p-5
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-primary
                  hover:shadow-lg
                "
              >
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">
                    {dayMap[slot.day] ?? slot.day}
                  </h3>

                  {slot.isAvailable ? (
                    <Badge
                      className="
                        bg-green-100 
                        text-green-700
                        hover:bg-green-100
                        dark:bg-green-500/20
                        dark:text-green-400
                      "
                    >
                      Available
                    </Badge>
                  ) : (
                    <Badge variant="destructive">Closed</Badge>
                  )}
                </div>

                {/* Time */}
                <div className="mt-5 flex items-center gap-3 rounded-xl bg-muted p-3">
                  <Clock3 className="h-5 w-5 text-primary" />

                  <div>
                    <p className="text-xs text-muted-foreground">
                      Working Time
                    </p>

                    <p className="font-medium">
                      {formatTime(slot.startTime)} - {formatTime(slot.endTime)}
                    </p>
                  </div>
                </div>

                {/* Status */}
                <div className="mt-4">
                  {slot.isAvailable ? (
                    <div className="flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400">
                      <CheckCircle2 className="h-4 w-4" />
                      Ready for booking
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-sm font-medium text-red-500">
                      <XCircle className="h-4 w-4" />
                      Currently unavailable
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TechnicianAvailability;

import Link from "next/link";
import {
  CalendarDays,
  Clock3,
  CreditCard,
  MapPin,
  Wallet,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { TBooking } from "@/lib/type";
import { BookingStatusBadge } from "../customerHome/BookingStatusBadge";

type MyBookingCardProps = {
  booking: TBooking;
};

const MyBookingCard = ({ booking }: MyBookingCardProps) => {
  return (
    <Card className="overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Header */}
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-2">
            <CardTitle className="min-h-14 text-lg leading-7 line-clamp-2">
              {booking.service.title}
            </CardTitle>

            <CardDescription className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              {booking.technician.location}
            </CardDescription>
          </div>

          {BookingStatusBadge(booking.status)}
        </div>
      </CardHeader>

      {/* Content */}
      <CardContent>
        <div className="grid grid-cols-2 gap-3 lg:gap-4">
          <div className="rounded-xl bg-muted/50 p-4">
            <CalendarDays className="mb-2 h-5 w-5 text-primary" />
            <p className="text-xs text-muted-foreground">Day</p>
            <p className="font-medium">{booking.availability.day}</p>
          </div>

          <div className="rounded-xl bg-muted/50 p-4">
            <Clock3 className="mb-2 h-5 w-5 text-primary" />
            <p className="text-xs text-muted-foreground">Time</p>
            <p className="font-medium">
              {booking.availability.startTime} - {booking.availability.endTime}
            </p>
          </div>

          <div className="rounded-xl bg-muted/50 p-4">
            <Wrench className="mb-2 h-5 w-5 text-primary" />
            <p className="text-xs text-muted-foreground">Duration</p>
            <p className="font-medium">{booking.service.duration} Minutes</p>
          </div>

          <div className="rounded-xl bg-muted/50 p-4">
            <Wallet className="mb-2 h-5 w-5 text-primary" />
            <p className="text-xs text-muted-foreground">Price</p>
            <p className="font-bold text-primary">৳ {booking.totalPrice}</p>
          </div>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex flex-col gap-3">
        {booking.status === "ACCEPTED" && (
          <Link
            href={`/dashboard/customer/bookings/${booking.id}/pay`}
            className="w-full"
          >
            <Button className="w-full bg-cta text-cta-foreground hover:bg-cta/90">
              <CreditCard className="mr-2 h-4 w-4" />
              Pay Now
            </Button>
          </Link>
        )}

        {/* <Link
          href={`/dashboard/customer/bookings/${booking.id}`}
          className="w-full"
        >
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link> */}
      </CardFooter>
    </Card>
  );
};

export default MyBookingCard;

"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock3, CreditCard, User, Wrench } from "lucide-react";

type PaymentCardProps = {
  booking: TBooking;
};

import { createPayment } from "@/app/dashboard/_actions/customer/createPayment";
import { TBooking } from "@/lib/type";

export const PaymentCard = ({ booking }: PaymentCardProps) => {
  console.log(booking);
  const handlePayment = async () => {
    const result = await createPayment({ bookingId: booking.id });
    window.location.href = result.data.paymentUrl;
  };

  return (
    <div className="flex min-h-[calc(100vh-120px)] items-center justify-center px-4 py-10">
      <Card className="w-full max-w-xl shadow-lg">
        <CardHeader className="space-y-2">
          <CardTitle className="flex items-center justify-between">
            <span>Payment Summary</span>

            <Badge variant="secondary">{booking?.status}</Badge>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-5">
          <div className="flex items-center gap-3">
            <Wrench className="text-primary h-5 w-5" />
            <div>
              <p className="text-muted-foreground text-sm">Service</p>
              <p className="font-medium">{booking?.service?.title}</p>
            </div>
          </div>

          {/* <div className="flex items-center gap-3"> */}
          {/* <User className="text-primary h-5 w-5" /> */}
          {/* <div>
              <p className="text-muted-foreground text-sm">Technician</p>
              <p className="font-medium">{booking?.technician?.name}</p>
            </div> */}
          {/* </div> */}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3">
              <CalendarDays className="text-primary h-5 w-5" />
              <div>
                <p className="text-muted-foreground text-sm">Booking Date</p>
                <p className="font-medium">{booking?.availability?.day}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock3 className="text-primary h-5 w-5" />
              <div>
                <p className="text-muted-foreground text-sm">Time Slot</p>
                <p className="font-medium">
                  {booking?.availability?.startTime}-
                  {booking?.availability?.endTime}
                </p>
              </div>
            </div>
          </div>

          <div className="border-t pt-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CreditCard className="text-primary h-5 w-5" />
                <span className="font-medium">Total Amount</span>
              </div>

              <span className="text-primary text-2xl font-bold">
                ৳ {booking.totalPrice}
              </span>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <Button onClick={handlePayment} className="w-full" size="lg">
            Proceed to Payment
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PaymentCard;

import { createPayment } from "@/app/dashboard/_actions/customer/createPayment";
import { getMyBookings } from "@/app/dashboard/_actions/customer/getBooking";
import { getBookingById } from "@/app/dashboard/_actions/customer/getBookingById";
import PaymentCard from "@/app/dashboard/_components/customer/payment/PaymentCard";
import React from "react";

type props = {
  params: Promise<{ id: string }>;
};

const PaymentPage = async ({ params }: props) => {
  const { id } = await params;
  const booking = await getBookingById(id);
  return (
    <div>
      <PaymentCard booking={booking.data} />
    </div>
  );
};

export default PaymentPage;

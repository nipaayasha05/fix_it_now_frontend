import { CalendarDays, CircleCheckBig, Clock3, CreditCard } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookingStatusBadge } from "./BookingStatusBadge";
import { PaymentStatusBadge } from "./PaymentStatusBadge";
import { getMyPayments } from "@/app/dashboard/_actions/customer/getPayments";
import { getMyBookings } from "@/app/dashboard/_actions/customer/getBooking";
import CustomerChart from "./CustomerCharts";

interface Booking {
  id: string;
  totalPrice: number;
  status: string;
  createdAt: string;
  service: {
    title: string;
  };
}

interface Payment {
  id: string;
  amount: number;
  status: string;
  transactionId: string;
  paidAt: string | null;
  bookingId: string;
}

const CustomerOverview = async () => {
  const paymentResponse = await getMyPayments();
  const bookingResponse = await getMyBookings();

  const payments = paymentResponse.data ?? [];
  const bookings = bookingResponse.data ?? [];

  const totalBookings = bookings.length;

  const totalPayments = payments.filter(
    (payment: Payment) => payment.status === "SUCCESS",
  ).length;

  const pendingBookings = bookings.filter(
    (booking: Booking) => booking.status === "PENDING",
  ).length;

  const totalSpent = payments
    .filter((payment: Payment) => payment.status === "SUCCESS")
    .reduce((total: number, payment: Payment) => total + payment.amount, 0);

  const chartData = [
    {
      name: "Bookings",
      value: totalBookings,
    },
    {
      name: "Successful Payments",
      value: totalPayments,
    },
    {
      name: "Pending",
      value: pendingBookings,
    },
    {
      name: "Total Spent",
      value: totalSpent,
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Customer Dashboard</h1>

        <p className="text-muted-foreground">
          View your bookings and payments.
        </p>
      </div>

      {/* Overview */}

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">Total Bookings</CardTitle>

            <CalendarDays className="text-primary h-5 w-5" />
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold">{totalBookings}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">Successful Payments</CardTitle>

            <CircleCheckBig className="h-5 w-5 text-green-600" />
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold">{totalPayments}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">Pending Bookings</CardTitle>

            <Clock3 className="text-orange-500 h-5 w-5" />
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold">{pendingBookings}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">Total Spent</CardTitle>

            <CreditCard className="text-primary h-5 w-5" />
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold">৳{totalSpent}</p>
          </CardContent>
        </Card>
      </div>

      {/* Overview Chart */}

      <CustomerChart data={chartData} />

      {/* Recent Bookings */}

      <Card>
        <CardHeader>
          <CardTitle>Recent Bookings</CardTitle>

          <CardDescription>Your latest service bookings</CardDescription>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Service</TableHead>

                <TableHead>Status</TableHead>

                <TableHead>Price</TableHead>

                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {bookings.slice(0, 5).map((booking: Booking) => (
                <TableRow key={booking.id}>
                  <TableCell>{booking.service.title}</TableCell>

                  <TableCell>{BookingStatusBadge(booking.status)}</TableCell>

                  <TableCell>৳{booking.totalPrice}</TableCell>

                  <TableCell>
                    {new Date(booking.createdAt).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Recent Payments */}

      <Card>
        <CardHeader>
          <CardTitle>Recent Payments</CardTitle>

          <CardDescription>Latest successful transactions</CardDescription>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction</TableHead>

                <TableHead>Status</TableHead>

                <TableHead>Amount</TableHead>

                <TableHead>Paid At</TableHead>

                <TableHead></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {payments.slice(0, 5).map((payment: Payment) => (
                <TableRow key={payment.id}>
                  <TableCell className="font-medium">
                    {payment.transactionId?.slice(-10) ?? "N/A"}
                  </TableCell>

                  <TableCell>{PaymentStatusBadge(payment.status)}</TableCell>

                  <TableCell>৳{payment.amount}</TableCell>

                  <TableCell>
                    {payment.paidAt
                      ? new Date(payment.paidAt).toLocaleDateString()
                      : "-"}
                  </TableCell>

                  <TableCell>
                    {/* <Button size="sm">
                      <Link
                        href={`/dashboard/customer/bookings/${payment.bookingId}`}
                      >
                        View
                      </Link>
                    </Button> */}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomerOverview;

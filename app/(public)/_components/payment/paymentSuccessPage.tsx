import Link from "next/link";
import { CircleCheckBig } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PaymentSuccessPage = () => {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-muted/30 px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="items-center text-center">
          <div className="mb-4 rounded-full bg-green-100 p-4 dark:bg-green-900/20">
            <CircleCheckBig className="h-14 w-14 text-green-600" />
          </div>

          <CardTitle className="text-2xl">Payment Successful!</CardTitle>

          <CardDescription>
            Thank you! Your payment has been completed successfully.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-3 rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Status</span>
              <span className="font-medium text-green-600">Paid</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Booking</span>
              <span className="font-medium">Confirmed</span>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            You can track your booking and payment history from your dashboard.
          </p>

          {/* <div className="space-y-3">
            <Button className="w-full">
              <Link href="/dashboard/customer/bookings">View My Bookings</Link>
            </Button>

            <Button variant="outline" className="w-full">
              <Link href="/">Back to Home</Link>
            </Button>
          </div> */}
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentSuccessPage;

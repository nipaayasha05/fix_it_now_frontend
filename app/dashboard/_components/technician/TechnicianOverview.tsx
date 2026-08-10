/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { getMe } from "@/app/server/auth/getMe";
import { getTechnicianAvailability } from "../../_actions/technician/getTechnicianAvailability";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BookingStatusBadge } from "../customer/customerHome/BookingStatusBadge";
import { getDashboard } from "../../_actions/technician/getDashboard";
import TechnicianChart from "./TechnicianChart";

const TechnicianOverview = async () => {
  const availability = await getTechnicianAvailability();
  const technician = await getMe();
  const dashboard = await getDashboard();

  const profile = technician.data.technician;

  const slots = availability.data ?? [];

  const chartData = [
    {
      name: "Upcoming",
      value: dashboard.data?.upcomingJobs ?? 0,
    },
    {
      name: "Pending",
      value: dashboard.data?.pedingRequests ?? 0,
    },
    {
      name: "Completed",
      value: dashboard.data?.completedRequests ?? 0,
    },
    {
      name: "Earnings",
      value: dashboard.data?.totalEarnings ?? 0,
    },
    {
      name: "Experience",
      value: profile.experience ?? 0,
    },
    {
      name: "Rating",
      value: profile.averageRating ?? 0,
    },
    {
      name: "Reviews",
      value: profile.totalReviews ?? 0,
    },
    {
      name: "Availability",
      value: slots.length,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardContent className="flex flex-col justify-between gap-4 py-6 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold">
              Welcome, {technician.data.name}
            </h1>

            <p className="mt-1 text-muted-foreground">{profile.location}</p>
          </div>

          <Badge className="w-fit">{profile.status}</Badge>
        </CardContent>
      </Card>

      {/* Dashboard */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Upcoming Jobs</CardTitle>
            <CardDescription>Scheduled jobs</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold text-blue-600">
              {dashboard.data?.upcomingJobs}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Pending Requests</CardTitle>
            <CardDescription>Waiting for approval</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold text-amber-600">
              {dashboard.data?.pedingRequests}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Completed Jobs</CardTitle>
            <CardDescription>Total completed</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold text-green-600">
              {dashboard.data?.completedRequests}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total Earnings</CardTitle>
            <CardDescription>Paid earnings</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold text-emerald-600">
              ৳{dashboard.data?.totalEarnings}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Experience</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold">{profile.experience}</p>

            <p className="text-sm text-muted-foreground">Years</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Average Rating</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold">
              ⭐ {profile.averageRating ?? 0}
            </p>

            <p className="text-sm text-muted-foreground">Overall rating</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Reviews</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold">{profile.totalReviews}</p>

            <p className="text-sm text-muted-foreground">Customer reviews</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Availability</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold">{slots.length}</p>

            <p className="text-sm text-muted-foreground">Total time slots</p>
          </CardContent>
        </Card>
      </div>

      {/* Job Chart */}
      <TechnicianChart data={chartData} />

      {/* Bio & Skills */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>About Me</CardTitle>

            <CardDescription>Professional information</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="leading-7 text-muted-foreground">{profile.bio}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>

            <CardDescription>Your expertise</CardDescription>
          </CardHeader>

          <CardContent className="flex flex-wrap gap-2">
            {profile.skills.map((skill: string) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Availability */}
      <Card>
        <CardHeader>
          <CardTitle>My Availability</CardTitle>

          <CardDescription>
            Your available schedule and booking status
          </CardDescription>
        </CardHeader>

        <CardContent>
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
                slots.map((slot: any) => {
                  const booking = slot.booking[0];

                  return (
                    <TableRow key={slot.id}>
                      <TableCell className="font-medium capitalize">
                        {slot.day.toLowerCase()}
                      </TableCell>

                      <TableCell>
                        {slot.startTime} - {slot.endTime}
                      </TableCell>

                      <TableCell>
                        {booking ? (
                          BookingStatusBadge(booking.status)
                        ) : (
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            AVAILABLE
                          </Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default TechnicianOverview;

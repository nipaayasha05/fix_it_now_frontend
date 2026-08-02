import React from "react";
import { getOverview } from "../../_actions/admin/getOverview";
import { Users, CalendarCheck, DollarSign } from "lucide-react";

const Admin = async () => {
  const overview = await getOverview();

  const data = overview?.data;

  const cards = [
    {
      title: "Total Users",
      value: data?.totalUsers ?? 0,
      icon: Users,
      description: "Registered users",
    },
    {
      title: "Active Bookings",
      value: data?.activeBookings ?? 0,
      icon: CalendarCheck,
      description: "Currently active bookings",
    },
    {
      title: "Total Revenue",
      value: `৳ ${data?.totalRevenue ?? 0}`,
      icon: DollarSign,
      description: "Total earnings",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your platform performance
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {card.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                    {card.value}
                  </h2>
                </div>

                <div className="rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  <Icon size={24} />
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Admin;

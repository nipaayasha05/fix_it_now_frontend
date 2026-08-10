"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type ChartData = {
  name: string;
  value: number;
};

const CustomerChart = ({ data }: { data: ChartData[] }) => {
  return (
    <div className="w-full rounded-xl border bg-white p-5 shadow-sm dark:bg-gray-900">
      <div className="mb-5">
        <h2 className="text-lg font-semibold">Booking & Payment Overview</h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Your current booking and payment statistics
        </p>
      </div>

      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -15,
              bottom: 5,
            }}
            barCategoryGap="25%"
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              className="stroke-gray-200 dark:stroke-gray-800"
            />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11 }}
            />

            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11 }} />

            <Tooltip
              cursor={{
                fill: "rgba(59, 130, 246, 0.05)",
              }}
              contentStyle={{
                borderRadius: "10px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
            />

            <Bar dataKey="value" radius={[6, 6, 0, 0]} maxBarSize={50} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CustomerChart;

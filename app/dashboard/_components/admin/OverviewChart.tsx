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

const OverviewChart = ({ data }: { data: ChartData[] }) => {
  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Platform Overview
        </h2>

        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Current platform performance
        </p>
      </div>

      {/* Chart */}
      <div className="h-[260px] w-full sm:h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
            barCategoryGap="30%"
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
              tick={{
                fontSize: 12,
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 11,
              }}
            />

            <Tooltip
              cursor={{ fill: "rgba(59, 130, 246, 0.05)" }}
              contentStyle={{
                borderRadius: "10px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
            />

            <Bar dataKey="value" radius={[6, 6, 0, 0]} maxBarSize={55} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OverviewChart;

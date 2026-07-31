import {
  Award,
  BriefcaseBusiness,
  MessageSquareText,
  Star,
  Wrench,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { TTechnician } from "@/lib/type";

type TechnicianStatsProps = {
  technician: TTechnician;
};

const TechnicianStats = ({ technician }: TechnicianStatsProps) => {
  const stats = [
    {
      title: "Average Rating",
      value: technician.averageRating ?? "0",
      icon: Star,
      suffix: "/5",
    },
    {
      title: "Total Reviews",
      value: technician.totalReviews ?? 0,
      icon: MessageSquareText,
      suffix: "",
    },
    {
      title: "Completed Jobs",
      value:
        technician.bookings?.filter((booking) => booking.status === "COMPLETED")
          .length ?? 0,
      icon: BriefcaseBusiness,
      suffix: "",
    },
    {
      title: "Services",
      value: technician.services?.length ?? 0,
      icon: Wrench,
      suffix: "",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <Card
            key={item.title}
            className="
              group
              rounded-3xl
              border
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-primary
              hover:shadow-lg
            "
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                {/* Icon */}
                <div
                  className="
                    rounded-2xl
                    bg-primary/10
                    p-3
                    transition
                    group-hover:bg-primary
                  "
                >
                  <Icon
                    className="
                      h-6 w-6
                      text-primary
                      group-hover:text-primary-foreground
                    "
                  />
                </div>

                {/* Value */}
                <div className="text-right">
                  <h2 className="text-3xl font-bold">
                    {item.value}
                    <span className="text-xl text-muted-foreground">
                      {item.suffix}
                    </span>
                  </h2>

                  <p className="text-sm text-muted-foreground">{item.title}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default TechnicianStats;

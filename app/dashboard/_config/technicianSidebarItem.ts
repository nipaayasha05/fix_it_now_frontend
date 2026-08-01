import { ISidebarItem } from "@/lib/type";
import {
  BriefcaseBusiness,
  CalendarCheck,
  CalendarDays,
  FileText,
  LayoutDashboard,
} from "lucide-react";

export const TECHNICIAN_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard/technician",
    icon: LayoutDashboard,
  },
  {
    label: "Completed Profile",
    href: "/dashboard/technician/profile",
    icon: FileText,
  },
  {
    label: "Bookings",
    href: "/dashboard/technician/bookings",
    icon: CalendarCheck,
  },
  {
    label: "Availability",
    href: "/dashboard/technician/availability",
    icon: CalendarDays,
  },
  {
    label: "Services",
    href: "/dashboard/technician/services",
    icon: BriefcaseBusiness,
  },
];

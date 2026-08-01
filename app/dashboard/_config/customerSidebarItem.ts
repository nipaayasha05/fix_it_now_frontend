import { ISidebarItem } from "@/lib/type";
import { FileText, LayoutDashboard, MessageSquareText } from "lucide-react";

export const CUSTOMER_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard/customer",
    icon: LayoutDashboard,
  },
  {
    label: "My Bookings",
    href: "/dashboard/customer/bookings",
    icon: FileText,
  },
  {
    label: "My Reviews",
    href: "/dashboard/customer/reviews/eligible",
    icon: MessageSquareText,
  },
];

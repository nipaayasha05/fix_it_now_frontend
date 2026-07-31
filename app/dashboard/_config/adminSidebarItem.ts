import { ISidebarItem } from "@/lib/type";
import { FileText, LayoutDashboard } from "lucide-react";

export const ADMIN_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    label: "Dashboard",
    href: "/adminDashboard",
    icon: LayoutDashboard,
  },
  {
    label: "My Posts",
    href: "/dashboard/my-posts",
    icon: FileText,
  },
];

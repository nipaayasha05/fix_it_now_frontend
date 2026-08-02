import { ISidebarItem } from "@/lib/type";
import {
  FileText,
  FolderTree,
  LayoutDashboard,
  Tags,
  Users,
} from "lucide-react";

export const ADMIN_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    label: "Dashboard",
    href: "/adminDashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Users",
    href: "/dashboard/admin/users",
    icon: Users,
  },
  {
    label: "Categories",
    href: "/dashboard/admin/categories",
    icon: Tags,
  },
];

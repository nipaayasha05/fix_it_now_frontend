"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ISidebarItem } from "@/lib/type";
import { sidebarMenuItems } from "../../_config/sidebarMenuItems";
import { useContext } from "react";
import { userContext } from "@/app/context/userContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function DashboardSidebar() {
  const pathname = usePathname();
  const user = useContext(userContext);

  let sidebarItems: ISidebarItem[] = [];

  if (user?.data?.role === "CUSTOMER") {
    sidebarItems = sidebarMenuItems.CUSTOMER;
  } else if (user?.data?.role === "TECHNICIAN") {
    sidebarItems = sidebarMenuItems.TECHNICIAN;
  } else if (user?.data?.role === "ADMIN") {
    sidebarItems = sidebarMenuItems.ADMIN;
  }

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    isActive={pathname === item.href}
                    render={<Link href={item.href} />}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Avatar>
          <AvatarImage src={user?.data?.profileImage} />
          <AvatarFallback>{user?.data?.name}</AvatarFallback>
        </Avatar>
      </SidebarFooter>
    </Sidebar>
  );
}

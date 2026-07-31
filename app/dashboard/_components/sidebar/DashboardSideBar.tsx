"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ISidebarItem } from "@/lib/type";
import { sidebarMenuItems } from "../../_config/sidebarMenuItems";
import { useContext } from "react";
import { userContext } from "@/app/context/userContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "@/components/shared/logo";
import Image from "next/image";

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
  const { state } = useSidebar();
  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarHeader className="h-14 px-2">
        <Link href="/" className="flex items-center gap-2 overflow-hidden">
          <Image
            src="/fixItNow1.png"
            alt="Light Logo"
            width={40}
            height={40}
            className="block h-10 w-10 shrink-0 object-contain dark:hidden"
          />

          <Image
            src="/fixDarkOrange2.png"
            alt="Dark Logo"
            width={40}
            height={40}
            className="hidden h-10 w-10 shrink-0 object-contain dark:block"
          />

          {state !== "collapsed" && (
            <h1 className="text-2xl font-extrabold tracking-tight whitespace-nowrap">
              <span className="text-slate-900 dark:text-white">Fix</span>
              <span className="text-blue-600 dark:text-blue-400">It</span>
              <span className="text-orange-500 dark:text-orange-400">Now</span>
            </h1>
          )}
        </Link>
      </SidebarHeader>
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

import React from "react";
import { Navbar } from "../../components/shared/navbar";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import UserProvider from "../context/UserProvider";
import DashboardSidebar from "./_components/sidebar/DashboardSideBar";
import { getMe } from "../server/auth/getMe";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getMe();
  return (
    <div className="min-h-screen ">
      <UserProvider user={user}>
        <SidebarProvider>
          <DashboardSidebar />
          <main className="flex-1 min-w-0">
            <header className="flex h-14 items-center border-b px-4">
              <SidebarTrigger />
            </header>
            <div className="p-4 container mx-auto">{children}</div>
          </main>
        </SidebarProvider>
      </UserProvider>
    </div>
  );
};

export default DashboardLayout;

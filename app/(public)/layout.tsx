import { Navbar } from "@/components/shared/navbar";
import React from "react";
import UserProvider from "../context/UserProvider";
import { getMe } from "../server/auth/getMe";

// import { getMe } from "../service/getMe";

const PublicLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getMe();
  return (
    <div className="">
      <UserProvider user={user}>
        <Navbar />
        {children}
      </UserProvider>
    </div>
  );
};

export default PublicLayout;

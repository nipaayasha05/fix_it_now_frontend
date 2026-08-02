import { Navbar } from "@/components/shared/navbar";
import React from "react";
import UserProvider from "../context/UserProvider";
import { getMe } from "../server/auth/getMe";
import Footer from "@/components/shared/footer";

// import { getMe } from "../service/getMe";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getMe();
  return (
    <div className="">
      <UserProvider user={user}>
        <Navbar />
        {children}
        <Footer />
      </UserProvider>
    </div>
  );
};

export default AuthLayout;

import { Navbar } from "@/components/shared/navbar";
import React from "react";

// import { getMe } from "../service/getMe";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  //   const user = await getMe();
  return (
    <div className="">
      <Navbar />
      {children}
    </div>
  );
};

export default AuthLayout;

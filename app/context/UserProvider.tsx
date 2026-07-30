"use client";
import { TUserResponse } from "@/lib/type";
import { userContext } from "./userContext";

type UserProviderProps = {
  children: React.ReactNode;
  user: TUserResponse | null;
};

export default function UserProvider({ children, user }: UserProviderProps) {
  return <userContext.Provider value={user}>{children}</userContext.Provider>;
}

"use server";
import { cookies } from "next/headers";

export const getMe = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  if (!accessToken) {
    return {
      success: false,
      error: "Access token not found",
    };
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/me`, {
    method: "GET",
    headers: {
      Cookie: `accessToken=${accessToken}`,
      Authorization: `${accessToken}`,
    },
    cache: "no-cache",
  });
  const result = await res.json();
  return result;
};

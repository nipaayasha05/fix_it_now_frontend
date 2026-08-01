"use server";
import { isAccessTokenExists } from "@/app/server/auth/refreshToken";

export const getMyBookings = async () => {
  const accessToken = await isAccessTokenExists();

  if (!accessToken) {
    return {
      success: false,
      error: "Access token not found",
    };
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/bookings`, {
    method: "GET",
    headers: {
      Cookie: `accessToken=${accessToken}`,
      Authorization: `${accessToken}`,
    },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(res.statusText || "Failed to get bookings");
  }
  const result = await res.json();
  return result;
};

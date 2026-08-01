"use server";

import { isAccessTokenExists } from "@/app/server/auth/refreshToken";

export const getBookingById = async (id: string) => {
  const accessToken = await isAccessTokenExists();
  if (!accessToken) {
    return {
      success: false,
      error: "Access token not found",
    };
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/bookings/${id}`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
      Authorization: `${accessToken}`,
    },
    cache: "no-store",
  });

  const result = await res.json();
  if (!res.ok) {
    throw new Error(result.message || "Failed to get booking");
  }
  return result;
};

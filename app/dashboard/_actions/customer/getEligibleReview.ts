"use server";
import { isAccessTokenExists } from "@/app/server/auth/refreshToken";

export const getEligibleReviews = async () => {
  const accessToken = await isAccessTokenExists();

  if (!accessToken) {
    return {
      success: false,
      error: "Access token not found",
    };
  }

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/bookings/reviews/eligible`,
    {
      method: "GET",
      headers: {
        Cookie: `accessToken=${accessToken}`,
        Authorization: `${accessToken}`,
      },
      cache: "no-store",
    },
  );
  if (!res.ok) {
    throw new Error(res.statusText || "Failed to get reviews");
  }
  const result = await res.json();
  return result;
};

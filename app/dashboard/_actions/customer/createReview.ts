"use server";
import { isAccessTokenExists } from "@/app/server/auth/refreshToken";
// import { revalidateTag } from "next/cache";

export const createReview = async (payload: {
  bookingId: string;
  rating: number;
  comment?: string;
}) => {
  const accessToken = await isAccessTokenExists();

  if (!accessToken) {
    return {
      success: false,
      error: "Access token not found",
    };
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/reviews`, {
    method: "POST",
    headers: {
      Cookie: `accessToken=${accessToken}`,
      Authorization: `${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Failed to create review");
  }

  return result;
};

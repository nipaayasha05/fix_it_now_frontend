"use server";

import { isAccessTokenExists } from "@/app/server/auth/refreshToken";

export const getAllBookings = async ({
  query,
  page = 1,
  limit = 10,
}: {
  query?: { [key: string]: string | string[] | undefined };
  page?: number;
  limit?: number;
}) => {
  // console.log("BOOKING 1");
  const accessToken = await isAccessTokenExists();

  // console.log("BOOKING 2", !!accessToken);

  if (!accessToken) {
    return {
      success: false,
      error: "Access token not found",
    };
  }

  const params = new URLSearchParams();

  if (query && query.searchTerm) {
    params.set("searchTerm", query.searchTerm as string);
  }
  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (typeof value === "string" && value.trim() !== "") {
        params.set(key, value);
      }
    });
  }

  params.set("page", page.toString());
  params.set("limit", limit.toString());

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/bookings/admin?${params.toString()}`,
    {
      headers: {
        Cookie: `accessToken=${accessToken}`,
        Authorization: `${accessToken}`,
      },
      cache: "no-store",
    },
  );

  const result = await res.json();
  if (!result.success) {
    throw new Error(result.message || "Failed to get bookings");
  }
  return result;
};

"use server";
import { isAccessTokenExists } from "@/app/server/auth/refreshToken";

export const getMyBookings = async ({
  query,
  page = 1,
  limit = 6,
}: {
  query?: { [key: string]: string | string[] | undefined };
  page?: number;
  limit?: number;
}) => {
  const accessToken = await isAccessTokenExists();

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
    `${process.env.BACKEND_API_URL}/api/bookings?${params.toString()}`,
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
    throw new Error(res.statusText || "Failed to get bookings");
  }
  const result = await res.json();
  return result;
};

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
    next: {
      revalidate: 60,
      tags: ["bookings"],
    },
  });
  if (!res.ok) {
    throw new Error(res.statusText || "Failed to get bookings");
  }
  const result = await res.json();
  return result;
};

export const getMyPayments = async () => {
  const accessToken = await isAccessTokenExists();

  if (!accessToken) {
    return {
      success: false,
      error: "Access token not found",
    };
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/payments`, {
    method: "GET",
    headers: {
      Cookie: `accessToken=${accessToken}`,
      Authorization: `${accessToken}`,
    },
    cache: "no-store",
    next: {
      revalidate: 60,
      tags: ["payments"],
    },
  });
  if (!res.ok) {
    throw new Error(res.statusText || "Failed to get payments");
  }
  const result = await res.json();
  return result;
};

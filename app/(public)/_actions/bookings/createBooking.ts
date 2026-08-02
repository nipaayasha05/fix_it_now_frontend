"use server";
import { isAccessTokenExists } from "@/app/server/auth/refreshToken";
// import { revalidateTag } from "next/cache";

export const createBookings = async (payload: {
  technicianId: string;
  serviceId: string;
  availabilityId: string;
}) => {
  const accessToken = await isAccessTokenExists();

  if (!accessToken || typeof accessToken !== "string") {
    return {
      success: false,
      message: "Please login to book a technician.",
    };
  }

  // if (!accessToken) {
  //   return {
  //     success: false,
  //     error: "Access token not found",
  //   };
  // }

  if (!accessToken) {
    throw new Error("Please login to book a technician.");
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/bookings`, {
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
    return {
      success: false,
      message: result.message || "Failed to create booking",
    };
  }

  // revalidateTag("technicians", "max");
  // revalidateTag(`technician-${payload.technicianId}`, "max");

  return {
    success: true,
    data: result,
  };
};

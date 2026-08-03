"use server";
import { isAccessTokenExists } from "@/app/server/auth/refreshToken";
import { TAvailability } from "@/lib/type";
// import { revalidateTag } from "next/cache";

export type CreateAvailabilityPayload = {
  slots: {
    day: string;
    startTime: string;
    endTime: string;
    isAvailable: boolean;
  }[];
};

export const createAvailability = async (
  payload: CreateAvailabilityPayload,
) => {
  const accessToken = await isAccessTokenExists();

  if (!accessToken) {
    return {
      success: false,
      error: "Access token not found",
    };
  }

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/technician/availability`,
    {
      method: "POST",
      headers: {
        Cookie: `accessToken=${accessToken}`,
        Authorization: `${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  const result = await res.json();

  // console.log("Status:", res.status);
  // console.log("Response:", result);

  if (!res.ok) {
    throw new Error(result.message || "Failed to create availability");
  }

  return result;
};

"use server";

import { isAccessTokenExists } from "@/app/server/auth/refreshToken";
import { TService } from "@/lib/type";

export const postMyServices = async (payload: TService) => {
  const accessToken = await isAccessTokenExists();

  if (!accessToken) {
    return {
      success: false,
      error: "Access token not found",
    };
  }

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/technician/services`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${accessToken}`,
        Authorization: `${accessToken}`,
      },
      body: JSON.stringify(payload),
    },
  );

  const result = await res.json();
  if (!res.ok) {
    throw new Error(result.message || "Failed to get services");
  }
  return result;
};

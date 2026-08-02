"use server";

import { isAccessTokenExists } from "@/app/server/auth/refreshToken";
import { TCategory, TService } from "@/lib/type";

export const createCategory = async (payload: TCategory) => {
  const accessToken = await isAccessTokenExists();

  if (!accessToken) {
    return {
      success: false,
      error: "Access token not found",
    };
  }

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/admin/categories`,
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
    throw new Error(result.message || "Failed to create category");
  }
  return result;
};

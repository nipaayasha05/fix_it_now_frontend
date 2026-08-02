"use server";
import { isAccessTokenExists } from "@/app/server/auth/refreshToken";
// import { revalidateTag } from "next/cache";

export type CreateTechnicianPayload = {
  bio?: string;
  experience: number;
  location: string;
  skills: string[];
};

export const createTechnician = async (payload: CreateTechnicianPayload) => {
  const accessToken = await isAccessTokenExists();

  if (!accessToken) {
    return {
      success: false,
      error: "Access token not found",
    };
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/technician`, {
    method: "POST",
    headers: {
      Cookie: `accessToken=${accessToken}`,
      Authorization: `${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Failed to create technician");
  }

  return result;
};

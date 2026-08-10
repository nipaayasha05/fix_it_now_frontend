"use server";

import { isAccessTokenExist } from "@/app/server/auth/refreshToken";
import { TUser } from "@/lib/type";

export interface UpdateMyInfoPayload {
  name?: string;
  phone?: string;
  profileImage?: string | null;
}

export const editMyInfo = async (
  userId: string,
  payload: UpdateMyInfoPayload,
) => {
  const accessToken = await isAccessTokenExist();
  // console.log(accessToken);
  if (!accessToken) {
    // throw new Error("User not logged in");
    return {
      success: false,
      message: "User not logged in",
    };
  }

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/auth/me/${userId}`,
    {
      method: "PATCH",
      headers: {
        // "Authorization":`Bearer ${accessToken.value}`
        Cookie: `accessToken=${accessToken}`,
        Authorization: `${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  const data = await res.json();

  return data;
};

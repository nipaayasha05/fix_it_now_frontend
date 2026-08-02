"use server";

import { isAccessTokenExist } from "@/app/server/auth/refreshToken";
import { TUser } from "@/lib/type";

export const editUsers = async (userId: string, payload: Partial<TUser>) => {
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
    `${process.env.BACKEND_API_URL}/api/admin/users/${userId}`,
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

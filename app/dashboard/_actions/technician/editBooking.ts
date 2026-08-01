"use server";

import { isAccessTokenExist } from "@/app/server/auth/refreshToken";
import { TBooking } from "@/lib/type";

export const editBooking = async (
  bookingId: string,
  payload: Partial<TBooking>,
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
    `${process.env.BACKEND_API_URL}/api/technician/bookings/${bookingId}`,
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

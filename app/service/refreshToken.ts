import { cookies } from "next/headers";
import { jwtUtils } from "../utils/jwt";

export const getNewAccessToken = async () => {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("refreshToken")?.value;

  if (!refreshToken) {
    return {
      success: false,
      error: "Refresh token not found",
    };
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/refresh`, {
    method: "POST",
    headers: {
      Cookie: `refreshToken=${refreshToken}`,
    },
    cache: "no-cache",
  });
  const result = await res.json();
  return result;
};

export const isAccessTokenExist = async () => {
  const cookieStore = await cookies();

  let accessToken = cookieStore.get("accessToken")?.value || null;

  const refreshToken = cookieStore.get("refreshToken")?.value || null;

  if (!accessToken && !refreshToken) {
    return {
      success: false,
      error: "Access token and refresh token not found",
    };
  }

  const decodedAccessToken = accessToken
    ? jwtUtils.verifiedToken(
        accessToken,
        process.env.JWT_ACCESS_SECRET as string,
      )
    : null;

  const decodedRefreshToken = refreshToken
    ? jwtUtils.verifiedToken(
        refreshToken,
        process.env.JWT_REFRESH_SECRET as string,
      )
    : null;

  if (!decodedAccessToken?.success && !decodedRefreshToken?.success) {
    const result = await getNewAccessToken();
    console.log(result);

    if (result.success) {
      const newAccessToken = result.data.accessToken;

      cookieStore.set("accessToken", newAccessToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 24,
        sameSite: true,
      });
      accessToken = newAccessToken;
    }
  }
  return accessToken;
};

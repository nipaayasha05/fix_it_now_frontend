import { NextRequest, NextResponse } from "next/server";
import { jwtUtils } from "./app/utils/jwt";
import { getNewAccessToken } from "./app/server/auth/refreshToken";
import { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";

const AUTH_ROUTES = ["/auth/login", "/auth/register"];

const PUBLIC_ROUTES = ["/", "/services", "/technician", "/about"];

export async function proxy(request: NextRequest) {
  const response = NextResponse.next();
  const pathname = request.nextUrl.pathname;
  const cookieStore = await cookies();

  let accessToken = request.cookies.get("accessToken")?.value;

  const refreshToken = request.cookies.get("refreshToken")?.value;

  let decodedAccessToken = accessToken
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

  if (!decodedAccessToken?.success && decodedRefreshToken?.success) {
    console.log("refreshToken is valid");

    const result = await getNewAccessToken();
    console.log(result, "result");

    if (result.success) {
      const newAccessToken = result.data.accessToken;

      response.cookies.set("accessToken", newAccessToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 24,
        sameSite: "lax",
      });
      accessToken = newAccessToken;
      decodedAccessToken = jwtUtils.verifiedToken(
        accessToken!,
        process.env.JWT_ACCESS_SECRET as string,
      );
    }
  }

  let userRole = null;

  if (!decodedAccessToken?.success) {
    response.cookies.delete("accessToken");
  }

  if (decodedAccessToken?.success && decodedAccessToken.data) {
    userRole = (decodedAccessToken.data as JwtPayload).role;
  }

  //   if (decodedAccessToken && AUTH_ROUTES.includes(pathname)) {
  //     if (userRole === "CUSTOMER") {
  //       return NextResponse.redirect(new URL("/", request.url));
  //     }
  //   } else if (userRole === "TECHNICIAN") {
  //     return NextResponse.redirect(new URL("/dashboard/technician", request.url));
  //   } else if (userRole === "ADMIN") {
  //     return NextResponse.redirect(new URL("/dashboard/admin", request.url));
  //   } else {
  //     return NextResponse.redirect(new URL("/", request.url));
  //   }

  const isPublicRoute = PUBLIC_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );

  const isAuthRoute = AUTH_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );

  if (isAuthRoute && decodedAccessToken?.success) {
    if (userRole === "CUSTOMER") {
      return NextResponse.redirect(new URL("/", request.url));
    }

    if (userRole === "TECHNICIAN") {
      return NextResponse.redirect(
        new URL("/dashboard/technician", request.url),
      );
    }

    if (userRole === "ADMIN") {
      return NextResponse.redirect(new URL("/dashboard/admin", request.url));
    }
  }

  if (!accessToken && !isPublicRoute && !isAuthRoute) {
    const loginUrl = new URL("/auth/login", request.url);

    loginUrl.searchParams.set("redirectTo", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (
    pathname.startsWith("/dashboard/technician") &&
    userRole !== "TECHNICIAN"
  ) {
    return NextResponse.redirect(new URL("/not-found", request.url));
  } else if (pathname.startsWith("/dashboard/admin") && userRole !== "ADMIN") {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }
  return response;
}

export const config = {
  matcher: [
    // "/dashboard/:path*",
    // "/adminDashboard/:path*",
    // "/authorDashboard/:path*",
    "/((?!api|_next/static|favicon.ico|.*\\.png$).*)",
  ],
};

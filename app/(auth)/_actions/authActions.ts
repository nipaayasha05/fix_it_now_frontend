"use server";
import jwt, { JwtPayload } from "jsonwebtoken";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { LoginFormValues, RegisterFormValues } from "@/lib/type";

// type LoginState = {
//   success: true;
//   statusCode: number;
//   message: string;
//   data: {
//     accessToken: string;
//     refreshToken: string;
//   };
// };

export const loginAction = async (
  redirectTo: string,
  data: LoginFormValues,
) => {
  const email = data.email;
  const password = data.password;
  console.log(email, password);

  const payload = {
    email,
    password,
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  );
  const result = await res.json();

  console.log(result);

  if (result.success) {
    const cookieStore = await cookies();

    cookieStore.set("accessToken", result.data.accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      sameSite: true,
    });

    cookieStore.set("refreshToken", result.data.refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
      sameSite: true,
    });

    const decodedToken = jwt.decode(result.data.accessToken) as JwtPayload;

    if (decodedToken.role === "TECHNICIAN") {
      redirect("/dashboard/technician/profile");
    }
    if (
      redirectTo &&
      typeof redirectTo === "string" &&
      redirectTo.startsWith("/") &&
      !redirectTo.startsWith("//")
    ) {
      redirect(redirectTo);
    }
  }

  return result;
};

export type ActionState = {
  success: boolean;
  message: string;
};

export const registerAction = async (
  redirectTo: string,
  data: RegisterFormValues,
) => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await res.json();

  if (result.success) {
    // redirect("/auth/login");
  }

  console.log(result);
  // console.log(result.data.user.profile);
  return result;
};

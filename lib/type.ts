import z from "zod";
import { loginSchema, registerSchema } from "./validation/auth.validation";

// type LoginFormValues = {
//   email: string;
//   password: string;
// };

export type LoginFormValues = z.infer<typeof loginSchema>;

// export type RegisterFormValues = {
//   name: string;
//   email: string;
//   phone: string;
//   password: string;
//   role: "CUSTOMER" | "TECHNICIAN";
//   profileImage?: string;
// };

export type RegisterFormValues = z.infer<typeof registerSchema>;

export type TUser = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "CUSTOMER" | "TECHNICIAN" | "ADMIN";
  status: "ACTIVE" | "BANNED";
  profileImage?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TUserResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: TUser;
};

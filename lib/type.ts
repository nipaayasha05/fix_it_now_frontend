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

export type TTechnician = {
  id: string;
  technicianId: string;
  bio: string | null;
  experience: number;
  location: string;
  skills: string[];
  status: "AVAILABLE" | "UNAVAILABLE";
  averageRating: string;
  totalReviews: number;
  createdAt: string;
  updatedAt: string;

  technician: TUser;
};

export type TCategory = {
  id: string;
  name: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
};

export type TService = {
  id: string;
  title: string;
  description: string | null;
  price: number;
  duration: number | null;
  technicianId: string;
  categoryId: string;
  createdAt: string;
  updatedAt: string;

  technician: TTechnician;
  category: TCategory;
};

export type TServicesResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: TService[];
};

export type TServiceResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: TService;
};

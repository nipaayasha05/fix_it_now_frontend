import z from "zod";
import { loginSchema, registerSchema } from "./validation/auth.validation";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { LucideProps } from "lucide-react";

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
  technician?: TTechnician;
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
  services: TService[];
  bookings: TBooking[];
  availabilities: TAvailability[];
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

export type TAvailability = {
  id: string;
  technicianId: string;
  day: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TReview = {
  id: string;

  customerId: string;
  technicianId: string;
  bookingId: string;

  rating: number;
  comment?: string | null;

  createdAt: Date;
  updatedAt: Date;
};

export type TBooking = {
  id: string;

  customerId: string;

  technicianId: string;

  serviceId: string;

  availabilityId: string;

  note?: string | null;

  totalPrice: number;
  status:
    | "PENDING"
    | "ACCEPTED"
    | "DECLINED"
    | "IN_PROGRESS"
    | "COMPLETED"
    | "CANCELLED";

  createdAt: Date;
  updatedAt: Date;

  customer: TUser;
  technician: TTechnician;
  service: TService;
  availability: TAvailability;
  reviews?: TReview[];
  payment?: TPayment;
};

export type ISidebarItem = {
  label: string;
  href: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

export type TPayment = {
  id: string;
  bookingId: string;
  customerId: string;
  amount: number;
  stripeCustomerId: string | null;
  transactionId: string | null;
  paidAt: Date | null;
  status: "PENDING" | "SUCCESS" | "FAILED";
  createdAt: Date;
  updatedAt: Date;
};

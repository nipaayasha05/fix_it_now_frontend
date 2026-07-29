export type LoginFormValues = {
  email: string;
  password: string;
};

export enum Role {
  USER = "USER",
  TECHNICIAN = "TECHNICIAN",
  ADMIN = "ADMIN",
}

export type RegisterFormValues = {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: "USER" | "TECHNICIAN";
  profileImage?: string;
};

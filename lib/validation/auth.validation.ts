import z from "zod";

export const loginSchema = z.object({
  email: z.email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const registerSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.email("Please enter a valid email"),
  phone: z.string().min(11, "Phone number must be at least 11 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  role: z.enum(["CUSTOMER", "TECHNICIAN"]),
  profileImage: z.string().optional(),
});

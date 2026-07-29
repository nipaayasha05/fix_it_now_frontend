"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Lock, Mail, Phone, Upload, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller, useForm } from "react-hook-form";
import { RegisterFormValues } from "@/lib/type";
import { registerAction } from "../_actions/authActions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { registerSchema } from "@/lib/validation/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const [serverError, setServerError] = useState("");

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });
  const router = useRouter();

  const onSubmit = async (data: RegisterFormValues) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("phone", data.phone);
    formData.append("role", data.role);
    if (data.profileImage) {
      formData.append("profileImage", data.profileImage);
    }

    const result = await registerAction("/auth/login", data);
    console.log(result);
    if (result.success) {
      reset();
      router.push("/auth/login");
      toast.success("Account created successfully! Please log in.");
    }

    if (!result.success) {
      setServerError(result.message);
      return;
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-background px-4 py-10">
      <Card className="w-full max-w-md rounded-xl border shadow-sm">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl font-bold tracking-tight">
            Create Account
          </CardTitle>

          <CardDescription className="text-base">
            Join FixItNow and get started today.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>

              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  {...register("name")}
                  type="text"
                  placeholder="Enter your full name"
                  className="h-10 rounded-xl border-0 bg-muted pl-10 shadow-none focus-visible:bg-background"
                />
              </div>
              {errors.name?.message && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  {...register("email")}
                  type="email"
                  placeholder="Enter your email"
                  className="h-10 rounded-xl border-0 bg-muted pl-10 shadow-none focus-visible:bg-background"
                />
              </div>
              {errors.email?.message && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>

              <div className="relative">
                <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  {...register("phone")}
                  type="tel"
                  placeholder="Enter your phone number"
                  className="h-10 rounded-xl border-0 bg-muted pl-10 shadow-none focus-visible:bg-background"
                />
              </div>
              {errors.phone?.message && (
                <p className="text-red-500 text-sm ">{errors.phone.message}</p>
              )}
            </div>

            {/* Role */}
            <div className="space-y-2">
              <Label>Account Type</Label>

              <Controller
                name="role"
                control={control}
                rules={{
                  required: "Please select a role",
                }}
                render={({ field }) => (
                  <Select
                    value={field.value ?? ""}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger className="h-10 w-full rounded-xl border-0 bg-muted px-3 shadow-none focus:ring-0">
                      <SelectValue placeholder="Select Role" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="CUSTOMER">Customer</SelectItem>
                      <SelectItem value="TECHNICIAN">Technician</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />

              {errors.role?.message && (
                <p className="text-red-500 text-sm">{errors.role.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  className="h-10 rounded-xl border-0 bg-muted px-10 shadow-none focus-visible:bg-background "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              {errors.password?.message && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Profile Image */}
            <div className="space-y-2">
              <Label htmlFor="profileImage">Profile Image (Optional)</Label>

              <div className="relative">
                <Upload className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  {...register("profileImage")}
                  type="url"
                  placeholder="Enter the URL of your profile image"
                  className="h-10 rounded-xl border-0 bg-muted pl-10 shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium"
                />
              </div>
            </div>

            {/* Register */}
            <Button type="submit" className="w-full cursor-pointer">
              {isSubmitting ? "Create Account..." : "Register"}
            </Button>

            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                or
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <Button variant="outline" className="w-full cursor-pointer">
              <Link href="/auth/login">Already have an account?</Link>
            </Button>
            {serverError && (
              <p className="text-center text-sm text-red-500">{serverError}</p>
            )}
          </form>
        </CardContent>
      </Card>
    </section>
  );
}

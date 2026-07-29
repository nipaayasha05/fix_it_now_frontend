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

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

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
          <form className="space-y-5">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>

              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="h-10 rounded-xl border-0 bg-muted pl-10 shadow-none focus-visible:bg-background"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="h-10 rounded-xl border-0 bg-muted pl-10 shadow-none focus-visible:bg-background"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>

              <div className="relative">
                <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="h-10 rounded-xl border-0 bg-muted pl-10 shadow-none focus-visible:bg-background"
                />
              </div>
            </div>

            {/* Role */}
            <div className="space-y-2">
              <Label>Account Type</Label>

              <Select defaultValue="USER">
                <SelectTrigger className="h-10 w-full rounded-xl border-0 bg-muted px-3 shadow-none focus:ring-0">
                  <SelectValue placeholder="Select account type" />
                </SelectTrigger>

                <SelectContent className="rounded-xl">
                  <SelectItem value="USER">Customer</SelectItem>
                  <SelectItem value="TECHNICIAN">Technician</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  id="password"
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
            </div>

            {/* Profile Image */}
            <div className="space-y-2">
              <Label htmlFor="profileImage">Profile Image (Optional)</Label>

              <div className="relative">
                <Upload className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  id="profileImage"
                  type="file"
                  accept="image/*"
                  className="h-10 rounded-xl border-0 bg-muted pl-10 shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium"
                />
              </div>
            </div>

            {/* Register */}
            <Button type="submit" className="w-full cursor-pointer">
              Create Account
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
          </form>
        </CardContent>
      </Card>
    </section>
  );
}

"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TTechnician } from "@/lib/type";
import {
  BriefcaseBusiness,
  MapPin,
  Star,
  Wrench,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";

type TechnicianHeroProps = {
  technician: TTechnician;
};

const TechnicianHero = ({ technician }: TechnicianHeroProps) => {
  return (
    <div className="relative overflow-hidden rounded-3xl border bg-card p-8 shadow-sm lg:p-10">
      {/* Background Blur */}
      <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-cta/10 blur-3xl" />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <Avatar className="h-32 w-32 rounded-3xl border-4 border-background shadow-xl">
            <AvatarImage
              src={technician.technician.profileImage ?? ""}
              className="rounded-3xl object-cover"
            />

            <AvatarFallback className="rounded-3xl text-4xl font-bold">
              {technician.technician.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <div className="space-y-4">
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <h1 className="text-4xl font-bold tracking-tight">
                  {technician.technician.name}
                </h1>

                <Badge className="rounded-full bg-green-100 px-3 py-1 text-green-700 dark:bg-green-500/20 dark:text-green-300">
                  <BadgeCheck className="mr-1 h-4 w-4" />
                  {technician.status}
                </Badge>
              </div>

              <p className="text-lg text-muted-foreground">
                Professional Home Service Technician
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Star className="h-4 w-4 fill-current" />
                {technician.averageRating} Rating
              </div>

              <div className="flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm">
                <BriefcaseBusiness className="h-4 w-4 text-primary" />
                {technician.experience} Years
              </div>

              <div className="flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                {technician.location}
              </div>

              <div className="flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm">
                <Wrench className="h-4 w-4 text-primary" />
                {technician.skills.length} Skills
              </div>
            </div>

            <p className="max-w-2xl leading-8 text-muted-foreground">
              {technician.bio}
            </p>
          </div>
        </div>

        {/* Right CTA */}
        <div className="flex flex-col gap-4 rounded-3xl border bg-background p-6 shadow-md lg:w-80">
          {/* <div>
            <p className="text-sm text-muted-foreground">Starting Price</p>

            <h2 className="mt-2 text-4xl font-bold text-primary">
              ৳
              {technician.services.length > 0
                ? technician.services[0].price
                : "--"}
            </h2>
          </div> */}

          <div className="space-y-3 border-b py-4">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Services</span>

              <span className="font-semibold">
                {technician.services.length}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Reviews</span>

              <span className="font-semibold">{technician.totalReviews}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Availability</span>

              <Badge className="bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300">
                Available
              </Badge>
            </div>
          </div>

          {/* <Button
            size="lg"
            className="h-12 rounded-xl bg-cta text-cta-foreground hover:bg-cta/90"
          >
            Book Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button> */}

          <p className="text-center text-xs text-muted-foreground">
            Quick booking • Secure payment • Trusted professional
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechnicianHero;

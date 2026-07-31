import { TTechnician } from "@/lib/type";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Briefcase,
  BriefcaseBusiness,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

type TechnicianCardProps = {
  technician: TTechnician;
};

const TechnicianCard = ({ technician }: TechnicianCardProps) => {
  // console.log("technician", technician);
  return (
    <Card className="group relative overflow-hidden border-border/70 pt-0 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
      <div className="h-20 bg-[linear-gradient(120deg,var(--color-primary),color-mix(in_oklab,var(--color-cta)_70%,var(--color-primary)))]" />

      <CardHeader className="-mt-10 gap-0">
        <div className="flex items-end justify-between">
          <Avatar className="size-20 !rounded-xl border-4 border-card shadow-md">
            <AvatarImage
              className="!rounded-xl object-cover"
              src={technician.technician.profileImage ?? ""}
            />

            <AvatarFallback className="!rounded-xl text-xl font-bold">
              {technician.technician.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <Badge
            variant={
              technician.technician.status === "ACTIVE"
                ? "default"
                : "secondary"
            }
            className="mb-1 gap-1 rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide uppercase"
          >
            <span className="size-1.5 rounded-full bg-current" />
            {technician.status.toLowerCase()}
          </Badge>
        </div>

        <div className="mt-3 flex items-center gap-1.5">
          <h3 className="text-lg leading-tight font-semibold">
            {technician.technician.name}
          </h3>
          {technician.technician.status === "ACTIVE" && (
            <ShieldCheck
              className="size-4 text-primary"
              aria-label="Verified technician"
            />
          )}
        </div>

        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <MapPin className="size-3.5" />
            {technician.location}
          </span>
          <span className="inline-flex items-center gap-1">
            <BriefcaseBusiness className="size-3.5" />
            {technician.experience} yrs experience
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 ">
        <div className="flex flex-wrap gap-2 h-[50px] lg:h-auto">
          {/* Mobile & Tablet -> 3 skills */}
          <div className="flex flex-wrap gap-2 lg:hidden">
            {technician.skills.slice(0, 3).map((skill) => (
              <Badge key={skill} variant="secondary" className="rounded-full">
                {skill}
              </Badge>
            ))}

            {technician.skills.length > 3 && (
              <Badge variant="outline">+{technician.skills.length - 3}</Badge>
            )}
          </div>

          {/* Large Screen -> 4 skills */}
          <div className="hidden flex-wrap gap-2 lg:flex">
            {technician.skills.slice(0, 4).map((skill) => (
              <Badge key={skill} variant="secondary" className="rounded-full">
                {skill}
              </Badge>
            ))}

            {technician.skills.length > 4 && (
              <Badge variant="outline">+{technician.skills.length - 4}</Badge>
            )}
          </div>
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Star className="size-4 fill-cta text-cta" />
            <span className="font-semibold">{technician.averageRating}</span>
            <span className="text-sm text-muted-foreground">
              ({technician.totalReviews} reviews)
            </span>
          </div>
          <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
            <Phone className="size-3.5" />
            {technician.technician.phone}
          </span>
        </div>
      </CardContent>

      <CardFooter className="flex-col ">
        <Separator className="mb-5" />

        <Link
          href={`/technicians/${technician.id}`}
          className="group/button w-full  flex items-center justify-center gap-2"
        >
          <Button className="w-full rounded-xl  font-semibold text-cta-foreground transition hover:bg-primary/90">
            View Profile
            <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TechnicianCard;

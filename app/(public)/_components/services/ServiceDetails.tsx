import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Clock3,
  FileText,
  Info,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  Wallet,
  Wrench,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { TService } from "@/lib/type";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  service: TService;
};

export default function ServiceDetails({ service }: Props) {
  console.log(service);
  console.log(service.technician);
  console.log(service.technician?.technician);
  return (
    <div className="mx-auto max-w-7xl px-5 py-10">
      <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
        {/* LEFT SIDE */}
        <div>
          {/* Hero */}
          <div className="rounded-3xl border bg-card p-8 shadow-sm">
            <Badge className="mb-5 rounded-full px-4 py-1 text-sm">
              {service.category.name}
            </Badge>

            <h1 className="text-4xl font-extrabold tracking-tight">
              {service.title}
            </h1>

            <p className="mt-5 max-w-3xl text-muted-foreground leading-8">
              {service.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-full border bg-muted/40 px-4 py-2">
                <Clock3 className="size-4 text-primary" />
                <span>{service.duration} Minutes</span>
              </div>

              <div className="flex items-center gap-2 rounded-full border bg-muted/40 px-4 py-2">
                <Wallet className="size-4 text-primary" />
                <span>Service Price ৳{service.price}</span>
              </div>

              <div className="flex items-center gap-2 rounded-full border bg-muted/40 px-4 py-2">
                <BadgeCheck className="size-4 text-primary" />
                <span>Verified Technician</span>
              </div>
            </div>
          </div>

          {/* About */}
          <Card className="mt-8 rounded-3xl p-8">
            <div className="flex items-center gap-3">
              <FileText className="text-primary" />
              <h2 className="text-2xl font-bold">About This Service</h2>
            </div>

            <p className="mt-6 leading-8 text-muted-foreground">
              {service.description}
            </p>

            <Separator className="my-8" />

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border p-5">
                <ShieldCheck className="mb-3 text-primary" />

                <h3 className="font-semibold">Quality Guarantee</h3>

                <p className="mt-2 text-sm text-muted-foreground leading-7">
                  Every repair is completed using professional tools and
                  industry best practices to ensure long-lasting results.
                </p>
              </div>

              <div className="rounded-2xl border p-5">
                <Clock3 className="mb-3 text-primary" />

                <h3 className="font-semibold">Quick Completion</h3>

                <p className="mt-2 text-sm text-muted-foreground leading-7">
                  Estimated completion time is
                  <strong>{service.duration} minutes</strong>.
                </p>
              </div>
            </div>
          </Card>

          {/* Technician */}
          <Card className="mt-8 rounded-3xl p-8">
            <div className="flex items-center gap-3">
              <BriefcaseBusiness className="text-primary" />
              <h2 className="text-2xl font-bold">Technician Information</h2>
            </div>

            <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                {/* T
                 */}

                <Avatar className="h-24 w-24">
                  <AvatarImage
                    src={service.technician.technician.profileImage || ""}
                    alt={service.technician?.technician.name}
                  />
                  <AvatarFallback className="bg-primary text-3xl font-bold text-primary-foreground">
                    {service.technician.technician.name
                      ?.charAt(0)
                      .toUpperCase() || "T"}
                  </AvatarFallback>
                </Avatar>
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Star
                      className="fill-yellow-400 text-yellow-400"
                      size={18}
                    />

                    <span className="font-semibold">
                      {service.technician.averageRating}
                    </span>
                  </div>

                  <span className="text-muted-foreground">
                    ({service.technician.totalReviews} Reviews)
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-2 text-muted-foreground">
                  <MapPin size={18} />
                  {service.technician.location}
                </div>

                <div className="mt-3">
                  <Badge variant="secondary">
                    {service.technician.experience} Years Experience
                  </Badge>
                </div>
              </div>
            </div>

            <p className="mt-8 leading-8 text-muted-foreground">
              {service.technician.bio}
            </p>

            <Separator className="my-8" />

            <div>
              <h3 className="font-semibold">Skills</h3>

              <div className="mt-4 flex flex-wrap gap-3">
                {service.technician.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="rounded-full px-4 py-2"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* RIGHT SIDEBAR */}
        <div>
          <Card className="sticky top-24 rounded-3xl border-2 p-8 shadow-lg">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Service Price
            </p>

            <div className="mt-3 flex items-end gap-2">
              <span className="text-5xl font-black text-primary">
                ৳{service.price}
              </span>

              <span className="pb-2 text-muted-foreground">/ Service</span>
            </div>

            <Separator className="my-8" />

            <div className="space-y-5">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Duration</span>

                <span className="font-semibold">{service.duration} min</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Category</span>

                <span className="font-semibold">{service.category.name}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Location</span>

                <span className="font-semibold">
                  {service.technician.location}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Experience</span>

                <span className="font-semibold">
                  {service.technician.experience} Years
                </span>
              </div>
            </div>

            <Button className="group mt-8 h-12 w-full rounded-xl text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
              <Link
                href={`/booking/${service.id}`}
                className="flex items-center justify-center text-cta-foreground transition-colors duration-300"
              >
                Book This Service
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>

            {/* <Button variant="outline" className="mt-3 h-12 w-full rounded-xl">
              Contact Technician
            </Button> */}

            <Separator className="my-8" />

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <ShieldCheck className="size-5 text-green-600" />
                Verified Professional
              </div>

              <div className="flex items-center gap-3">
                <Wrench className="size-5 text-primary" />
                Professional Equipment
              </div>

              <div className="flex items-center gap-3">
                <BadgeCheck className="size-5 text-primary" />
                Quality Service Guaranteed
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

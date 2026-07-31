import Link from "next/link";
import { ArrowRight, MapPin, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TService } from "@/lib/type";

type ServiceCardProps = {
  service: TService;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      bg-card
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-primary/30
      hover:shadow-2xl
  
    "
    >
      {/* Corner */}
      <div className="absolute left-0 top-0 h-5 w-5 rounded-tl-3xl border-l-2 border-t-2 border-blue-600" />

      {/* Top Line */}
      <div className="absolute left-5 top-0 h-[2px] w-52 bg-gradient-to-r from-blue-600 to-transparent" />

      {/* Top Glow */}
      <div className="absolute left-5 -top-[1px] h-[4px] w-52 bg-gradient-to-r from-blue-500/30 to-transparent blur-sm" />

      {/* Left Line */}
      <div className="absolute left-0 top-5 h-60 w-[2px] bg-gradient-to-b from-blue-600 to-transparent" />

      {/* Left Glow */}
      <div className="absolute -left-[1px] top-5 h-60 w-[4px] bg-gradient-to-b from-blue-500/30 to-transparent blur-sm" />
      {/* Hover Gradient */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-br
        from-primary/5
        via-transparent
        to-transparent
        opacity-0
        transition-opacity
        duration-300
        group-hover:opacity-100
      "
      />

      <div className="relative flex h-full flex-col p-6">
        {/* Top */}
        <div className="flex items-start justify-between">
          <Badge
            variant="secondary"
            className="rounded-full px-3 py-1 text-xs font-semibold"
          >
            {service.category.name}
          </Badge>

          <div className="flex items-center gap-2">
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                service.technician.status === "AVAILABLE"
                  ? "bg-green-500"
                  : "bg-red-500"
              }`}
            />

            <span className="text-xs font-medium text-muted-foreground">
              {service.technician.status === "AVAILABLE" ? "Available" : "Busy"}
            </span>
          </div>
        </div>

        {/* Title */}
        <h2
          className="
          mt-6
          line-clamp-2
          text-2xl
          font-bold
          leading-tight
          transition-colors
          group-hover:text-primary
        "
        >
          {service.title}
        </h2>

        {/* Meta */}
        <div className="mt-6 flex flex-wrap gap-3">
          <div
            className="
            flex
            items-center
            gap-2
            rounded-full
            border
            px-3
            py-2
            text-sm
          "
          >
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">
              {service.technician.averageRating}
            </span>
          </div>

          <div
            className="
            flex
            items-center
            gap-2
            rounded-full
            border
            px-3
            py-2
            text-sm
          "
          >
            <MapPin className="h-4 w-4 text-primary" />
            <span className="line-clamp-1">{service.technician.location}</span>
          </div>
        </div>

        {/* Price */}
        <div
          className="
          mt-8
          rounded-2xl
          border
          bg-muted/40
          p-5
        "
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Service Price
          </p>

          <div className="mt-2 flex items-end gap-2">
            <span className="text-4xl font-extrabold text-primary">
              ৳{service.price}
            </span>

            <span className="pb-1 text-sm text-muted-foreground">
              per booking
            </span>
          </div>
        </div>

        {/* Button */}
        <div className="mt-auto pt-6">
          <Link href={`/services/${service.id}`}>
            <Button
              className="
              w-full
              rounded-xl
            
              text-cta-foreground
              transition-all
              duration-300
              hover:bg-primary/90
            "
            >
              View Details
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}

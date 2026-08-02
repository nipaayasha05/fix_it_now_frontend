"use client";
import { TService } from "@/lib/type";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Clock, MapPin, Briefcase, Wrench, DollarSign } from "lucide-react";

type ServiceCardProps = {
  service: TService;
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="text-xl">{service.title}</CardTitle>
            <CardDescription className="mt-1">
              {service.category.name}
            </CardDescription>
          </div>

          <Badge>{service.technician.status}</Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-5">
        <p className="text-sm text-muted-foreground">{service.description}</p>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-primary" />
            <span>৳ {service.price}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span>{service.duration} mins</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{service.technician.location}</span>
          </div>

          <div className="flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-primary" />
            <span>{service.technician.experience} Years</span>
          </div>
        </div>

        <div>
          <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
            <Wrench className="h-4 w-4" />
            Skills
          </h4>

          <div className="flex flex-wrap gap-2">
            {service.technician.skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-t pt-4">
          <div>
            <p className="text-sm text-muted-foreground">Rating</p>
            <p className="font-semibold">
              ⭐ {service.technician.averageRating} (
              {service.technician.totalReviews} Reviews)
            </p>
          </div>

          <Badge variant="outline">{service.category.name}</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;

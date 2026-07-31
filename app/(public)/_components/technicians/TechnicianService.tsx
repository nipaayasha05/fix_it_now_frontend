import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BriefcaseBusiness, Clock3, Wallet } from "lucide-react";

type TechnicianServicesProps = {
  services: {
    id: string;
    title: string;
    description?: string;
    price: number;
    duration?: string;
  }[];
};

const TechnicianServices = ({ services }: TechnicianServicesProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BriefcaseBusiness className="size-5 text-primary" />
          Services
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {services?.map((service) => (
          <div key={service.id} className="rounded-xl border p-4 space-y-3">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold">{service.title}</h3>

              <Badge>৳{service.price}</Badge>
            </div>

            {service.description && (
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            )}

            {service.duration && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock3 className="size-4" />
                {service.duration}
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TechnicianServices;

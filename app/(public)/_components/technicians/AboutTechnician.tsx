import { BadgeCheck, BriefcaseBusiness, Info, MapPin } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { TTechnician } from "@/lib/type";

type AboutTechnicianProps = {
  technician: TTechnician;
};

const AboutTechnician = ({ technician }: AboutTechnicianProps) => {
  return (
    <Card className="rounded-3xl border shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <Info className="h-6 w-6 text-primary" />
          About Technician
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Bio */}
        <p className="leading-8 text-muted-foreground">{technician.bio}</p>

        {/* Info Cards */}
        <div className="grid gap-4 sm:grid-cols-3">
          {/* Experience */}
          <div
            className="
              rounded-2xl border bg-muted/40 p-4
              transition hover:border-primary
            "
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-3">
                <BriefcaseBusiness className="h-5 w-5 text-primary" />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Experience</p>

                <p className="font-semibold">{technician.experience} Years</p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div
            className="
              rounded-2xl border bg-muted/40 p-4
              transition hover:border-primary
            "
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-3">
                <MapPin className="h-5 w-5 text-primary" />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Location</p>

                <p className="font-semibold">{technician.location}</p>
              </div>
            </div>
          </div>

          {/* Verification */}
          <div
            className="
              rounded-2xl border bg-muted/40 p-4
              transition hover:border-primary
            "
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-3">
                <BadgeCheck className="h-5 w-5 text-primary" />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Status</p>

                <p className="font-semibold">Verified</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Preview */}
        {technician.skills?.length > 0 && (
          <div className="space-y-3">
            <h3 className="font-semibold">Expertise Areas</h3>

            <div className="flex flex-wrap gap-2">
              {technician.skills.map((skill: string) => (
                <span
                  key={skill}
                  className="
                      rounded-full
                      border border-primary/20
                      bg-primary/10
                      px-4 py-2
                      text-sm
                      font-medium
                      text-primary
                    "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AboutTechnician;

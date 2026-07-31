import { BadgeCheck, Sparkles } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { TTechnician } from "@/lib/type";

type TechnicianSkillsProps = {
  skills: string[];
};

const TechnicianSkills = ({ skills }: TechnicianSkillsProps) => {
  return (
    <Card className="rounded-3xl border shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <Sparkles className="h-6 w-6 text-primary" />
          Professional Skills
        </CardTitle>

        <p className="text-sm text-muted-foreground">
          Expertise and services this technician specializes in.
        </p>
      </CardHeader>

      <CardContent>
        {skills.length === 0 ? (
          <div className="rounded-2xl border border-dashed py-8 text-center">
            <p className="text-muted-foreground">No skills added yet.</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  bg-background
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary
                  hover:shadow-md
                "
              >
                <div
                  className="
                    rounded-xl
                    bg-primary/10
                    p-2.5
                    transition
                    group-hover:bg-primary
                  "
                >
                  <BadgeCheck
                    className="
                      h-5
                      w-5
                      text-primary
                      group-hover:text-primary-foreground
                    "
                  />
                </div>

                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TechnicianSkills;

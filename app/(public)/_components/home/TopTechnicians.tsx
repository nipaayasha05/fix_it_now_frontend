import React from "react";
import Image from "next/image";
import { MapPin, Star, BriefcaseBusiness, ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Technician = {
  id: string;
  bio?: string | null;
  experience?: number | null;
  location?: string | null;
  averageRating?: string | number;
  totalReviews?: number;
  status?: string;
  technician: {
    id: string;
    name: string;
    profileImage?: string | null;
  };
};

interface TopTechniciansProps {
  technicians: Technician[];
}

const TopTechnicians = ({ technicians }: TopTechniciansProps) => {
  // console.log("technicians:", technicians);
  return (
    <section className="py-14 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="text-3xl font-bold text-slate-900 dark:text-white">
            Trusted{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Professionals
            </span>
          </p>

          {/* <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Top Technicians
          </h2> */}

          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Skilled professionals ready to help you with your home services.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {technicians.map((technician) => {
            const rating = Number(technician.averageRating || 0);

            return (
              <Card
                key={technician.id}
                className="group overflow-hidden rounded-xl border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex items-center gap-4">
                  {/* Profile Image */}
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full bg-blue-50 dark:bg-slate-800">
                    {technician.technician.profileImage ? (
                      <Image
                        src={technician.technician.profileImage}
                        alt={technician.technician.name}
                        width={80}
                        height={80}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-blue-600">
                        {technician.technician.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>

                  {/* Name + Rating */}
                  <div className="min-w-0">
                    <h3 className="truncate text-lg font-semibold text-slate-900 dark:text-white">
                      {technician.technician.name}
                    </h3>

                    <div className="mt-1 flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {rating.toFixed(1)}
                      </span>

                      <span className="text-xs text-slate-500">
                        ({technician.totalReviews || 0})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Basic Info */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {/* Location */}
                  <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2.5 dark:bg-slate-800/70">
                    <MapPin className="h-4 w-4 shrink-0 text-blue-600" />

                    <div className="min-w-0">
                      <p className="text-[11px] text-slate-500">Location</p>
                      <p className="truncate text-sm font-medium text-slate-700 dark:text-slate-200">
                        {technician.location || "Dhaka"}
                      </p>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2.5 dark:bg-slate-800/70">
                    <BriefcaseBusiness className="h-4 w-4 shrink-0 text-blue-600" />

                    <div className="min-w-0">
                      <p className="text-[11px] text-slate-500">Experience</p>
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                        {technician.experience || 0}+ Years
                      </p>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <Link href={`/technicians/${technician.id}`}>
                  <Button
                    variant="default"
                    className="mt-5  w-full group-hover:border-blue-600/90 group-hover:text-white-600/90"
                  >
                    View Profile
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopTechnicians;

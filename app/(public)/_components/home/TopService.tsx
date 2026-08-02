"use client";

import { Clock, MapPin, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: number;
  technician: {
    experience: number;
    location: string;
    averageRating: string;
    totalReviews: number;
    status: string;
  };
  category: {
    name: string;
  };
}

const TopServices = ({ services }: { services: Service[] }) => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-blue-600 dark:text-blue-400 font-semibold">
            Our Services
          </p>

          <h2
            className="
            text-3xl md:text-4xl 
            font-bold mt-2
            text-gray-900
            dark:text-white
            "
          >
            Top Services For Your Home
          </h2>

          <p
            className="
            text-gray-500 
            dark:text-gray-400
            mt-3 
            max-w-xl 
            mx-auto
            "
          >
            Get trusted professionals for your home repair and maintenance
            needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.slice(0, 6).map((service) => (
            <Card
              key={service.id}
              className="
              group
              overflow-hidden
              border-none
              shadow-sm
              hover:shadow-xl
              hover:shadow-blue-200/50
              dark:hover:shadow-blue-900/50
              transition
              bg-white
              dark:bg-slate-900
              "
            >
              {/* Category */}
              <div className="relative ">
                <div
                  className="
                  absolute
                  bottom-5
                  left-5
                  bg-white
                  dark:bg-slate-800
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-medium
                  text-blue-600
                  dark:text-blue-400
                  "
                >
                  {service.category.name}
                </div>
              </div>

              <CardContent className="p-6">
                {/* Title */}
                <h3
                  className="
                  text-xl
                  font-bold
                  text-gray-900
                  dark:text-white
                  group-hover:text-blue-600
                  dark:group-hover:text-blue-400
                  transition
                  "
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="
                  text-gray-500
                  dark:text-gray-400
                  text-sm
                  mt-3
                  line-clamp-2
                  "
                >
                  {service.description}
                </p>

                {/* Technician Info */}
                <div
                  className="
                  mt-5
                  space-y-3
                  text-sm
                  text-gray-700
                  dark:text-gray-300
                  "
                >
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <Star
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <span>
                      {service.technician.averageRating} (
                      {service.technician.totalReviews} reviews)
                    </span>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-2">
                    <Clock
                      size={18}
                      className="text-blue-600 dark:text-blue-400"
                    />

                    <span>{service.duration} minutes</span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2">
                    <MapPin
                      size={18}
                      className="text-blue-600 dark:text-blue-400"
                    />

                    <span>{service.technician.location}</span>
                  </div>
                </div>

                {/* Footer */}
                <div
                  className="
                  flex
                  items-center
                  justify-between
                  mt-6
                  "
                >
                  <p
                    className="
                    text-2xl
                    font-bold
                    text-blue-600
                    dark:text-blue-400
                    "
                  >
                    ৳{service.price}
                  </p>

                  <Link href={`/services/${service.id}`}>
                    <Button
                      className="
                      bg-orange-500
                      hover:bg-orange-600
                      text-white
                      "
                    >
                      Book Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopServices;

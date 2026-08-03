import { getMyServices } from "@/app/dashboard/_actions/technician/getService";
import { TService } from "@/lib/type";
import React from "react";
import ServiceCard from "./ServiceCard";

export const ServiceList = async () => {
  const services = await getMyServices();
  // console.log(services);
  return (
    <div>
      {services.data?.length === 0 ? (
        <div className="flex min-h-[300px] items-center justify-center rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100">
              No Services Found
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              You do not have any services yet. Please create one.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 2xl:grid-cols-3">
          {services.data.map((service: TService) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceList;

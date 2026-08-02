import { getTechnicianAvailability } from "@/app/dashboard/_actions/technician/getTechnicianAvailability";
import React from "react";
import AvailabilityCard from "./AvailabilityCard";
import { TAvailability } from "@/lib/type";

const AvailabilityList = async () => {
  const slots = await getTechnicianAvailability();
  console.log(slots);
  return (
    <div>
      {slots.data?.length === 0 ? (
        <div className="flex min-h-[300px] items-center justify-center rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100">
              No Availability Found
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              You do not have any availability yet. Please create one.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 2xl:grid-cols-3">
          {slots.data?.map((slot: TAvailability) => (
            <AvailabilityCard key={slot.id} slot={slot} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AvailabilityList;

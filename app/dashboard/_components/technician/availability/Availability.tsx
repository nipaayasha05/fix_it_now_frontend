import React from "react";
import CreateAvailability from "./CreateAvailability";
import AvailabilityList from "./AvailabilityList";

const Availability = () => {
  return (
    <div>
      {" "}
      <div className="flex items-center justify-between space-y-4">
        <div>
          <h1 className="text-2xl font-semibold">My Availability</h1>
          <p className="text-sm text-muted-foreground">
            Create and manage your own availability.
          </p>
        </div>
        <CreateAvailability />
      </div>
      <AvailabilityList />
    </div>
  );
};

export default Availability;

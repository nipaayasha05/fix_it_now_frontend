import React from "react";
import CreateService from "./CreateService";
import ServiceList from "./ServiceList";
import CreateServicPage from "./CreateServicPage";

export const Services = () => {
  return (
    <div>
      <div>
        {" "}
        <div className="flex items-center justify-between space-y-4">
          <div>
            <h1 className="text-2xl font-semibold">My Services</h1>
            <p className="text-sm text-muted-foreground">
              Create and manage your own services.
            </p>
          </div>
          <CreateServicPage />
        </div>
        <ServiceList />
      </div>
    </div>
  );
};

export default Services;

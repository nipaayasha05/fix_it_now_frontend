import React from "react";
import { getAllServices } from "../../_actions/services/getAllService";
import { TService, TServicesResponse } from "@/lib/type";
import ServiceCard from "./ServiceCard";

export const AllServices = async () => {
  const result = await getAllServices();
  // console.log(result);

  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {result.data.map((post: TService) => (
        <ServiceCard key={post.id} service={post} />
      ))}
    </div>
  );
};

export default AllServices;

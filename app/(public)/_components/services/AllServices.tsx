import React from "react";
import { getAllServices } from "../../_actions/services/getAllService";
import { TService, TServicesResponse } from "@/lib/type";
import ServiceCard from "./ServiceCard";
import SearchBar from "../../../../components/shared/SearchBar";
import { FillterBar } from "@/components/shared/FillterBar";
import { getCategory } from "@/app/dashboard/_actions/technician/getCategory";

export const AllServices = async ({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const query = await searchParams;
  const result = await getAllServices({ query });
  const categories = await getCategory();
  // console.log(result);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-4 mt-2">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SearchBar />
        <FillterBar categories={categories.data} />
      </div>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {result.data.map((post: TService) => (
          <ServiceCard key={post.id} service={post} />
        ))}
      </div>
    </div>
  );
};

export default AllServices;

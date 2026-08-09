import React from "react";
import { getAllServices } from "../../_actions/services/getAllService";
import { TService, TServicesResponse, TTechnician } from "@/lib/type";
import ServiceCard from "./ServiceCard";
import SearchBar from "../../../../components/shared/SearchBar";
import { FillterBar } from "@/components/shared/FillterBar";
import { getCategory } from "@/app/dashboard/_actions/technician/getCategory";
import { getAllTechnicians } from "../../_actions/technicians/techniciansActions";
import SortBar from "@/components/shared/SortBar";
import Pagination from "@/components/shared/Pagination";

export const AllServices = async ({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const query = await searchParams;

  const page = Number(query?.page) || 1;
  const limit = 6;

  const result = await getAllServices({ query, page, limit });
  const technicians = await getAllTechnicians({ page: 1, limit: 1000 });
  const locations: string[] = Array.from(
    new Set(
      technicians.data?.data.map(
        (technician: TTechnician) => technician.location,
      ),
    ),
  );
  // console.log("result:", result);
  // console.log("result.data:", result.data);
  // console.log("isArray:", Array.isArray(result.data));
  // console.log("type:", typeof result.data);
  // console.log("map:", result.data?.map);

  const categories = await getCategory();

  const serviceSortOptions = [
    {
      label: "Price: Low to High",
      value: "price-asc",
    },
    {
      label: "Price: High to Low",
      value: "price-desc",
    },
    {
      label: "Rating: High to Low",
      value: "rating-desc",
    },
    {
      label: "Rating: Low to High",
      value: "rating-asc",
    },
  ];

  // console.log(result);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-4 mt-2">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-9">
        <div>
          <SearchBar />
        </div>
        <div>
          <SortBar options={serviceSortOptions} />
        </div>
        <div>
          <FillterBar
            categories={categories.data}
            locations={locations}
            showRating={false}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 ">
        {result.data?.data.map((post: TService) => (
          <ServiceCard key={post.id} service={post} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={result.data?.meta?.page || page}
        totalPages={result.data?.meta?.totalPages || 1}
      />
    </div>
  );
};

export default AllServices;

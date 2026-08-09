import { TTechnician } from "@/lib/type";
import React from "react";
import TechnicianCard from "./TechnicianCard";
import { getAllTechnicians } from "../../_actions/technicians/techniciansActions";
import SearchBar from "../../../../components/shared/SearchBar";
import { FillterBar } from "@/components/shared/FillterBar";
import SortBar from "@/components/shared/SortBar";
import Pagination from "@/components/shared/Pagination";

const AllTechnicians = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const query = await searchParams;

  const page = Number(query?.page) || 1;
  const limit = 6;

  const result = await getAllTechnicians({ query, page, limit });
  const allTechnicians = await getAllTechnicians({ page: 1, limit: 100 });

  const locations: string[] = Array.from(
    new Set(
      allTechnicians.data?.data.map(
        (technician: TTechnician) => technician.location,
      ),
    ),
  );

  const averageRating: number[] = Array.from(
    new Set(
      allTechnicians.data?.data.map(
        (technician: TTechnician) => technician.averageRating,
      ),
    ),
  );

  const technicianSortOptions = [
    {
      label: "Experience: High to Low",
      value: "experience-desc",
    },
    {
      label: "Experience: Low to High",
      value: "experience-asc",
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
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="">
          <SearchBar />
        </div>
        <div>
          <SortBar options={technicianSortOptions} />
        </div>
        <div>
          <FillterBar
            showCategory={false}
            showPrice={false}
            locations={locations}
            showRating={true}
            averageRating={averageRating}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {result.data?.data.map((post: TTechnician) => (
          <TechnicianCard key={post.id} technician={post} />
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

export default AllTechnicians;

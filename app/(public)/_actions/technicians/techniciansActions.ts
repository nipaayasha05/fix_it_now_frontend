"use server";

import { revalidateTag } from "next/cache";

export const getAllTechnicians = async ({
  query,
}: {
  query?: { [key: string]: string | string[] | undefined };
}) => {
  const params = new URLSearchParams();

  if (query && query.searchTerm) {
    params.set("searchTerm", query.searchTerm as string);
  }

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/technicians?${params.toString()}`,
    {
      next: {
        revalidate: 60,
        tags: ["technicians"],
      },
    },
  );
  const result = await res.json();
  return result;
};

export const getTechnicianById = async (id: string) => {
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/technicians/${id}`,
    {
      // next: {
      //   revalidate: 60,
      //   tags: ["technicians", `technician-${id}`],
      // },
      cache: "no-store",
    },
  );
  const result = await res.json();

  return result;
};

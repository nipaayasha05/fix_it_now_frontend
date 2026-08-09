/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidateTag } from "next/cache";

export const getAllTechnicians = async ({
  query,
  page = 1,
  limit = 6,
}: {
  query?: { [key: string]: string | string[] | undefined };
  page?: number;
  limit?: number;
}) => {
  const params = new URLSearchParams();

  if (query && query.searchTerm) {
    params.set("searchTerm", query.searchTerm as string);
  }

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (typeof value === "string" && value.trim() !== "") {
        params.set(key, value);
      }
    });
  }

  params.set("page", page.toString());
  params.set("limit", limit.toString());

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

export const getBestRevenueTechnicians = async () => {
  const result = await getAllTechnicians({
    query: {},
    page: 1,
    limit: 6,
  });

  const technicians = result.data?.data || [];

  return technicians
    .sort((a: any, b: any) => b.revenue - a.revenue)
    .slice(0, 6);
};

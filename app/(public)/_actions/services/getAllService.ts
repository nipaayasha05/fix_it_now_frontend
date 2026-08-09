/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const getAllServices = async ({
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

  // console.log(query);
  // console.log(params.toString());

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/services?${params.toString()}`,
    {
      next: {
        revalidate: 60,
        tags: ["services"],
      },
    },
  );
  const result = await res.json();
  return result;
};

export const getServiceById = async (id: string) => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/services/${id}`, {
    next: {
      revalidate: 60,
      tags: ["services", `service-${id}`],
    },
  });
  const result = await res.json();
  return result;
};

export const getBestRevenueServices = async () => {
  const result = await getAllServices({
    query: {},
    page: 1,
    limit: 6,
  });

  const services = result.data?.data || [];

  return services.sort((a: any, b: any) => b.revenue - a.revenue).slice(0, 6);
};

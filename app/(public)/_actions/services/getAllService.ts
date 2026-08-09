/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const getAllServices = async ({
  query,
}: {
  query?: { [key: string]: string | string[] | undefined };
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
  const result = await getAllServices({});

  const services = result.data || [];

  return services.sort((a: any, b: any) => b.revenue - a.revenue).slice(0, 6);
};

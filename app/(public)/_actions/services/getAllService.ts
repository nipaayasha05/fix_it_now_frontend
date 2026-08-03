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

  console.log(query);
  console.log(params.toString());

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

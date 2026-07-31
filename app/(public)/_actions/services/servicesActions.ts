export const getAllServices = async () => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/services`, {
    next: {
      revalidate: 60,
      tags: ["services"],
    },
  });
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

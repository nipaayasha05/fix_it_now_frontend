export const getAllTechnicians = async () => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/technicians`, {
    next: {
      revalidate: 60,
      tags: ["technicians"],
    },
  });
  const result = await res.json();
  return result;
};

export const getTechnicianById = async (id: string) => {
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/technicians/${id}`,
    {
      next: {
        revalidate: 60,
        tags: ["technicians", `technician-${id}`],
      },
    },
  );
  const result = await res.json();
  return result;
};

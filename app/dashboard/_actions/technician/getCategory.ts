"use server";

export const getCategory = async () => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/categories`, {
    // next: {
    //   revalidate: 10,
    //   tags: ["categories"],
    // },
    cache: "no-cache",
  });
  const result = await res.json();
  return result;
};

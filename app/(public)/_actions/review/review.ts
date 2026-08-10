"use server";

export const getReviewsPublic = async () => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/reviews/public`;

  const res = await fetch(url, {
    next: {
      revalidate: 60,
      tags: ["reviews"],
    },
  });

  const result = await res.json();

  return result;
};

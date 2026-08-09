"use server";

export const getReviewsPublic = async () => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/reviews/public`;

  console.log("Review URL:", url);

  const res = await fetch(url, {
    next: {
      revalidate: 60,
      tags: ["reviews"],
    },
  });

  console.log("Review status:", res.status);

  const result = await res.json();

  console.log("Review result:", result);

  return result;
};

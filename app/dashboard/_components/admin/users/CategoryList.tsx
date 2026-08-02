import { getMyServices } from "@/app/dashboard/_actions/technician/getService";
import { TCategory, TService } from "@/lib/type";
import React from "react";
import CategoryCard from "./CategoryCard";
import { getCategory } from "@/app/dashboard/_actions/technician/getCategory";

export const CategoryList = async () => {
  const categories = await getCategory();
  // console.log(categories);
  return (
    <div>
      {categories.data?.length === 0 ? (
        <div className="flex min-h-[300px] items-center justify-center rounded-lg border bg-gray-50">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700">
              No Categories Found
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              You do not have any categories yet.Please create one.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 2xl:grid-cols-3">
          {categories.data.map((category: TCategory) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryList;

"use client";
import { TCategory } from "@/lib/type";
import { FolderTree } from "lucide-react";

type CategoryCardProps = {
  category: TCategory;
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
        <FolderTree className="h-6 w-6 text-blue-600 dark:text-blue-400" />
      </div>

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {category.name}
      </h3>

      <p className="mt-2 min-h-[60px] line-clamp-3 text-sm text-gray-600 dark:text-gray-400">
        {category.description ||
          "Browse professional services available in this category."}
      </p>

      <div className="mt-5 border-t border-gray-200 pt-4 dark:border-gray-800">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
          Service Category
        </span>
      </div>
    </div>
  );
};

export default CategoryCard;

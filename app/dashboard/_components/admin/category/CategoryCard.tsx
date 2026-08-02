"use client";
import { TCategory } from "@/lib/type";
import { FolderTree } from "lucide-react";

type CategoryCardProps = {
  category: TCategory;
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
        <FolderTree className="h-6 w-6 text-blue-600" />
      </div>

      <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>

      <p className="mt-2 text-sm text-gray-600 line-clamp-3 min-h-[60px]">
        {category.description ||
          "Browse professional services available in this category."}
      </p>

      <div className="mt-5 border-t pt-4">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
          Service Category
        </span>
      </div>
    </div>
  );
};

export default CategoryCard;

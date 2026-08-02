import React, { Suspense } from "react";
import Categories from "../../_components/admin/category/Categories";
import SkeletonPage from "@/app/(public)/_components/skeleton/Skeleton";

const CategoriesPage = () => {
  return (
    <div>
      <Suspense fallback={<SkeletonPage />}>
        <Categories />
      </Suspense>
    </div>
  );
};

export default CategoriesPage;

import React from "react";
import CreateCategoryPage from "./CreateCategoryPage";
import CategoryList from "./CategoryList";
import CreateCategory from "./CreateCategory";

export const Categories = () => {
  return (
    <div>
      <div>
        {" "}
        <div className="flex items-center justify-between space-y-4">
          <div>
            <h1 className="text-2xl font-semibold">My Categories</h1>
            <p className="text-sm text-muted-foreground">
              Create and manage your own categories.
            </p>
          </div>
          <CreateCategory categories={[]} />
        </div>
        <CategoryList />
      </div>
    </div>
  );
};

export default Categories;

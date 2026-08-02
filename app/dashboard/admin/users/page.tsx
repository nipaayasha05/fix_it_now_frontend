import React, { Suspense } from "react";
import Users from "../../_components/admin/users/Users";
import SkeletonPage from "@/app/(public)/_components/skeleton/Skeleton";

const UsersPage = () => {
  return (
    <div>
      <Suspense fallback={<SkeletonPage />}>
        <Users />
      </Suspense>
    </div>
  );
};

export default UsersPage;

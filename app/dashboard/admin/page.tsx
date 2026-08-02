import React, { Suspense } from "react";
import Admin from "../_components/admin/Admin";
import SkeletonPage from "@/app/(public)/_components/skeleton/Skeleton";

const AdminDashboard = () => {
  return (
    <div>
      <Suspense fallback={<SkeletonPage />}>
        <Admin />
      </Suspense>
    </div>
  );
};

export default AdminDashboard;

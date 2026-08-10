import { getMe } from "@/app/server/auth/getMe";
import React, { Suspense } from "react";
import MyProfile from "../_components/profile/MyProfile";
import { TUser } from "@/lib/type";
import SkeletonPage from "../_components/skeleton/Skeleton";

const Profile = async () => {
  const user = await getMe();
  console.log("PROFILE GET ME:", user);
  if (!user.success || !user.data) {
    return <div>Unable to load profile.</div>;
  }
  return (
    <div>
      <Suspense fallback={<SkeletonPage />}>
        <MyProfile user={user.data as TUser} />
      </Suspense>
    </div>
  );
};

export default Profile;

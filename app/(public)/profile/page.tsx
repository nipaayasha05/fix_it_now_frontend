import { getMe } from "@/app/server/auth/getMe";
import React from "react";
import MyProfile from "../_components/profile/MyProfile";
import { TUser } from "@/lib/type";

const Profile = async () => {
  const user = await getMe();
  return (
    <div>
      <MyProfile user={user.data as TUser} />
    </div>
  );
};

export default Profile;

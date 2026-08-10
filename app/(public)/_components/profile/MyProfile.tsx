"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TUser } from "@/lib/type";
import { editMyInfo } from "../../_actions/profile/profileAction";
import { useRouter } from "next/navigation";

interface MyProfileProps {
  user: TUser;
}

const MyProfile = ({ user }: MyProfileProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone ?? "");
  const [profileImage, setProfileImage] = useState(user.profileImage ?? "");

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSave = async () => {
    try {
      setLoading(true);

      const payload = {
        name,
        phone,
        profileImage,
      };

      const result = await editMyInfo(user.id, payload);

      if (!result.success) {
        throw new Error(result.message || "Failed to update profile");
      }

      setIsEditing(false);
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setName(user.name);
    setPhone(user.phone ?? "");
    setProfileImage(user.profileImage ?? "");
    setIsEditing(false);
  };

  return (
    <div className="space-y-8 rounded-xl border bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
      {/* Profile Header */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src={profileImage} alt={name} />

            <AvatarFallback className="text-2xl">
              {name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {name}
            </h2>

            <p className="text-gray-500 dark:text-gray-400">{user.email}</p>

            <span className="mt-2 inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300">
              {user.role}
            </span>
          </div>
        </div>

        {!isEditing && (
          <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
        )}
      </div>

      {/* Edit Form */}
      {isEditing ? (
        <div className="border-t border-gray-200 pt-6 dark:border-gray-700">
          <h2 className="mb-5 text-2xl font-bold">Edit Profile</h2>

          <div className="grid gap-5">
            {/* Profile Image URL */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Profile Image URL
              </label>

              <Input
                value={profileImage}
                onChange={(e) => setProfileImage(e.target.value)}
                placeholder="https://example.com/profile.jpg"
              />

              {profileImage && (
                <div className="mt-3">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={profileImage} alt={name} />

                    <AvatarFallback>
                      {name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </div>
              )}
            </div>

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium">Name</label>

              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block text-sm font-medium">Phone</label>

              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>

            {/* Email - Read Only */}
            <div>
              <label className="mb-2 block text-sm font-medium">Email</label>

              <Input value={user.email} disabled />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <Button onClick={handleSave} disabled={loading}>
                {loading ? "Saving..." : "Save Changes"}
              </Button>

              <Button
                variant="outline"
                onClick={handleCancel}
                disabled={loading}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      ) : (
        /* User Info */
        <div>
          <h2 className="text-2xl font-bold">User Information</h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p>{user.email}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p>{user.phone || "Not provided"}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Role</p>
              <p>{user.role}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Status</p>
              <p>{user.status}</p>
            </div>
          </div>
        </div>
      )}

      {/* Technician Info */}
      {user.role === "TECHNICIAN" && user.technician && (
        <div className="border-t border-gray-200 pt-6 dark:border-gray-700">
          <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Technician Information
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm text-gray-500">Experience</p>
              <p>{user.technician.experience} Years</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Location</p>
              <p>{user.technician.location}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Availability</p>
              <p>{user.technician.status}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Rating</p>
              <p>
                {user.technician.averageRating} ⭐ (
                {user.technician.totalReviews} Reviews)
              </p>
            </div>

            <div className="sm:col-span-2">
              <p className="text-sm text-gray-500">Bio</p>
              <p>{user.technician.bio}</p>
            </div>

            <div className="sm:col-span-2">
              <p className="mb-2 text-sm text-gray-500">Skills</p>

              <div className="flex flex-wrap gap-2">
                {user.technician.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;

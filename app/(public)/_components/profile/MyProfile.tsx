"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TUser } from "@/lib/type";

interface MyProfileProps {
  user: TUser;
}

const MyProfile = ({ user }: MyProfileProps) => {
  return (
    <div className="container mx-auto rounded-xl border border-gray-200 bg-white p-6 space-y-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center gap-5">
        <Avatar className="h-24 w-24 border-2 border-blue-500">
          <AvatarImage src={user.profileImage ?? ""} alt={user.name} />
          <AvatarFallback className="bg-blue-100 text-2xl font-semibold text-blue-700 dark:bg-blue-900 dark:text-blue-200">
            {user.name.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {user.name}
          </h2>

          <p className="text-gray-500 dark:text-gray-400">{user.email}</p>

          <span className="mt-2 inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300">
            {user.role}
          </span>
        </div>
      </div>
      {/* User Info */}
      <div>
        <h2 className="text-2xl font-bold">{user.name}</h2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p>{user.email}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p>{user.phone}</p>
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
              <p className="text-sm text-gray-500 mb-2">Skills</p>

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

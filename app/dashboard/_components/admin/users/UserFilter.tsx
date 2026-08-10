"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const UserFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleFilterChange = (key: "role" | "status", value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", "1");

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Role Filter */}
      <select
        value={searchParams.get("role") || ""}
        onChange={(e) => handleFilterChange("role", e.target.value)}
        className="h-10 rounded-md border bg-background px-3 text-sm outline-none"
      >
        <option value="">All Roles</option>
        <option value="CUSTOMER">Customer</option>
        <option value="TECHNICIAN">Technician</option>
        <option value="ADMIN">Admin</option>
      </select>

      {/* Status Filter */}
      <select
        value={searchParams.get("status") || ""}
        onChange={(e) => handleFilterChange("status", e.target.value)}
        className="h-10 rounded-md border bg-background px-3 text-sm outline-none"
      >
        <option value="">All Status</option>
        <option value="ACTIVE">Active</option>

        <option value="BANNED">Banned</option>
      </select>
    </div>
  );
};

export default UserFilter;

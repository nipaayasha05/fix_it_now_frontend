"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type StatusFilterProps = {
  currentStatus?: string;
};

const StatusFilter = ({ currentStatus }: StatusFilterProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    const params = new URLSearchParams(searchParams.toString());

    if (value === "ALL") {
      params.delete("status");
    } else {
      params.set("status", value);
    }

    params.set("page", "1");

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <select
      value={currentStatus || "ALL"}
      onChange={handleStatusChange}
      className="w-[180px] rounded-md border bg-background px-3 py-2 text-sm text-muted-foreground-foreground"
    >
      <option value="ALL">All Status</option>

      <option value="PENDING">Pending</option>

      <option value="ACCEPTED">Accepted</option>

      <option value="DECLINED">Declined</option>

      <option value="IN_PROGRESS">In Progress</option>

      <option value="COMPLETED">Completed</option>

      <option value="CANCELLED">Cancelled</option>
    </select>
  );
};

export default StatusFilter;

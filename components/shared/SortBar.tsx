"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type SortOption = {
  label: string;
  value: string;
};

type SortBarProps = {
  options: SortOption[];
  placeholder?: string;
};

const SortBar = ({ options, placeholder = "Sort By" }: SortBarProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentSort = `${searchParams.get("sortBy") || ""}-${
    searchParams.get("sortOrder") || ""
  }`;

  const handleSort = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === "default") {
      params.delete("sortBy");
      params.delete("sortOrder");
    } else {
      const [sortBy, sortOrder] = value.split("-");

      params.set("sortBy", sortBy);
      params.set("sortOrder", sortOrder);
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <select
      value={currentSort === "-" ? "default" : currentSort}
      onChange={(e) => handleSort(e.target.value)}
      className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
    >
      <option value="default">{placeholder}</option>

      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SortBar;

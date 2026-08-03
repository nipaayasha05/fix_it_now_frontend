"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { TCategory } from "@/lib/type";

export const FillterBar = ({ categories }: { categories: TCategory[] }) => {
  console.log(categories);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateQuery = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(`${pathname}?${params.toString()}`);
  };
  return (
    <div
      className="grid grid-cols-1 gap-5 rounded-xl border bg-background p-2  sm:grid-cols-2
  lg:grid-cols-3"
    >
      {/* category */}

      <Select
        value={searchParams.get("category") || ""}
        onValueChange={(value) =>
          updateQuery("category", value === "all" ? "" : value)
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category.id} value={category.name}>
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* <Input
        placeholder="Location"
        defaultValue={searchParams.get("location") || ""}
        onBlur={(e) => updateQuery("location", e.target.value)}
      /> */}

      {/* Min Price */}
      <Input
        type="number"
        placeholder="Min Price"
        defaultValue={searchParams.get("minPrice") || ""}
        onBlur={(e) => updateQuery("minPrice", e.target.value)}
      />

      {/* Max Price */}
      <Input
        type="number"
        placeholder="Max Price"
        defaultValue={searchParams.get("maxPrice") || ""}
        onBlur={(e) => updateQuery("maxPrice", e.target.value)}
      />
    </div>
  );
};

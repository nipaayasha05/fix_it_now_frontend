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
import { div } from "framer-motion/client";
import { Star } from "lucide-react";

export const FillterBar = ({
  categories,
  locations,
  showCategory = true,
  showPrice = true,
  showRating = true,
  averageRating,
}: {
  categories?: TCategory[];
  locations?: string[];
  showCategory?: boolean;
  showPrice?: boolean;
  showRating?: boolean;
  averageRating?: number[];
}) => {
  // console.log(categories);
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
      className="grid grid-cols-1 gap-7 rounded-xl border bg-background p-2  sm:grid-cols-2
  lg:grid-cols-4"
    >
      {/* category */}

      {showCategory && (
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
            {categories?.map((category) => (
              <SelectItem key={category.id} value={category.name}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}

      {/* <Input
        placeholder="Location"
        defaultValue={searchParams.get("location") || ""}
        onBlur={(e) => updateQuery("location", e.target.value)}
      /> */}

      {/* Location */}
      <div className="min-w-[120px]">
        <Select
          value={searchParams.get("location") || "Location"}
          onValueChange={(value) =>
            updateQuery("location", value === "Location" ? "" : value)
          }
        >
          <SelectTrigger className="text-muted-foreground">
            <SelectValue placeholder="Location" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="Location">All Locations</SelectItem>

            {locations?.map((location) => (
              <SelectItem key={location} value={location}>
                {location}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Min Price */}
      {showPrice && (
        <Input
          type="number"
          placeholder="Min Price"
          defaultValue={searchParams.get("minPrice") || ""}
          onBlur={(e) => updateQuery("minPrice", e.target.value)}
        />
      )}

      {/* Max Price */}
      {showPrice && (
        <Input
          type="number"
          placeholder="Max Price"
          defaultValue={searchParams.get("maxPrice") || ""}
          onBlur={(e) => updateQuery("maxPrice", e.target.value)}
        />
      )}

      {/* Rating */}
      {showRating && (
        <div className="min-w-[120px]">
          <Select
            value={searchParams.get("averageRating") || ""}
            onValueChange={(value) =>
              updateQuery("averageRating", value === "all" ? "" : value)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Rating" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">All Ratings</SelectItem>
              {averageRating?.map((value) => (
                <SelectItem key={value} value={value.toString()}>
                  <Star className="h-4 w-4 text-amber-500" />
                  {value}+
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
};

"use client";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useRef, useState } from "react";

export const SearchBar = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [search, setSearch] = useState("");

  const debouncedReference = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleChange = (value: string) => {
    setSearch(value);

    if (debouncedReference.current) {
      clearTimeout(debouncedReference.current);
    }
    debouncedReference.current = setTimeout(() => {
      // console.log(value);

      const params = new URLSearchParams(searchParams.toString());

      if (value) {
        params.set("searchTerm", value);
      } else {
        params.delete("searchTerm");
      }

      router.push(`${pathname}?${params.toString()}`);
    }, 1000);
  };

  return (
    <div className="relative w-full max-w-sm">
      <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        value={search}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search news..."
        className="pl-9"
      />
    </div>
  );
};

export default SearchBar;

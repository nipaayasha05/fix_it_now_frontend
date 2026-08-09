"use client";

import {
  Pagination as ShadcnPagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (totalPages <= 1) {
    return null;
  }

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", page.toString());

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex justify-center py-8">
      <ShadcnPagination>
        <PaginationContent className="gap-2">
          {/* Previous */}
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();

                if (currentPage > 1) {
                  handlePageChange(currentPage - 1);
                }
              }}
              className={`
                h-10 rounded-xl border border-slate-200
                bg-white px-4
                text-slate-600
                shadow-sm
                transition-all duration-200
                hover:-translate-x-0.5
                hover:border-primary/30
                hover:bg-primary/5
                hover:text-primary
                dark:border-slate-700
                dark:bg-slate-900
                dark:text-slate-300
                dark:hover:bg-primary/10
                ${currentPage === 1 ? "pointer-events-none opacity-40" : ""}
              `}
            />
          </PaginationItem>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;

            return (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === page}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(page);
                  }}
                  className={`
                    flex h-10 w-10 items-center justify-center
                    rounded-xl
                    border
                    text-sm font-medium
                    transition-all duration-200

                    ${
                      currentPage === page
                        ? `
                          border-primary
                          bg-primary
                          text-white
                          shadow-md shadow-primary/25
                          hover:bg-primary
                          hover:text-white
                        `
                        : `
                          border-slate-200
                          bg-white
                          text-slate-600
                          shadow-sm
                          hover:-translate-y-0.5
                          hover:border-primary/30
                          hover:bg-primary/5
                          hover:text-primary
                          dark:border-slate-700
                          dark:bg-slate-900
                          dark:text-slate-300
                          dark:hover:bg-primary/10
                        `
                    }
                  `}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          {/* Next */}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();

                if (currentPage < totalPages) {
                  handlePageChange(currentPage + 1);
                }
              }}
              className={`
                h-10 rounded-xl border border-slate-200
                bg-white px-4
                text-slate-600
                shadow-sm
                transition-all duration-200
                hover:translate-x-0.5
                hover:border-primary/30
                hover:bg-primary/5
                hover:text-primary
                dark:border-slate-700
                dark:bg-slate-900
                dark:text-slate-300
                dark:hover:bg-primary/10
                ${
                  currentPage === totalPages
                    ? "pointer-events-none opacity-40"
                    : ""
                }
              `}
            />
          </PaginationItem>
        </PaginationContent>
      </ShadcnPagination>
    </div>
  );
};

export default Pagination;

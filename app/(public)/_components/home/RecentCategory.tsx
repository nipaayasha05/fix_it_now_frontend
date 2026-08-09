import React from "react";
import {
  AirVent,
  Wrench,
  Zap,
  Sprout,
  Sparkles,
  Hammer,
  Droplets,
  Paintbrush,
  Sofa,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

type Category = {
  id: string;
  name: string;
  description: string;
};

type RecentCategoryProps = {
  categories: Category[];
};

const categoryIcons: Record<string, React.ElementType> = {
  "AC Repair": AirVent,
  "Appliance Repair": Wrench,
  Electrical: Zap,
  Gardening: Sprout,
  Cleaning: Sparkles,
  "Home Renovation": Hammer,
  Plumbing: Droplets,
  Painting: Paintbrush,
  Carpentry: Sofa,
};

const RecentCategory = ({ categories }: RecentCategoryProps) => {
  return (
    <div>
      {/* Heading */}
      <div className="mx-auto mb-10 max-w-2xl text-center">
        {/* <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          Explore Our Services
        </p> */}

        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          Find the Right Service for{" "}
          <span className="text-blue-600 dark:text-blue-400">Your Home</span>
        </h2>

        <p className="mt-4 text-slate-600 dark:text-slate-400">
          From quick repairs to complete home improvements, find trusted
          professionals for all your home service needs.
        </p>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {categories.slice(0, 6).map((category) => {
          const Icon = categoryIcons[category.name] || Wrench;

          return (
            <div
              key={category.id}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-800"
            >
              {/* Icon */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-950 dark:text-blue-400 dark:group-hover:bg-blue-600 dark:group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                {category.name}
              </h3>

              <p className="line-clamp-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {category.description}
              </p>

              {/* Bottom */}
              <Link
                href={`/services?category=${encodeURIComponent(category.name)}`}
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-md dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                <span>Explore Services</span>

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentCategory;

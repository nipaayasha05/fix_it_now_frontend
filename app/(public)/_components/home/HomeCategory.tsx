import React from "react";
import {
  getAllServices,
  getBestRevenueServices,
} from "../../_actions/services/getAllService";
import TopServices from "./TopService";
import {
  getAllTechnicians,
  getBestRevenueTechnicians,
} from "../../_actions/technicians/techniciansActions";
import TopTechnicians from "./TopTechnicians";
import { getCategory } from "@/app/dashboard/_actions/technician/getCategory";
import RecentCategory from "./RecentCategory";

const HomeCategory = async () => {
  //   const query = await searchParams;
  const categories = await getCategory();
  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-950">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <RecentCategory categories={categories?.data || categories || []} />
      </div>
    </section>
  );
};

export default HomeCategory;

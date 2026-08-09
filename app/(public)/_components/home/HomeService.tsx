import React from "react";
import {
  getAllServices,
  getBestRevenueServices,
} from "../../_actions/services/getAllService";
import TopServices from "./TopService";

const HomeService = async () => {
  // const query = await searchParams;
  const services = await getBestRevenueServices();
  return (
    <div>
      <TopServices services={services} />
    </div>
  );
};

export default HomeService;

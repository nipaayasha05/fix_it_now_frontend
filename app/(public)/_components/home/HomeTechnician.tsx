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

const HomeTechnician = async () => {
  //   const query = await searchParams;
  const technicians = await getBestRevenueTechnicians();
  return (
    <div>
      <TopTechnicians technicians={technicians} />
    </div>
  );
};

export default HomeTechnician;

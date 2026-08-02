import React from "react";
import { getAllServices } from "../../_actions/services/getAllService";
import TopServices from "./TopService";

const HomeService = async () => {
  const services = await getAllServices();
  return (
    <div>
      <TopServices services={services.data} />
    </div>
  );
};

export default HomeService;

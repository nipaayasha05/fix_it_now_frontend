import React from "react";
import { getAllServices } from "../../_actions/services/getAllService";
import TopServices from "./TopService";

const HomeService = async ({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const query = await searchParams;
  const services = await getAllServices({ query });
  return (
    <div>
      <TopServices services={services.data} />
    </div>
  );
};

export default HomeService;

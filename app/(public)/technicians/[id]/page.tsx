import React from "react";
import { getTechnicianById } from "../../_actions/technicians/techniciansActions";
import TechnicianDetailsPage from "../../_components/technicians/TechnicianDetails";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const TechnicianById = async ({ params }: Props) => {
  const { id } = await params;
  const technicianResponse = await getTechnicianById(id);
  console.log(technicianResponse);

  return (
    <div>
      <TechnicianDetailsPage params={technicianResponse.data} />
    </div>
  );
};

export default TechnicianById;

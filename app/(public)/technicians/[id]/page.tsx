import React from "react";
import { getTechnicianById } from "../../_actions/technicians/techniciansActions";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const TechnicianById = async ({ params }: Props) => {
  const { id } = await params;
  const technicianResponse = await getTechnicianById(id);
  console.log(technicianResponse);

  return <div>TechnicianById</div>;
};

export default TechnicianById;

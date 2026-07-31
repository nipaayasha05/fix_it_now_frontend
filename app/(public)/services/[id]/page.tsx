import React from "react";
import ServiceDetails from "../../_components/services/ServiceDetails";
import { getServiceById } from "../../_actions/services/servicesActions";
import { TService } from "@/lib/type";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const serviceById = async ({ params }: Props) => {
  const { id } = await params;
  const serviceResponse = await getServiceById(id);
  console.log(serviceById);

  return (
    <div>
      <ServiceDetails service={serviceResponse.data} />
    </div>
  );
};

export default serviceById;

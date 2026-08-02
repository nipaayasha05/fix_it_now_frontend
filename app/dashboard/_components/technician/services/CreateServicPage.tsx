import { getCategory } from "@/app/dashboard/_actions/technician/getCategory";
import React from "react";
import CreateService from "./CreateService";

const CreateServicPage = async () => {
  const categories = await getCategory();
  return (
    <div>
      <CreateService categories={categories.data} />
    </div>
  );
};

export default CreateServicPage;

import { TTechnician } from "@/lib/type";
import React from "react";
import TechnicianCard from "./TechnicianCard";
import { getAllTechnicians } from "../../_actions/technicians/techniciansActions";

const AllTechnicians = async () => {
  const result = await getAllTechnicians();
  // console.log(result);
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {result.data.map((post: TTechnician) => (
        <TechnicianCard key={post.id} technician={post} />
      ))}
    </div>
  );
};

export default AllTechnicians;

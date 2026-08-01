import { getMe } from "@/app/server/auth/getMe";
import CreateProfile from "../../_components/technician/CreateProfile";

const TechnicianProfile = async () => {
  const user = await getMe();

  if (!user.data.technician) {
    return <CreateProfile />;
  }

  return (
    <div className="max-w-2xl mx-auto space-y-3 border rounded-lg p-6">
      <h2 className="text-xl font-bold">Technician Profile</h2>

      <p>
        <b>Bio:</b> {user.data.technician.bio}
      </p>

      <p>
        <b>Experience:</b> {user.data.technician.experience} years
      </p>

      <p>
        <b>Location:</b> {user.data.technician.location}
      </p>

      <p>
        <b>Skills:</b> {user.data.technician.skills.join(", ")}
      </p>
    </div>
  );
};

export default TechnicianProfile;

import { getAllUsers } from "@/app/dashboard/_actions/admin/getallUsers";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import UserCard from "./UserCard";
import { TUser } from "@/lib/type";

const Users = async () => {
  const users = await getAllUsers();

  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.data?.map((user: TUser) => (
            <UserCard key={user.id} user={user} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Users;

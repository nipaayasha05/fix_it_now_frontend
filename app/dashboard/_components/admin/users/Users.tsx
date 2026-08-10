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
import Pagination from "@/components/shared/Pagination";
import { div } from "framer-motion/client";
import UserFilter from "./UserFilter";

type AllUsersProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

const Users = async ({ searchParams }: AllUsersProps) => {
  // const query = await searchParams;

  const page = Number(searchParams?.page) || 1;
  const limit = 10;

  const users = await getAllUsers({ query: searchParams, page, limit });

  const usersData = users?.data?.data || [];

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between space-y-5">
        <div>
          <h1 className="text-2xl font-bold">All Users</h1>

          <p className="text-sm text-muted-foreground">
            Manage and monitor all users from here.
          </p>
        </div>
        <UserFilter />
      </div>
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              {/* <TableHead className="w-[60px]">#</TableHead> */}
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {usersData.map((user: TUser) => (
              <UserCard key={user.id} user={user} />
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <Pagination
          currentPage={users?.data?.meta?.page || page}
          totalPages={users?.data?.meta?.totalPages || 1}
        />
      </div>
    </div>
  );
};

export default Users;

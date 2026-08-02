"use client";

import { useState } from "react";
import { TUser } from "@/lib/type";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { TableCell, TableRow } from "@/components/ui/table";
import { editUsers } from "@/app/dashboard/_actions/admin/patchUsers";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type UserCardProps = {
  user: TUser;
};

const UserCard = ({ user }: UserCardProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const [userStatus, setUserStatus] = useState(user.status);
  const router = useRouter();

  const handleSave = async () => {
    try {
      const payload = { status: userStatus };
      const status = await editUsers(user.id, payload);
      console.log(status);

      // await updateUserStatus(user.id,{status})

      if (status.success) {
        toast.success("User updated successfully");
        setIsEditing(false);
        router.refresh();
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <TableRow>
      <TableCell>{user.name}</TableCell>

      <TableCell>{user.email}</TableCell>

      <TableCell>
        <Badge variant="secondary">{user.role}</Badge>
      </TableCell>

      <TableCell>
        {isEditing ? (
          <select
            className="rounded-md border px-2 py-1"
            value={userStatus}
            onChange={(e) =>
              setUserStatus(e.target.value as typeof user.status)
            }
          >
            <option value="ACTIVE">ACTIVE</option>
            <option value="BANNED">BANNED</option>
          </select>
        ) : (
          <Badge variant={user.status === "ACTIVE" ? "default" : "destructive"}>
            {user.status}
          </Badge>
        )}
      </TableCell>

      <TableCell className="text-right">
        {isEditing ? (
          <div className="flex justify-end gap-2">
            <Button size="sm" onClick={handleSave}>
              Save
            </Button>

            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                setUserStatus(user.status);
                setIsEditing(false);
              }}
            >
              Cancel
            </Button>
          </div>
        ) : (
          <Button
            size="sm"
            variant="outline"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
};

export default UserCard;

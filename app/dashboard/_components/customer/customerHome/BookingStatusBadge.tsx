import { Badge } from "@/components/ui/badge";

export const BookingStatusBadge = (status: string) => {
  const styles: Record<string, string> = {
    PENDING:
      "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",

    ACCEPTED:
      "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",

    DECLINED: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",

    PAID: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",

    IN_PROGRESS:
      "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",

    COMPLETED: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",

    CANCELLED: "bg-red-900 text-white dark:bg-red-950 dark:text-red-100",
  };

  return (
    <Badge className={styles[status]}>{status.replaceAll("_", " ")}</Badge>
  );
};

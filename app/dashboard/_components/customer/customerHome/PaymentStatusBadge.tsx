import { Badge } from "@/components/ui/badge";

export const PaymentStatusBadge = (status: string) => {
  const styles: Record<string, string> = {
    SUCCESS:
      "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300",

    PENDING:
      "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300",

    FAILED:
      "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300",

    REFUNDED:
      "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300",
  };

  return <Badge className={styles[status]}>{status}</Badge>;
};

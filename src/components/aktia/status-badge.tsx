import { cn } from "@/lib/utils";
import { STATUS_META, type AnalysisStatus } from "@/lib/aktia/types";

export function StatusBadge({
  status,
  className,
}: {
  status: AnalysisStatus;
  className?: string;
}) {
  const meta = STATUS_META[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold",
        meta.badge,
        className,
      )}
    >
      <span className={cn("h-2 w-2 rounded-full", meta.dot)} />
      {meta.label}
    </span>
  );
}

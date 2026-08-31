import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function StatCard({
  label,
  value,
  hint,
  icon: Icon,
  tone = "brand",
}: {
  label: string;
  value: string;
  hint?: string;
  icon: LucideIcon;
  tone?: "brand" | "success" | "warning" | "teal";
}) {
  const tones = {
    brand: "bg-brand-soft text-brand",
    success: "bg-success-soft text-success",
    warning: "bg-warning-soft text-warning-foreground",
    teal: "bg-teal-soft text-teal",
  } as const;

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <span className={cn("flex h-9 w-9 items-center justify-center rounded-xl", tones[tone])}>
          <Icon className="h-4.5 w-4.5" />
        </span>
      </div>
      <p className="mt-3 font-display text-3xl font-semibold tabular-nums text-foreground">{value}</p>
      {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}

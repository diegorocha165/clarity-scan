import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import { SEVERITY_META, type CriterionResult } from "@/lib/aktia/types";
import { cn } from "@/lib/utils";

const ICONS = {
  ok: CheckCircle2,
  warn: AlertTriangle,
  alert: XCircle,
};

export function CriterionCard({ criterion }: { criterion: CriterionResult }) {
  const meta = SEVERITY_META[criterion.severity];
  const Icon = ICONS[meta.icon];
  const bar =
    criterion.severity === "ok" ? "bg-success" : criterion.severity === "atencao" ? "bg-warning" : "bg-danger";

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-card">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <Icon
            className={cn(
              "h-5 w-5 shrink-0",
              criterion.severity === "ok"
                ? "text-success"
                : criterion.severity === "atencao"
                  ? "text-warning"
                  : "text-danger",
            )}
          />
          <p className="font-medium text-foreground">{criterion.label}</p>
        </div>
        <span className={cn("rounded-full border px-2.5 py-0.5 text-[11px] font-semibold", meta.badge)}>
          {meta.label}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{criterion.description}</p>
      <div className="mt-4 flex items-center gap-3">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
          <div className={cn("h-full rounded-full transition-all duration-700", bar)} style={{ width: `${criterion.score}%` }} />
        </div>
        <span className="text-xs font-semibold tabular-nums text-muted-foreground">{criterion.score}</span>
      </div>
    </div>
  );
}

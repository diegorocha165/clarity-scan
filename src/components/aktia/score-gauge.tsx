import { statusFromScore, STATUS_META } from "@/lib/aktia/types";
import { cn } from "@/lib/utils";

export function ScoreGauge({ score, size = 180 }: { score: number; size?: number }) {
  const status = statusFromScore(score);
  const stroke = size * 0.075;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (score / 100) * c;
  const color =
    status === "aprovada" ? "var(--success)" : status === "atencao" ? "var(--warning)" : "var(--danger)";

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} strokeWidth={stroke} stroke="var(--muted)" fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          strokeWidth={stroke}
          stroke={color}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          fill="none"
          className="transition-[stroke-dashoffset] duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-4xl font-semibold tabular-nums text-foreground">{score}</span>
        <span className="text-xs text-muted-foreground">/ 100</span>
        <span className={cn("mt-1 text-[11px] font-semibold uppercase tracking-wider", STATUS_META[status].text)}>
          {STATUS_META[status].label}
        </span>
      </div>
    </div>
  );
}

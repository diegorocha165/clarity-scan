import { cn } from "@/lib/utils";

export function AktiaLogo({
  className,
  size = "md",
  showWordmark = true,
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
}) {
  const box = size === "lg" ? "h-12 w-12" : size === "sm" ? "h-8 w-8" : "h-9 w-9";
  const text = size === "lg" ? "text-2xl" : size === "sm" ? "text-base" : "text-lg";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "relative inline-flex items-center justify-center rounded-xl gradient-brand text-brand-foreground",
          box,
        )}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-[58%] w-[58%]">
          <path
            d="M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path d="M8 15.5 11 8l3 7.5M9.3 13h3.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      {showWordmark && (
        <span className={cn("font-display font-semibold tracking-tight text-foreground", text)}>
          Akt<span className="text-brand">IA</span>
        </span>
      )}
    </span>
  );
}

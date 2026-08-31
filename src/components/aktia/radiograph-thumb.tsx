import { ScanLine } from "lucide-react";
import { cn } from "@/lib/utils";

export function RadiographThumb({
  src,
  alt,
  className,
}: {
  src: string | null;
  alt: string;
  className?: string;
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={cn("rounded-lg border border-border object-cover", className)}
      />
    );
  }
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-lg border border-border bg-gradient-to-br from-secondary to-muted text-muted-foreground",
        className,
      )}
      role="img"
      aria-label={alt}
    >
      <ScanLine className="h-1/2 w-1/2 opacity-50" />
    </div>
  );
}

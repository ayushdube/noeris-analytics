import { cn } from "@/lib/utils";

interface WordmarkProps {
  className?: string;
  showAnalytics?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: { brand: "text-base tracking-[-0.02em]", sub: "text-[9px] tracking-[0.22em]" },
  md: { brand: "text-xl tracking-[-0.02em]", sub: "text-[10px] tracking-[0.24em]" },
  lg: { brand: "text-3xl tracking-[-0.03em] md:text-4xl", sub: "text-[11px] tracking-[0.26em]" },
};

export function Wordmark({
  className,
  showAnalytics = true,
  size = "md",
}: WordmarkProps) {
  const sizes = sizeClasses[size];

  return (
    <span className={cn("inline-flex flex-col leading-none", className)}>
      <span className={cn("font-display font-medium text-foreground", sizes.brand)}>
        Noeris
      </span>
      {showAnalytics && (
        <span className={cn("mt-1 font-mono uppercase text-muted", sizes.sub)}>
          Analytics
        </span>
      )}
    </span>
  );
}

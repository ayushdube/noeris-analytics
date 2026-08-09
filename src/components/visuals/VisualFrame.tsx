import { cn } from "@/lib/utils";

interface VisualFrameProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  aspect?: "video" | "square" | "wide" | "auto";
  glow?: boolean;
}

const aspectClasses = {
  video: "md:aspect-[4/3]",
  square: "md:aspect-square",
  wide: "md:aspect-[16/10]",
  auto: "",
};

export function VisualFrame({
  children,
  className,
  contentClassName,
  aspect = "wide",
  glow = true,
}: VisualFrameProps) {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {glow && (
        <div
          className="pointer-events-none absolute -inset-4 rounded-sm bg-white/[0.04] blur-2xl md:-inset-6"
          aria-hidden="true"
        />
      )}
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-white/[0.06] bg-surface/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
          aspectClasses[aspect],
        )}
      >
        <div
          className={cn(
            "flex w-full min-w-0 flex-col p-5 md:p-7",
            aspect !== "auto" && "md:h-full",
            contentClassName,
          )}
        >
          {children}
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

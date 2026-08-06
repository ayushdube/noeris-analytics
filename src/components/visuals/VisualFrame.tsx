import { cn } from "@/lib/utils";

interface VisualFrameProps {
  children: React.ReactNode;
  className?: string;
  aspect?: "video" | "square" | "wide";
  glow?: boolean;
}

const aspectClasses = {
  video: "aspect-[4/3]",
  square: "aspect-square",
  wide: "aspect-[16/10]",
};

export function VisualFrame({
  children,
  className,
  aspect = "wide",
  glow = true,
}: VisualFrameProps) {
  return (
    <div className={cn("relative w-full", className)}>
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
        <div className="flex h-full w-full flex-col p-5 md:p-7">{children}</div>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

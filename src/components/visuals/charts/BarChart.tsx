import { cn } from "@/lib/utils";

interface BarChartProps {
  data: number[];
  className?: string;
  accent?: boolean;
}

export function BarChart({ data, className, accent = true }: BarChartProps) {
  const max = Math.max(...data, 1);

  return (
    <div
      className={cn("flex h-24 items-end gap-1 md:h-28 md:gap-1.5", className)}
      aria-hidden="true"
    >
      {data.map((value, i) => (
        <div
          key={i}
          className={cn(
            "animate-bar-grow flex-1",
            accent
              ? "bg-gradient-to-t from-accent/20 to-accent/45"
              : "bg-gradient-to-t from-white/10 to-white/25",
          )}
          style={{
            height: `${(value / max) * 100}%`,
            animationDelay: `${i * 0.03}s`,
          }}
        />
      ))}
    </div>
  );
}

import { cn } from "@/lib/utils";
import { VisualFrame } from "@/components/visuals/VisualFrame";

const layers = [
  { label: "Business decisions", emphasis: true },
  { label: "Certified KPIs", emphasis: false },
  { label: "Analytics platform", emphasis: false },
  { label: "Integrated data", emphasis: false },
];

export function DecisionFoundationVisual() {
  return (
    <VisualFrame aspect="video">
      <p className="mb-4 text-label">Decision system layers</p>
      <div className="flex flex-1 flex-col justify-center gap-2.5 md:gap-3">
        {layers.map((layer, i) => (
          <div
            key={layer.label}
            className={cn(
              "animate-in-fade rounded-sm border px-4 py-3 font-mono text-[0.6875rem] uppercase tracking-[0.12em] md:text-xs",
              layer.emphasis
                ? "border-accent/45 bg-accent-muted text-accent-foreground shadow-[inset_0_1px_0_rgba(255,77,109,0.15)]"
                : "border-white/20 bg-white/[0.08] text-muted-foreground",
            )}
            style={{
              animationDelay: `${i * 0.1}s`,
              marginInline: `${i * 10}px`,
            }}
          >
            {layer.label}
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}

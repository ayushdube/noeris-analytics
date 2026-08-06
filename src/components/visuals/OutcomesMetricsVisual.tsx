import { AnimateIn } from "@/components/visuals/AnimateIn";
import { VisualFrame } from "@/components/visuals/VisualFrame";
import { outcomes } from "@/modules/content/site-content";

export function OutcomesMetricsVisual() {
  return (
    <VisualFrame aspect="wide">
      <p className="mb-4 text-label">Typical outcomes</p>
      <div className="grid flex-1 grid-cols-2 gap-3 md:gap-4">
        {outcomes.map((item, i) => (
          <AnimateIn key={item.label} delay={i * 0.08}>
            <div className="flex flex-col justify-center bg-white/[0.04] px-4 py-4 md:px-5 md:py-5">
              <p className="animate-pulse-soft font-display text-2xl font-medium tracking-[-0.03em] text-foreground md:text-3xl">
                {item.metric}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.label}</p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </VisualFrame>
  );
}

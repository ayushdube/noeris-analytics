import { AnimateIn } from "@/components/visuals/AnimateIn";
import { VisualFrame } from "@/components/visuals/VisualFrame";
import { serviceLines } from "@/modules/content/positioning-content";

export function ServicesMapVisual() {
  return (
    <VisualFrame aspect="video">
      <p className="mb-5 text-label">Capability map</p>
      <div className="flex flex-1 flex-col justify-center gap-6">
        {serviceLines.map((line, i) => (
          <AnimateIn key={line.id} delay={i * 0.08}>
            <div className="border-t border-white/[0.06] pt-4">
              <p className="font-mono text-[0.6875rem] tracking-[0.08em] text-muted">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 font-display text-base font-medium leading-snug text-foreground md:text-lg">
                {line.title}
              </p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </VisualFrame>
  );
}

import { AnimateIn } from "@/components/visuals/AnimateIn";
import { VisualFrame } from "@/components/visuals/VisualFrame";
import { services } from "@/modules/content/site-content";

const timelineWidths = [65, 80, 90, 55, 72];

export function ServicesMapVisual() {
  return (
    <VisualFrame aspect="video">
      <p className="mb-5 text-label">Capability map</p>
      <div className="flex flex-1 flex-col justify-center gap-5">
        {services.map((service, i) => (
          <AnimateIn key={service.slug} delay={i * 0.08}>
            <div>
              <div className="mb-2 flex items-baseline justify-between gap-2">
                <span className="font-display text-sm font-medium text-foreground">{service.title}</span>
                <span className="font-mono text-xs text-muted">{service.timeline}</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden bg-white/[0.04]">
                <div
                  className="animate-in-fade h-full bg-gradient-to-r from-accent/30 to-accent/60"
                  style={{ width: `${timelineWidths[i]}%`, animationDelay: `${i * 0.1 + 0.2}s` }}
                />
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </VisualFrame>
  );
}

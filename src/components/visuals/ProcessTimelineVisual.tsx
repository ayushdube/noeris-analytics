import { AnimateIn } from "@/components/visuals/AnimateIn";
import { VisualFrame } from "@/components/visuals/VisualFrame";
import { processSteps } from "@/modules/content/site-content";

export function ProcessTimelineVisual() {
  return (
    <VisualFrame aspect="video">
      <p className="mb-5 text-label">Engagement process</p>
      <div className="flex flex-1 flex-col justify-center gap-4">
        {processSteps.map((step, i) => (
          <AnimateIn key={step.step} delay={i * 0.1}>
            <div className="flex items-start gap-4">
              <div className="relative flex flex-col items-center">
                <span className="font-mono text-xs text-accent">{step.step}</span>
                {i < processSteps.length - 1 && (
                  <div className="mt-1 h-full min-h-6 w-px bg-white/10" aria-hidden="true" />
                )}
              </div>
              <div className="flex-1 pb-2">
                <p className="font-display text-sm font-medium text-foreground">{step.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </VisualFrame>
  );
}

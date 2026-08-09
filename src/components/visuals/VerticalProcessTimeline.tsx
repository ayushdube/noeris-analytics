export interface ProcessTimelineStep {
  step: string;
  title: string;
  description: string;
}

interface VerticalProcessTimelineProps {
  steps: ProcessTimelineStep[];
  stepGap?: "default" | "relaxed";
}

const stepGapClasses = {
  default: "pb-[10px] md:pb-5",
  relaxed: "pb-[10px] md:pb-8",
};

export function VerticalProcessTimeline({ steps, stepGap = "default" }: VerticalProcessTimelineProps) {
  return (
    <div className="relative flex w-full min-w-0 flex-col">
      {steps.map((step, i) => (
        <div key={step.step} className="flex gap-3 sm:gap-4 md:gap-5">
          <div className="relative w-7 shrink-0 self-stretch sm:w-8 md:w-9">
            {i < steps.length - 1 && (
              <div
                className="absolute bottom-0 left-1/2 top-7 w-px -translate-x-1/2 bg-white/10 sm:top-8 md:top-9"
                aria-hidden="true"
              />
            )}
            <div className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.12] bg-surface font-mono text-[9px] font-medium leading-none tabular-nums text-accent sm:h-8 sm:w-8 sm:text-[10px] md:h-9 md:w-9 md:text-[11px]">
              {step.step}
            </div>
          </div>
          <div
            className={`min-w-0 flex-1 pt-0.5 md:pt-1 ${
              i < steps.length - 1 ? stepGapClasses[stepGap] : ""
            }`}
          >
            <p className="font-display text-sm font-medium leading-snug text-foreground">{step.title}</p>
            <p className="pt-0 text-[13px] leading-[1.65] text-muted sm:text-sm sm:leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

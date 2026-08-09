import { AnimateIn } from "@/components/visuals/AnimateIn";
import { VerticalProcessTimeline, type ProcessTimelineStep } from "@/components/visuals/VerticalProcessTimeline";
import { VisualFrame } from "@/components/visuals/VisualFrame";

interface HowItWorksFlowProps {
  steps: ProcessTimelineStep[];
}

export function HowItWorksFlow({ steps }: HowItWorksFlowProps) {
  return (
    <section className="overflow-x-hidden border-t border-white/10 pt-12 pb-6 md:pt-16 md:pb-8">
      <div className="mx-auto w-full min-w-0 max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <AnimateIn>
          <VisualFrame
            aspect="auto"
            glow={false}
            className="w-full min-w-0"
            contentClassName="p-4 sm:p-6 md:p-8"
          >
            <p className="mb-6 text-label sm:mb-8">How it works</p>
            <VerticalProcessTimeline steps={steps} stepGap="relaxed" />
          </VisualFrame>
        </AnimateIn>
      </div>
    </section>
  );
}

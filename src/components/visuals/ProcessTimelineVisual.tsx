import { VisualFrame } from "@/components/visuals/VisualFrame";
import { VerticalProcessTimeline } from "@/components/visuals/VerticalProcessTimeline";
import { processSteps } from "@/modules/content/site-content";

export function ProcessTimelineVisual() {
  return (
    <VisualFrame
      aspect="auto"
      glow={false}
      className="w-full min-w-0"
      contentClassName="p-4 sm:p-6 md:p-7"
    >
      <p className="mb-5 text-label sm:mb-6">Engagement process</p>
      <VerticalProcessTimeline steps={processSteps} stepGap="relaxed" />
    </VisualFrame>
  );
}

import { AnimateIn } from "@/components/visuals/AnimateIn";
import { VerticalProcessTimeline } from "@/components/visuals/VerticalProcessTimeline";

const steps = [
  { step: "1", title: "Discovery call", description: "Align on goals & data landscape" },
  { step: "2", title: "Architecture review", description: "Scope, timeline & approach" },
  { step: "3", title: "Engagement kickoff", description: "Principal-led delivery begins" },
];

const expectations = [
  "Free 45-minute discovery call - no pitch deck, no sales handoff",
  "Architecture review delivered within 5 business days",
  "Engagements typically start within 2 weeks of scoping",
  "Direct access to your Principal Consultant throughout",
];

export function EngagementFlowVisual() {
  return (
    <div className="grid min-w-0 gap-6 lg:grid-cols-2 lg:gap-8">
      <div className="min-w-0 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 sm:p-6 md:p-8">
        <p className="mb-6 text-label sm:mb-8">How engagements start</p>
        <AnimateIn>
          <VerticalProcessTimeline steps={steps} stepGap="relaxed" />
        </AnimateIn>
      </div>

      <div className="min-w-0 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 sm:p-6 md:p-8">
        <p className="mb-6 text-label sm:mb-8">What to expect</p>
        <AnimateIn delay={0.08}>
          <ul className="space-y-5">
            {expectations.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]"
              >
                <span className="mt-1 shrink-0 font-mono text-[0.6875rem] text-accent">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </AnimateIn>
      </div>
    </div>
  );
}

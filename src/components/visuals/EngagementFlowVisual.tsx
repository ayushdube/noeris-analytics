import { AnimateIn } from "@/components/visuals/AnimateIn";

const steps = [
  { label: "Discovery call", desc: "Align on goals & data landscape" },
  { label: "Architecture review", desc: "Scope, timeline & approach" },
  { label: "Engagement kickoff", desc: "Principal-led delivery begins" },
];

const expectations = [
  "Free 45-minute discovery call - no pitch deck, no sales handoff",
  "Architecture review delivered within 5 business days",
  "Engagements typically start within 2 weeks of scoping",
  "Direct access to your Principal Consultant throughout",
];

export function EngagementFlowVisual() {
  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
      <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8">
        <p className="mb-8 text-label">How engagements start</p>
        <AnimateIn>
          <ol className="relative space-y-10">
            <div
              className="absolute bottom-5 left-4 top-4 w-px bg-white/10"
              aria-hidden="true"
            />
            {steps.map((step, i) => (
              <li key={step.label} className="relative flex gap-5 pl-0">
                <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-surface-raised">
                  <span className="font-mono text-xs text-accent">{i + 1}</span>
                </div>
                <div className="min-w-0 pt-0.5">
                  <p className="font-display text-base font-medium leading-snug text-foreground">
                    {step.label}
                  </p>
                  <p className="mt-2 max-w-[24rem] text-sm leading-relaxed text-muted">
                    {step.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </AnimateIn>
      </div>

      <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8">
        <p className="mb-8 text-label">What to expect</p>
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

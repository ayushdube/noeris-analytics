import { VisualFrame } from "@/components/visuals/VisualFrame";

const beforeItems = [
  "Manual exports and Excel consolidation",
  "Metrics differ by team and system",
  "Reports built under deadline pressure",
  "No audit trail or data lineage",
  "Leadership flying blind between cycles",
];

const afterItems = [
  "Automated pipelines with daily refresh",
  "Single certified metric definition",
  "Self-serve dashboards, always current",
  "Full lineage and role-based access",
  "Real-time visibility at every level",
];

export function CaseStudiesOverviewVisual() {
  return (
    <VisualFrame aspect="video">
      <div className="flex h-full min-w-0 flex-1 flex-col">
        <div className="grid min-h-0 min-w-0 flex-1 grid-cols-1 gap-6 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-stretch md:gap-4">
          <div className="min-w-0">
            <p className="mb-3 text-label text-label-sm">Before</p>
            <ul className="space-y-2.5 md:space-y-3">
              {beforeItems.map((item) => (
                <li key={item} className="text-xs leading-[1.55] text-muted md:text-sm md:leading-[1.6]">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex shrink-0 items-center justify-center py-1 md:w-8 md:flex-col md:py-0">
            <div
              className="absolute left-0 right-0 top-1/2 h-px bg-white/10 md:inset-y-0 md:left-1/2 md:h-auto md:w-px md:-translate-x-1/2"
              aria-hidden="true"
            />
            <span className="relative z-10 bg-surface/40 px-2 font-mono text-sm text-accent md:px-1 md:text-base">
              →
            </span>
          </div>

          <div className="min-w-0">
            <p className="mb-3 text-label text-label-sm">After</p>
            <ul className="space-y-2.5 md:space-y-3">
              {afterItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-xs leading-[1.55] text-foreground md:text-sm md:leading-[1.6]"
                >
                  <span className="mt-0.5 shrink-0 font-mono text-[0.6875rem] text-accent md:text-xs">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-4 border-t border-white/[0.06] pt-4 text-center font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-muted md:text-xs">
          Multiple engagements · Multiple industries · avg. 4-6 week delivery
        </p>
      </div>
    </VisualFrame>
  );
}

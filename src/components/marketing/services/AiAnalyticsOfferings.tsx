import { aiAnalyticsOfferings } from "@/modules/content/positioning-content";
import { AnimateIn } from "@/components/visuals/AnimateIn";

export function AiAnalyticsOfferings() {
  return (
    <div className="mt-16 border-t border-white/[0.06] pt-12 md:mt-20 md:pt-16">
      <AnimateIn>
        <p className="text-label">What we implement</p>
        <h2 className="mt-5 max-w-3xl font-display text-3xl font-medium tracking-[-0.02em] text-foreground md:text-4xl">
          Four ways AI analytics shows up in the business.
        </h2>
      </AnimateIn>

      <div className="mt-12 space-y-12 md:mt-14 md:space-y-16">
        {aiAnalyticsOfferings.map((offering, index) => (
          <AnimateIn key={offering.id} delay={0.04}>
            <article className="grid gap-6 border-t border-white/[0.06] pt-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
              <div>
                <p className="font-mono text-xs tracking-[0.08em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-2xl font-medium tracking-[-0.02em] text-foreground md:text-[1.75rem]">
                  {offering.title}
                </h3>
                <p className="mt-4 text-base leading-[1.75] text-muted-foreground">{offering.summary}</p>
              </div>
              <div>
                <ul className="space-y-3">
                  {offering.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-[1.7] text-muted-foreground md:text-[0.9375rem]">
                      <span className="mt-0.5 shrink-0 font-mono text-xs text-accent" aria-hidden="true">
                        ·
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <aside className="mt-6 border-l-2 border-l-accent/60 pl-4">
                  <p className="text-sm leading-[1.75] text-muted-foreground">{offering.note}</p>
                </aside>
              </div>
            </article>
          </AnimateIn>
        ))}
      </div>
    </div>
  );
}

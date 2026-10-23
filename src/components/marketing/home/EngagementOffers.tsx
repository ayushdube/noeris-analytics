import Link from "next/link";

import { BookingButton } from "@/components/booking/BookingEmbed";
import { AnimateIn } from "@/components/visuals/AnimateIn";
import { engagementOffers } from "@/modules/content/positioning-content";

export function EngagementOffers() {
  return (
    <section className="relative" aria-labelledby="engagement-heading">
      <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-10 md:py-20">
        <AnimateIn>
          <p className="text-label">How to engage</p>
          <h2
            id="engagement-heading"
            className="mt-6 max-w-3xl font-display text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.03em] text-foreground"
          >
            Start with a question, a build, or the system you already run.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-[1.8] text-muted-foreground">
            Scope is agreed before work starts. These are ways to engage, not packaged prices or response-time guarantees.
          </p>
        </AnimateIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {engagementOffers.map((offer, index) => (
            <AnimateIn key={offer.id} delay={index * 0.06}>
              <article className="flex h-full flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8">
                <h3 className="font-display text-2xl font-medium tracking-[-0.02em] text-foreground">
                  {offer.title}
                </h3>
                <p className="mt-4 text-sm leading-[1.75] text-muted-foreground md:text-[0.9375rem]">
                  {offer.summary}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {offer.deliverables.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-0.5 shrink-0 font-mono text-xs text-accent" aria-hidden="true">
                        ·
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {offer.href && (
                  <Link
                    href={offer.href}
                    className="mt-6 text-sm text-muted-foreground transition-colors duration-500 hover:text-accent-foreground"
                  >
                    View this service →
                  </Link>
                )}
              </article>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.1}>
          <div className="mt-10">
            <BookingButton size="lg" variant="accent" label="Book a consultation" />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

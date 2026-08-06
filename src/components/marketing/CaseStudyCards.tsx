import Link from "next/link";

import { caseStudies } from "@/modules/content/site-content";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/marketing/FadeIn";

export function CaseStudyCards({ limit = 3 }: { limit?: number }) {
  const studies = caseStudies.slice(0, limit);
  const [featured, ...rest] = studies;

  if (!featured) return null;

  return (
    <section id="case-studies" className="py-28 md:py-40 lg:py-48">
      <Container wide>
        <FadeIn>
          <div className="mb-20 flex flex-col justify-between gap-8 md:mb-28 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-label">
                Case Studies
              </p>
              <h2 className="font-display text-4xl font-medium tracking-[-0.03em] text-foreground md:text-5xl">
                Proven outcomes
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-2 text-sm text-muted transition-colors duration-500 hover:text-accent-foreground"
            >
              View all
              <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <Link href={`/case-studies/${featured.slug}`} className="group block pb-20 md:pb-28">
            <p className="font-mono text-xs text-muted">{featured.industry}</p>
            <h3 className="mt-5 max-w-3xl font-display text-3xl font-medium leading-[1.1] tracking-[-0.02em] text-foreground transition-colors duration-500 group-hover:text-accent-foreground md:text-4xl lg:text-5xl">
              {featured.title}
            </h3>
            <p className="mt-8 max-w-2xl text-lg leading-[1.75] text-muted-foreground">
              {featured.challenge}
            </p>
            <div className="mt-14 flex flex-wrap gap-x-16 gap-y-8">
              {featured.impact.map((item) => (
                <div key={item.label}>
                  <p className="font-display text-2xl font-medium tracking-[-0.02em] text-foreground md:text-3xl">
                    {item.metric}
                  </p>
                  <p className="mt-2 max-w-[14ch] text-xs leading-relaxed text-muted">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </Link>
        </FadeIn>

        {rest.length > 0 && (
          <div className="grid gap-16 md:grid-cols-2 md:gap-20">
            {rest.map((study, i) => (
              <FadeIn key={study.slug} delay={0.12 + i * 0.06}>
                <Link href={`/case-studies/${study.slug}`} className="group block">
                  <p className="text-label">
                    {study.industry}
                  </p>
                  <h3 className="mt-4 font-display text-xl font-medium tracking-[-0.01em] text-foreground transition-colors duration-500 group-hover:text-accent-foreground md:text-2xl">
                    {study.title}
                  </h3>
                  <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-muted">
                    {study.challenge}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

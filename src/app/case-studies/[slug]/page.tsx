import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BookingButton } from "@/components/booking/BookingEmbed";
import { EngagementLead } from "@/components/marketing/founders/EngagementLead";
import { bookingLabel } from "@/modules/content/founders-content";
import { Section } from "@/components/layout/Container";
import { FadeIn } from "@/components/marketing/FadeIn";
import { caseStudies, getCaseStudy } from "@/modules/content/site-content";
import { createPageMetadata } from "@/lib/seo/metadata";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return createPageMetadata({
    title: study.title,
    description: study.challenge,
    path: `/case-studies/${slug}`,
  });
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <Section
        className="pt-32 md:pt-40"
        variant="editorial"
        eyebrow={study.industry}
        title={study.title}
        wide
      >
        <p className="-mt-4 font-mono text-xs text-muted">{study.client}</p>
      </Section>

      <section className="py-28 md:py-40">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <FadeIn>
            <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">Challenge</p>
            <p className="text-lg leading-[1.8] text-muted-foreground">{study.challenge}</p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="mb-8 mt-20 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">Solution</p>
            <p className="text-lg leading-[1.8] text-muted-foreground">{study.solution}</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-28 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <FadeIn>
            <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">Architecture</p>
            <p className="text-sm text-muted">{study.architecture.join(" → ")}</p>
          </FadeIn>

          <div className="mt-24 grid gap-16 sm:grid-cols-3">
            {study.impact.map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.06}>
                <div>
                  <p className="font-display text-4xl font-medium tracking-[-0.03em] text-foreground md:text-5xl">
                    {item.metric}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{item.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <EngagementLead founderId={study.engagementLead} className="max-w-xl border-t border-white/[0.06] pt-10 md:pt-12" />

          <div className="mt-14 flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between md:mt-16">
            <BookingButton size="lg" label={bookingLabel} />
            <Link href="/case-studies" className="text-sm text-muted transition-colors duration-500 hover:text-accent-foreground">
              ← All case studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

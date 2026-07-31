import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BookingButton } from "@/components/booking/BookingEmbed";
import { Section } from "@/components/layout/Container";
import { FadeIn } from "@/components/marketing/FadeIn";
import { industries, getIndustry } from "@/modules/content/site-content";
import { createPageMetadata } from "@/lib/seo/metadata";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};

  return createPageMetadata({
    title: `${industry.title} Analytics`,
    description: industry.summary,
    path: `/industries/${slug}`,
  });
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <>
      <Section
        className="pt-32 md:pt-40"
        variant="editorial"
        eyebrow="Industry"
        title={industry.title}
        description={industry.summary}
        wide
      />

      <section className="py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-20 lg:grid-cols-3 lg:gap-16">
            <FadeIn>
              <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">Challenges</p>
              <ul className="space-y-5">
                {industry.challenges.map((c) => (
                  <li key={c} className="text-sm leading-[1.8] text-muted-foreground">{c}</li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.06}>
              <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">Typical KPIs</p>
              <ul className="space-y-4">
                {industry.kpis.map((kpi) => (
                  <li key={kpi} className="text-sm text-muted">{kpi}</li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">Outcomes</p>
              <ul className="space-y-5">
                {industry.outcomes.map((o) => (
                  <li key={o} className="text-sm leading-[1.8] text-muted-foreground">{o}</li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
            <BookingButton size="lg" />
            <Link href="/industries" className="text-sm text-muted transition-colors duration-500 hover:text-accent-foreground">
              ← All industries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

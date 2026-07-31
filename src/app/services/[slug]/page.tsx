import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BookingButton } from "@/components/booking/BookingEmbed";
import { Section } from "@/components/layout/Container";
import { FadeIn } from "@/components/marketing/FadeIn";
import { ServiceLeadSignature } from "@/components/marketing/founders/ServiceLeadSignature";
import { getServiceLead, bookingLabel } from "@/modules/content/founders-content";
import { services, getService } from "@/modules/content/site-content";
import { createPageMetadata } from "@/lib/seo/metadata";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return createPageMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const leadId = getServiceLead(slug);

  return (
    <>
      <Section
        className="pt-32 md:pt-40"
        variant="editorial"
        eyebrow="Service"
        title={service.title}
        description={service.summary}
        wide
      >
        <p className="-mt-8 font-mono text-xs text-muted">Typical timeline · {service.timeline}</p>
      </Section>

      <section className="py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-20 lg:grid-cols-2 lg:gap-32">
            <FadeIn>
              <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">Challenges</p>
              <ul className="space-y-6">
                {service.challenges.map((c) => (
                  <li key={c} className="text-base leading-[1.8] text-muted-foreground">{c}</li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">Outcomes</p>
              <ul className="space-y-6">
                {service.outcomes.map((o) => (
                  <li key={o} className="text-base leading-[1.8] text-muted-foreground">{o}</li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <FadeIn>
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">Deliverables</p>
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {service.deliverables.map((d) => (
                <span key={d} className="text-sm text-muted">{d}</span>
              ))}
            </div>
          </FadeIn>
          {leadId && (
            <FadeIn delay={0.12}>
              <ServiceLeadSignature founderId={leadId} className="mt-16" />
            </FadeIn>
          )}
          <div className="mt-20 flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
            <BookingButton size="lg" label={bookingLabel} />
            <Link href="/services" className="text-sm text-muted transition-colors duration-500 hover:text-accent-foreground">
              ← All services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";

import { BookingEmbed } from "@/components/booking/BookingEmbed";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/layout/Container";
import { WhoYouWorkWith } from "@/components/marketing/founders/WhoYouWorkWith";
import { EngagementFlowVisual } from "@/components/visuals/EngagementFlowVisual";
import { contactCopy } from "@/modules/content/founders-content";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Work directly with the Principal Consultants who architect and deliver every Noeris engagement.",
  path: "/contact",
});

const heroStats = [
  "69 projects completed",
  "4.9★ client rating",
  "$200K+ delivered",
  "Top rated plus",
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 pb-10 md:pt-32 md:pb-12">
        <Container wide>
          <p className="mb-5 text-label">Contact</p>
          <h1 className="max-w-4xl text-balance font-display text-4xl font-medium tracking-[-0.03em] text-foreground md:text-5xl md:leading-[1.08]">
            {contactCopy.headline}
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-muted md:text-xs">
            {heroStats.map((stat, index) => (
              <span key={stat} className="inline-flex items-center gap-3">
                {index > 0 ? (
                  <span className="hidden text-muted/40 sm:inline" aria-hidden="true">
                    ·
                  </span>
                ) : null}
                <span>{stat}</span>
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-36 md:pb-48">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <WhoYouWorkWith />

          <div className="mb-20 hidden lg:block">
            <EngagementFlowVisual />
          </div>

          <div className="grid gap-24 lg:grid-cols-2 lg:gap-32">
            <div>
              <h2 className="mb-12 text-label">
                {contactCopy.messageHeading}
              </h2>
              <ContactForm />
            </div>
            <div>
              <h2 className="mb-6 text-label">
                {contactCopy.bookingHeading}
              </h2>
              <p className="mb-8 text-base leading-[1.8] text-muted-foreground">
                {contactCopy.schedulingIntro}
              </p>
              <BookingEmbed />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

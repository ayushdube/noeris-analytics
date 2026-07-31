import type { Metadata } from "next";

import { BookingEmbed } from "@/components/booking/BookingEmbed";
import { ContactForm } from "@/components/forms/ContactForm";
import { Section } from "@/components/layout/Container";
import { WhoYouWorkWith } from "@/components/marketing/founders/WhoYouWorkWith";
import { contactCopy } from "@/modules/content/founders-content";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Work directly with the principal consultants who architect and deliver every Noeris engagement.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Section
        className="pt-32 md:pt-40"
        variant="editorial"
        eyebrow="Contact"
        title={contactCopy.headline}
        wide
      />

      <section className="pb-36 md:pb-48">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <WhoYouWorkWith />

          <div className="grid gap-24 lg:grid-cols-2 lg:gap-32">
            <div>
              <h2 className="mb-12 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
                {contactCopy.messageHeading}
              </h2>
              <ContactForm />
            </div>
            <div>
              <h2 className="mb-12 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
                {contactCopy.bookingHeading}
              </h2>
              <BookingEmbed />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

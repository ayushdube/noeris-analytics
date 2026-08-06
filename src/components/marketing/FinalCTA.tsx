import Link from "next/link";

import { cn } from "@/lib/utils";

import { BookingButton } from "@/components/booking/BookingEmbed";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/marketing/FadeIn";
import { Button } from "@/components/ui/button";
import { whoYouWorkWith } from "@/modules/content/founders-content";
import { siteConfig } from "@/lib/site-config";

interface FinalCTAProps {
  supportingLine?: string;
  bookingLabel?: string;
  secondaryLink?: {
    href: string;
    label: string;
  };
  className?: string;
}

export function FinalCTA({
  supportingLine,
  bookingLabel = siteConfig.bookingCtaLabel,
  secondaryLink,
  className,
}: FinalCTAProps = {}) {
  return (
    <section
      className={cn("relative overflow-hidden py-36 md:py-48 lg:py-56", className)}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_100%,rgba(255,255,255,0.02),transparent)]"
        aria-hidden="true"
      />
      <Container wide>
        <FadeIn>
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl font-medium leading-[1.08] tracking-[-0.03em] text-foreground md:text-5xl lg:text-6xl">
              Ready to build your decision system?
            </h2>
            <p className="mt-10 text-lg leading-[1.75] text-muted-foreground md:text-xl">
              {whoYouWorkWith.copy}
            </p>
            {supportingLine ? (
              <p className="mt-6 text-base leading-[1.7] text-muted md:text-lg">
                {supportingLine}
              </p>
            ) : null}
            <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <BookingButton size="lg" label={bookingLabel} />
              {secondaryLink ? (
                <Button asChild variant="ghost" size="lg">
                  <Link href={secondaryLink.href}>{secondaryLink.label}</Link>
                </Button>
              ) : null}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

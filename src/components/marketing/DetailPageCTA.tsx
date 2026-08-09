import Link from "next/link";

import { BookingButton } from "@/components/booking/BookingEmbed";
import { EngagementLead } from "@/components/marketing/founders/EngagementLead";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import type { FounderId } from "@/modules/content/founders-content";

interface DetailPageCTAProps {
  founderId?: FounderId;
  primaryLabel?: string;
  secondary?: {
    href: string;
    label: string;
    variant?: "secondary" | "ghost";
  };
  backHref: string;
  backLabel: string;
}

export function DetailPageCTA({
  founderId,
  primaryLabel = siteConfig.bookingCtaLabel,
  secondary,
  backHref,
  backLabel,
}: DetailPageCTAProps) {
  return (
    <section className="pt-4 pb-8 md:pt-6 md:pb-10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {founderId ? (
          <EngagementLead
            founderId={founderId}
            className="border-t border-white/[0.06] pt-6 md:pt-8"
          />
        ) : null}

        <div className="mt-6 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between md:mt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <BookingButton size="lg" label={primaryLabel} />
            {secondary ? (
              <Button asChild variant={secondary.variant ?? "ghost"} size="lg">
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            ) : null}
          </div>
          <Link
            href={backHref}
            className="text-sm text-muted transition-colors duration-500 hover:text-accent-foreground"
          >
            {backLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

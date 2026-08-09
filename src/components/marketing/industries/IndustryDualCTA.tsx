"use client";

import Link from "next/link";

import { BookingButton } from "@/components/booking/BookingEmbed";
import { Button } from "@/components/ui/button";
import { AnimateIn } from "@/components/visuals/AnimateIn";

interface IndustryDualCTAProps {
  primary: string;
  secondary: string;
  secondaryHref: string;
  secondaryVariant?: "secondary" | "ghost";
}

export function IndustryDualCTA({
  primary,
  secondary,
  secondaryHref,
  secondaryVariant = "secondary",
}: IndustryDualCTAProps) {
  return (
    <section className="pt-4 pb-8 md:pt-6 md:pb-10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <AnimateIn>
          <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <BookingButton size="lg" label={primary} />
              <Button asChild variant={secondaryVariant} size="lg">
                <Link href={secondaryHref}>{secondary}</Link>
              </Button>
            </div>
            <Link
              href="/industries"
              className="text-sm text-muted transition-colors duration-500 hover:text-accent-foreground"
            >
              ← All industries
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

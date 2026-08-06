import Link from "next/link";

import { BookingButton } from "@/components/booking/BookingEmbed";
import { AnimateIn } from "@/components/visuals/AnimateIn";
import { Button } from "@/components/ui/button";

export function ServicesDiscoveryCTA() {
  return (
    <section className="pb-28 md:pb-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <AnimateIn>
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] px-6 py-10 md:px-10 md:py-14">
            <p className="text-label">Start with a discovery call</p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-medium tracking-[-0.02em] text-foreground md:text-4xl">
              Not sure which service fits your stage?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-[1.8] text-muted-foreground md:text-lg">
              We scope every engagement from first principles - tell us your data challenge and
              we&apos;ll recommend the right starting point.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <BookingButton size="lg" label="Book a discovery call →" />
              <Button asChild variant="ghost" size="lg">
                <Link href="/case-studies">View case studies</Link>
              </Button>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

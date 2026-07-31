import { BookingButton } from "@/components/booking/BookingEmbed";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/marketing/FadeIn";
import { bookingLabel, whoYouWorkWith } from "@/modules/content/founders-content";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-36 md:py-48 lg:py-56">
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
            <div className="mt-14">
              <BookingButton size="lg" label={bookingLabel} />
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
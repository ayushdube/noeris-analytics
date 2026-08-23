import type { Testimonial } from "@/modules/content/site-content";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: "featured" | "compact";
  className?: string;
}

export function TestimonialCard({
  testimonial,
  variant = "compact",
  className,
}: TestimonialCardProps) {
  if (testimonial.placeholder) {
    return <TestimonialPlaceholder className={className} />;
  }

  if (variant === "featured") {
    return (
      <blockquote className={cn("mx-auto max-w-5xl", className)}>
        <p className="font-display text-[clamp(1.5rem,3.5vw,2.75rem)] font-medium leading-[1.25] tracking-[-0.02em] text-foreground/90">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <footer className="mt-10 md:mt-12">
          <cite className="not-italic">
            <span className="block text-sm text-muted-foreground">{testimonial.author}</span>
            {testimonial.company ? (
              <span className="mt-1 block text-label">{testimonial.company}</span>
            ) : null}
          </cite>
        </footer>
      </blockquote>
    );
  }

  return (
    <blockquote
      className={cn(
        "flex h-full flex-col rounded-xl border border-white/[0.06] bg-surface/20 p-6 md:p-7",
        className,
      )}
    >
      <p className="flex-1 text-base leading-[1.75] text-muted-foreground md:text-[15px]">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <footer className="mt-6 border-t border-white/[0.06] pt-5">
        <cite className="not-italic">
          <span className="block text-sm text-foreground">{testimonial.author}</span>
          {testimonial.company ? (
            <span className="mt-1 block text-sm text-muted">{testimonial.company}</span>
          ) : null}
        </cite>
      </footer>
    </blockquote>
  );
}

export function TestimonialPlaceholder({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-full min-h-[220px] flex-col items-center justify-center rounded-xl border border-dashed border-white/[0.08] bg-surface/10 p-6 text-center",
        className,
      )}
      aria-hidden="true"
    >
      <p className="text-label">Client perspective</p>
      <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-muted-foreground/70">
        Additional testimonial slot - add to{" "}
        <code className="text-muted-foreground">testimonials</code> in site content.
      </p>
    </div>
  );
}

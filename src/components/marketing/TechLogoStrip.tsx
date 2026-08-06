import { technologies } from "@/modules/content/site-content";
import { Container } from "@/components/layout/Container";

export function TechLogoStrip() {
  const items = [...technologies, ...technologies];

  return (
    <section className="overflow-hidden py-20 md:py-24">
      <Container wide>
        <p className="mb-12 text-label">
          Platforms & systems
        </p>
      </Container>

      <div className="relative flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-x-14 whitespace-nowrap px-6">
          {items.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="font-display text-lg tracking-[-0.01em] text-muted-foreground md:text-xl"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

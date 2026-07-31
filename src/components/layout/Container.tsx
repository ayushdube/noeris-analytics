import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "main";
  wide?: boolean;
}

export function Container({
  children,
  className,
  as: Component = "div",
  wide = false,
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-6 lg:px-10",
        wide ? "max-w-[1400px]" : "max-w-5xl",
        className,
      )}
    >
      {children}
    </Component>
  );
}

interface SectionProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  variant?: "default" | "editorial" | "statement";
  wide?: boolean;
}

export function Section({
  children,
  className,
  id,
  eyebrow,
  title,
  description,
  variant = "default",
  wide = false,
}: SectionProps) {
  const titleClasses = {
    default:
      "font-display text-3xl font-medium tracking-[-0.02em] text-foreground md:text-[2.75rem] md:leading-[1.1]",
    editorial:
      "font-display text-4xl font-medium tracking-[-0.03em] text-foreground md:text-5xl md:leading-[1.08]",
    statement:
      "font-display text-[2.5rem] font-medium leading-[1.05] tracking-[-0.03em] text-foreground md:text-6xl lg:text-7xl",
  };

  return (
    <section id={id} className={cn("py-28 md:py-40 lg:py-48", className)}>
      <Container wide={wide}>
        {(eyebrow || title || description) && (
          <header className={cn("mb-20 md:mb-28", variant === "statement" && "mb-24 md:mb-36")}>
            {eyebrow && (
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className={cn(titleClasses[variant], "text-balance max-w-4xl")}>{title}</h2>
            )}
            {description && (
              <p className="mt-6 max-w-2xl text-lg leading-[1.7] text-muted-foreground md:text-xl md:leading-[1.65]">
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}

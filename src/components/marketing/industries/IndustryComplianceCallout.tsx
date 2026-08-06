import { AnimateIn } from "@/components/visuals/AnimateIn";

interface IndustryComplianceCalloutProps {
  text: string;
}

export function IndustryComplianceCallout({ text }: IndustryComplianceCalloutProps) {
  return (
    <section className="border-t border-white/10 py-8 md:py-10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <AnimateIn>
          <aside className="border-l-2 border-accent/60 bg-white/[0.03] px-5 py-4 md:px-6 md:py-5">
            <p className="text-sm leading-[1.8] text-muted-foreground">{text}</p>
          </aside>
        </AnimateIn>
      </div>
    </section>
  );
}

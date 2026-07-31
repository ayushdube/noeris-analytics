import { faqs } from "@/modules/content/site-content";
import { Container } from "@/components/layout/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section id="faq" className="py-28 md:py-40 lg:py-48">
      <Container wide>
        <div className="grid gap-20 lg:grid-cols-[1fr_1.4fr] lg:gap-32">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
              FAQ
            </p>
            <h2 className="font-display text-4xl font-medium tracking-[-0.03em] text-foreground md:text-5xl">
              Common questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`item-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}

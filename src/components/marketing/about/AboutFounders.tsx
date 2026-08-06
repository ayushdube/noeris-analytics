import { AnimateIn } from "@/components/visuals/AnimateIn";

const founders = [
  {
    name: "Ankita Jaiswal",
    title: "Principal Consultant, Analytics Delivery",
    bio: "8 years delivering Power BI and Spotfire solutions across oil & gas, life sciences, financial services, and eCommerce. Microsoft Certified Data Analyst. Previously at Syneos Health, Accenture, and TCS - delivering for clients including Chevron and Hess.",
  },
  {
    name: "Ayush Dubey",
    title: "Principal Consultant, Architecture & Engineering",
    bio: "Specialises in data engineering, agentic AI systems, and modern analytics architecture. Leads infrastructure, pipeline design, and DevOps for Noeris engagements.",
  },
];

export function AboutFounders() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <AnimateIn>
          <p className="mb-10 text-label md:mb-12">Founded by</p>
        </AnimateIn>
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {founders.map((founder, i) => (
            <AnimateIn key={founder.name} delay={i * 0.08}>
              <article className="h-full rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 md:p-8">
                <h3 className="font-display text-xl font-medium tracking-[-0.01em] text-foreground md:text-2xl">
                  {founder.name}
                </h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.08em] text-muted">
                  {founder.title}
                </p>
                <p className="mt-5 text-sm leading-[1.75] text-muted-foreground md:text-base md:leading-[1.8]">
                  {founder.bio}
                </p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

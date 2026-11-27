import type { Metadata } from "next";
import Link from "next/link";

import { LiveDashboard } from "@/components/marketing/examples/LiveDashboard";
import { showcaseExamples } from "@/modules/content/showcase";
import { getDashboard } from "@/modules/content/showcase/dashboards";

/**
 * Unlisted page for sharing directly with clients: every example dashboard, in Power BI and in Claude.
 * Not linked from the menu or footer, not in the sitemap, and not indexed by search engines.
 */
export const metadata: Metadata = {
  title: "Example dashboards | Noeris Analytics",
  description: "Example dashboards built by Noeris Analytics in Microsoft Power BI and in Claude.",
  robots: { index: false, follow: false },
};

export default function DashboardsPage() {
  const examples = showcaseExamples.filter((ex) => getDashboard(ex.slug));

  return (
    <div className="mx-auto max-w-[1400px] px-6 pt-32 pb-24 md:px-10 md:pt-40">
      <header className="max-w-3xl">
        <p className="text-label">Noeris Analytics · Example dashboards</p>
        <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.03em] text-foreground">
          Eight dashboards, built two ways.
        </h1>
        <p className="mt-6 text-base leading-[1.8] text-muted-foreground md:text-lg">
          Each dashboard below is built twice on the same data: once in Microsoft Power BI, which you can use right here, and once in
          Claude, which opens in a new tab. All companies and figures are fictional, on synthetic data or the public Contoso sample.
        </p>
      </header>

      <nav aria-label="Dashboards on this page" className="mt-12 flex flex-wrap gap-2">
        {examples.map((ex) => (
          <a
            key={ex.slug}
            href={`#${ex.slug}`}
            className="rounded-full border border-white/[0.1] px-4 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:border-white/[0.2] hover:text-foreground"
          >
            {getDashboard(ex.slug)!.title}
          </a>
        ))}
      </nav>

      <div className="mt-16 space-y-28 md:mt-20 md:space-y-36">
        {examples.map((ex) => (
          <section key={ex.slug} id={ex.slug} className="scroll-mt-28">
            <div className="mb-10 max-w-3xl border-t border-white/[0.08] pt-10">
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-muted">{ex.buyer}</p>
              <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.02em] text-foreground md:text-4xl">{ex.title}</h2>
              <p className="mt-4 text-base leading-[1.8] text-muted-foreground">{ex.question}</p>
              <Link href={`/examples/${ex.slug}`} className="mt-4 inline-block text-sm text-muted transition-colors duration-500 hover:text-accent-foreground">
                How it was built →
              </Link>
            </div>
            <LiveDashboard dashboard={getDashboard(ex.slug)!} slug={ex.slug} />
          </section>
        ))}
      </div>
    </div>
  );
}

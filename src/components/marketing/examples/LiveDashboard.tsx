import { ClaudeDashboardCard } from "@/components/marketing/examples/ClaudeDashboardCard";
import { claudePreviewImage, type ShowcaseDashboard } from "@/modules/content/showcase/dashboards";

/**
 * Power BI "Publish to web" report, loaded straight away (lazily, as it scrolls into view),
 * with the Claude-built version of the same dashboard underneath.
 */
export function LiveDashboard({ dashboard, slug }: { dashboard: ShowcaseDashboard; slug: string }) {
  return (
    <div className="space-y-14">
      <div>
        <div className="mb-4">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-muted">Built in Power BI · {dashboard.pages.length} pages</p>
          <p className="mt-2 font-display text-xl font-medium tracking-[-0.01em] text-foreground md:text-2xl">{dashboard.title}</p>
        </div>
        {/* 16:9 report plus the Power BI page bar underneath */}
        <div className="relative w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]" style={{ paddingTop: "calc(56.25% + 36px)" }}>
          <iframe
            title={dashboard.title}
            src={dashboard.url}
            loading="lazy"
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen
          />
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-muted">
          <p>Pages: {dashboard.pages.join(" · ")}. Use the arrows at the bottom of the report to move between them.</p>
          <a href={dashboard.url} target="_blank" rel="noopener noreferrer" className="transition-colors duration-500 hover:text-accent-foreground">
            Open full screen ↗
          </a>
        </div>
      </div>

      {dashboard.claudeUrl ? (
        <ClaudeDashboardCard title={dashboard.title} url={dashboard.claudeUrl} image={claudePreviewImage(slug)} />
      ) : null}
    </div>
  );
}

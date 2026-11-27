import Image from "next/image";

/**
 * The Claude version of an example dashboard. claude.ai does not allow embedding,
 * so this is a full-width picture of the dashboard that opens it in Claude.
 */
export function ClaudeDashboardCard({ title, url, image }: { title: string; url: string; image: string }) {
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-muted">Built in Claude</p>
          <p className="mt-2 font-display text-xl font-medium tracking-[-0.01em] text-foreground md:text-2xl">{title}</p>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm border border-accent/50 px-4 py-2 text-sm text-accent-foreground transition-colors duration-500 hover:bg-accent/10"
        >
          Open the Claude dashboard ↗
        </a>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]"
        aria-label={`Open the ${title} dashboard in Claude`}
      >
        <Image
          src={image}
          alt={`${title}, built in Claude`}
          width={1512}
          height={643}
          sizes="(min-width: 1400px) 1320px, 100vw"
          className="h-auto w-full transition-opacity duration-500 group-hover:opacity-80"
        />
        <span className="absolute bottom-4 right-4 rounded-sm bg-background/90 px-3 py-1.5 text-xs text-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          Open in Claude ↗
        </span>
      </a>
      <p className="mt-4 text-xs leading-[1.7] text-muted">
        Opens in Claude. The same data as the Power BI report; open Sources on the dashboard to see the file and calculation behind every number.
      </p>
    </div>
  );
}

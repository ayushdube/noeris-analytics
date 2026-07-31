const partners = [
  "Microsoft",
  "Snowflake",
  "Databricks",
  "AWS",
  "Google Cloud",
  "SAP",
  "HubSpot",
  "Shopify",
  "Power BI",
  "Salesforce",
];

export function TechPartners() {
  return (
    <div className="relative z-10 shrink-0 border-t border-white/[0.06]">
      <div className="mx-auto max-w-[1400px] px-6 py-8 md:px-10 md:py-9">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
          Platforms we build on
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3 md:mt-6 md:gap-x-10">
          {partners.map((name) => (
            <span
              key={name}
              className="font-display text-[15px] tracking-wide text-muted-foreground md:text-base"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

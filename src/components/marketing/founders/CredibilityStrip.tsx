import { credibilityStrip } from "@/modules/content/founders-content";

export function CredibilityStrip() {
  return (
    <div className="border-y border-white/[0.06] py-8 md:py-10">
      <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted md:gap-x-6 md:text-[11px]">
        {credibilityStrip.map((item, index) => (
          <span key={item} className="inline-flex items-center gap-x-4 md:gap-x-6">
            {index > 0 && (
              <span className="hidden text-muted/40 sm:inline" aria-hidden="true">
                •
              </span>
            )}
            <span>{item}</span>
          </span>
        ))}
      </p>
    </div>
  );
}

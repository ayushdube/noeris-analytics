import { getFounder, type FounderId } from "@/modules/content/founders-content";
import { cn } from "@/lib/utils";

interface EngagementLeadProps {
  founderId: FounderId;
  className?: string;
}

export function EngagementLead({ founderId, className }: EngagementLeadProps) {
  const founder = getFounder(founderId);

  return (
    <p className={cn("text-label-sm tracking-[0.12em] text-muted", className)}>
      <span className="uppercase">Engagement Lead</span>
      <span className="mx-2 text-muted/40" aria-hidden="true">
        ·
      </span>
      {founder.linkedinUrl ? (
        <a
          href={founder.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground underline-offset-4 transition-colors duration-500 hover:text-accent-foreground hover:underline"
          aria-label={`${founder.name} on LinkedIn`}
        >
          {founder.name}
        </a>
      ) : (
        <span className="text-muted-foreground">{founder.name}</span>
      )}
    </p>
  );
}

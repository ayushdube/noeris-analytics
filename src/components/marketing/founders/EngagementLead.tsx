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
      <span className="text-muted-foreground">{founder.name}</span>
    </p>
  );
}

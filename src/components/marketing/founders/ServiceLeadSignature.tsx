import { getFounder, type FounderId } from "@/modules/content/founders-content";
import { cn } from "@/lib/utils";

interface ServiceLeadSignatureProps {
  founderId: FounderId;
  className?: string;
}

export function ServiceLeadSignature({ founderId, className }: ServiceLeadSignatureProps) {
  const founder = getFounder(founderId);

  return (
    <p className={cn("font-mono text-[10px] tracking-[0.08em] text-muted/70", className)}>
      Led by {founder.name}, {founder.principalTitle}.
    </p>
  );
}

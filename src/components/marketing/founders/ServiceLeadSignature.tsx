import { getFounder, type FounderId } from "@/modules/content/founders-content";
import { cn } from "@/lib/utils";

interface ServiceLeadSignatureProps {
  founderId: FounderId;
  className?: string;
}

export function ServiceLeadSignature({ founderId, className }: ServiceLeadSignatureProps) {
  const founder = getFounder(founderId);

  return (
    <p className={cn("text-sm tracking-[0.04em] text-muted-foreground", className)}>
      Led by {founder.name}, {founder.principalTitle}.
    </p>
  );
}

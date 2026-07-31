import type { Lead } from "@prisma/client";

export type CrmProvider = "hubspot" | "salesforce" | "zoho" | "dynamics" | "noop";

export interface LeadDto {
  id: string;
  name: string;
  email: string;
  company?: string | null;
  phone?: string | null;
  message?: string | null;
  source: string;
  pagePath?: string | null;
  utmSource?: string | null;
  utmMedium?: string | null;
  utmCampaign?: string | null;
  metadata?: unknown;
}

export interface CrmSyncResult {
  externalId: string;
  provider: CrmProvider;
}

export interface CrmAdapter {
  readonly provider: CrmProvider;
  upsertLead(lead: LeadDto): Promise<CrmSyncResult>;
}

export function leadToDto(lead: Lead): LeadDto {
  return {
    id: lead.id,
    name: lead.name,
    email: lead.email,
    company: lead.company,
    phone: lead.phone,
    message: lead.message,
    source: lead.source,
    pagePath: lead.pagePath,
    utmSource: lead.utmSource,
    utmMedium: lead.utmMedium,
    utmCampaign: lead.utmCampaign,
    metadata: lead.metadata,
  };
}

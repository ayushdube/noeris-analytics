import type { CrmAdapter, CrmSyncResult, LeadDto } from "../types";

export class HubSpotCrmAdapter implements CrmAdapter {
  readonly provider = "hubspot" as const;

  async upsertLead(lead: LeadDto): Promise<CrmSyncResult> {
    void lead;
    if (!process.env.HUBSPOT_ACCESS_TOKEN) {
      throw new Error("HubSpot CRM adapter is not configured. Set HUBSPOT_ACCESS_TOKEN.");
    }
    // TODO: Implement HubSpot Contacts API integration
    throw new Error("HubSpot CRM integration not yet implemented");
  }
}

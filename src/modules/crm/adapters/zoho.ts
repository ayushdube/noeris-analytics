import type { CrmAdapter, CrmSyncResult, LeadDto } from "../types";

export class ZohoCrmAdapter implements CrmAdapter {
  readonly provider = "zoho" as const;

  async upsertLead(lead: LeadDto): Promise<CrmSyncResult> {
    void lead;
    if (!process.env.ZOHO_CLIENT_ID) {
      throw new Error("Zoho CRM adapter is not configured.");
    }
    // TODO: Implement Zoho CRM API integration
    throw new Error("Zoho CRM integration not yet implemented");
  }
}

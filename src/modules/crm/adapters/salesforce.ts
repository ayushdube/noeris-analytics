import type { CrmAdapter, CrmSyncResult, LeadDto } from "../types";

export class SalesforceCrmAdapter implements CrmAdapter {
  readonly provider = "salesforce" as const;

  async upsertLead(lead: LeadDto): Promise<CrmSyncResult> {
    void lead;
    if (!process.env.SALESFORCE_CLIENT_ID) {
      throw new Error("Salesforce CRM adapter is not configured.");
    }
    // TODO: Implement Salesforce Lead API integration
    throw new Error("Salesforce CRM integration not yet implemented");
  }
}

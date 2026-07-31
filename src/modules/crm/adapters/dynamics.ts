import type { CrmAdapter, CrmSyncResult, LeadDto } from "../types";

export class DynamicsCrmAdapter implements CrmAdapter {
  readonly provider = "dynamics" as const;

  async upsertLead(lead: LeadDto): Promise<CrmSyncResult> {
    void lead;
    if (!process.env.DYNAMICS_TENANT_ID) {
      throw new Error("Microsoft Dynamics CRM adapter is not configured.");
    }
    // TODO: Implement Dynamics 365 Web API integration
    throw new Error("Microsoft Dynamics CRM integration not yet implemented");
  }
}

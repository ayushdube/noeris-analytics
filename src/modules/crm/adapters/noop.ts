import type { CrmAdapter, CrmSyncResult, LeadDto } from "../types";

export class NoopCrmAdapter implements CrmAdapter {
  readonly provider = "noop" as const;

  async upsertLead(lead: LeadDto): Promise<CrmSyncResult> {
    void lead;
    return { externalId: "noop", provider: "noop" };
  }
}

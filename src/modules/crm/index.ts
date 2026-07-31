import { HubSpotCrmAdapter } from "./adapters/hubspot";
import { NoopCrmAdapter } from "./adapters/noop";
import { SalesforceCrmAdapter } from "./adapters/salesforce";
import { ZohoCrmAdapter } from "./adapters/zoho";
import { DynamicsCrmAdapter } from "./adapters/dynamics";
import type { CrmAdapter, CrmProvider } from "./types";

export function getCrmAdapter(): CrmAdapter {
  const provider = (process.env.CRM_PROVIDER ?? "noop") as CrmProvider;

  switch (provider) {
    case "hubspot":
      return new HubSpotCrmAdapter();
    case "salesforce":
      return new SalesforceCrmAdapter();
    case "zoho":
      return new ZohoCrmAdapter();
    case "dynamics":
      return new DynamicsCrmAdapter();
    case "noop":
    default:
      return new NoopCrmAdapter();
  }
}

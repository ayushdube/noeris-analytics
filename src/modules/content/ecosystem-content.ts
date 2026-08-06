export type RoleId =
  | "ceo"
  | "coo"
  | "cfo"
  | "cio-cto"
  | "finance"
  | "sales"
  | "marketing"
  | "operations"
  | "supply-chain"
  | "customer-success"
  | "hr";

export type PlatformCategory =
  | "Commerce"
  | "CRM"
  | "ERP"
  | "Finance"
  | "Data Platforms"
  | "Marketing";

export interface Platform {
  id: string;
  name: string;
  category: PlatformCategory;
  relatedRoles: RoleId[];
}

export interface RoleEntry {
  id: RoleId;
  title: string;
  description: string;
}

export interface RoleGroup {
  label: string;
  roles: RoleEntry[];
}

export const ecosystemIntro = {
  title: "Built for the businesses we understand.",
  copy: "We partner with organizations that have outgrown spreadsheets and disconnected reporting. Whether you're running an eCommerce brand, a manufacturing business, or a PE-backed portfolio company, we understand the systems you rely on and the leaders who depend on trusted data.",
  platformsHeading: "Platforms We Integrate",
  platformsCopy:
    "We build intelligence by connecting the platforms that already power your business.",
  teamsHeading: "Teams We Empower",
  teamsCopy:
    "Trusted by business leaders who rely on accurate data to make critical decisions every day.",
};

export const platformCategories: PlatformCategory[] = [
  "Commerce",
  "CRM",
  "ERP",
  "Finance",
  "Data Platforms",
  "Marketing",
];

export const platforms: Platform[] = [
  { id: "shopify", name: "Shopify", category: "Commerce", relatedRoles: ["marketing", "sales", "finance", "ceo"] },
  { id: "shopify-plus", name: "Shopify Plus", category: "Commerce", relatedRoles: ["marketing", "sales", "finance", "ceo"] },
  { id: "bigcommerce", name: "BigCommerce", category: "Commerce", relatedRoles: ["marketing", "sales", "finance", "ceo"] },
  { id: "magento", name: "Magento", category: "Commerce", relatedRoles: ["marketing", "sales", "operations", "ceo"] },
  { id: "hubspot", name: "HubSpot", category: "CRM", relatedRoles: ["marketing", "sales", "customer-success"] },
  { id: "salesforce", name: "Salesforce", category: "CRM", relatedRoles: ["sales", "marketing", "customer-success", "ceo"] },
  { id: "dynamics-365", name: "Dynamics 365", category: "CRM", relatedRoles: ["sales", "marketing", "operations", "cio-cto"] },
  { id: "zoho-crm", name: "Zoho CRM", category: "CRM", relatedRoles: ["sales", "marketing", "customer-success"] },
  { id: "netsuite", name: "NetSuite", category: "ERP", relatedRoles: ["finance", "operations", "cfo", "coo"] },
  { id: "sap", name: "SAP", category: "ERP", relatedRoles: ["operations", "finance", "supply-chain", "coo"] },
  { id: "oracle", name: "Oracle", category: "ERP", relatedRoles: ["finance", "operations", "supply-chain", "cio-cto"] },
  { id: "business-central", name: "Business Central", category: "ERP", relatedRoles: ["finance", "operations", "cfo"] },
  { id: "epicor", name: "Epicor", category: "ERP", relatedRoles: ["operations", "supply-chain", "coo"] },
  { id: "acumatica", name: "Acumatica", category: "ERP", relatedRoles: ["finance", "operations", "cfo"] },
  { id: "quickbooks", name: "QuickBooks", category: "Finance", relatedRoles: ["finance", "cfo"] },
  { id: "xero", name: "Xero", category: "Finance", relatedRoles: ["finance", "cfo"] },
  { id: "sage-intacct", name: "Sage Intacct", category: "Finance", relatedRoles: ["finance", "cfo"] },
  { id: "snowflake-databricks", name: "Snowflake / Databricks", category: "Data Platforms", relatedRoles: ["cio-cto", "finance", "coo"] },
  { id: "snowflake", name: "Snowflake", category: "Data Platforms", relatedRoles: ["cio-cto", "finance"] },
  { id: "databricks", name: "Databricks", category: "Data Platforms", relatedRoles: ["cio-cto", "finance"] },
  { id: "bigquery", name: "BigQuery", category: "Data Platforms", relatedRoles: ["cio-cto", "marketing", "finance"] },
  { id: "azure-synapse", name: "Azure Synapse", category: "Data Platforms", relatedRoles: ["cio-cto", "finance", "operations"] },
  { id: "ga4", name: "GA4", category: "Marketing", relatedRoles: ["marketing"] },
  { id: "google-ads", name: "Google Ads", category: "Marketing", relatedRoles: ["marketing", "finance"] },
  { id: "meta-ads", name: "Meta Ads", category: "Marketing", relatedRoles: ["marketing", "finance"] },
  { id: "klaviyo", name: "Klaviyo", category: "Marketing", relatedRoles: ["marketing", "customer-success"] },
];

export const roleGroups: RoleGroup[] = [
  {
    label: "Executive Leadership",
    roles: [
      { id: "ceo", title: "CEO", description: "Company performance and strategic decisions." },
      { id: "coo", title: "COO", description: "Operational visibility and execution." },
      { id: "cfo", title: "CFO", description: "Financial reporting, profitability and forecasting." },
      { id: "cio-cto", title: "CIO / CTO", description: "Data governance and platform strategy." },
    ],
  },
  {
    label: "Business Teams",
    roles: [
      { id: "finance", title: "Finance", description: "Close, budgeting and performance." },
      { id: "sales", title: "Sales", description: "Pipeline, forecasting and revenue." },
      { id: "marketing", title: "Marketing", description: "Campaign attribution and ROI." },
      { id: "operations", title: "Operations", description: "Efficiency, inventory and fulfillment." },
      { id: "supply-chain", title: "Supply Chain", description: "Procurement and logistics." },
      { id: "customer-success", title: "Customer Success", description: "Retention and customer health." },
      { id: "hr", title: "HR", description: "Workforce planning and people analytics." },
    ],
  },
];

export function platformsByCategory(category: PlatformCategory): Platform[] {
  return platforms.filter((platform) => platform.category === category);
}

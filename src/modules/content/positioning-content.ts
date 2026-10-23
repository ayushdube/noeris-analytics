export interface ServiceLine {
  id: string;
  title: string;
  summary: string;
  href: string;
  practices: Array<{ href: string; label: string }>;
}

export const serviceLines: ServiceLine[] = [
  {
    id: "data-foundations",
    title: "Data Engineering & Business Intelligence",
    summary:
      "Connect disconnected systems, model the business once, and give finance and operations reports they can reconcile.",
    href: "/services/data-engineering",
    practices: [
      { href: "/services/data-engineering", label: "Data engineering" },
      { href: "/services/business-intelligence", label: "Business intelligence" },
      { href: "/services/analytics-modernization", label: "Analytics modernization" },
    ],
  },
  {
    id: "ai-analytics",
    title: "AI Analytics & Agents",
    summary:
      "Ask questions of approved data, automate management commentary, and take a Claude or ChatGPT workflow into a controlled environment.",
    href: "/services/ai-analytics-agents",
    practices: [
      { href: "/services/ai-analytics-agents", label: "AI analytics & agents" },
      { href: "/services/ai-powered-analytics", label: "AI-powered analytics" },
      { href: "/services/agentic-ai-autonomous-analytics", label: "Agentic monitoring" },
    ],
  },
  {
    id: "managed",
    title: "Managed Analytics & Automation",
    summary:
      "Keep reporting reliable after go-live: data quality, refresh monitoring, workflow maintenance, and improvements you agree in advance.",
    href: "/services/managed-analytics",
    practices: [{ href: "/services/managed-analytics", label: "Managed analytics" }],
  },
];

export interface EngagementOffer {
  id: string;
  title: string;
  summary: string;
  deliverables: string[];
  href?: string;
}

export const engagementOffers: EngagementOffer[] = [
  {
    id: "diagnostic",
    title: "Analytics & AI Diagnostic",
    summary:
      "A fixed-scope assessment of business data, reporting processes, and the AI uses worth taking further.",
    deliverables: [
      "Data and reporting assessment",
      "High-value automation opportunities",
      "Technical feasibility and risk review",
      "Prioritized implementation roadmap",
    ],
  },
  {
    id: "implementation",
    title: "Analytics & AI Implementation",
    summary:
      "A defined project to connect data, implement a governed analytical workflow, and deliver the reporting or conversational layer you agreed.",
    deliverables: [
      "Connected sources and a reconcilable model",
      "Dashboards, reporting automation, or conversational analytics",
      "Validation of the calculations that matter",
      "Handover your team can operate",
    ],
  },
  {
    id: "managed",
    title: "Managed Analytics & AI",
    summary:
      "An ongoing engagement for data quality, reporting reliability, workflow maintenance, monitoring, and agreed improvements.",
    deliverables: [
      "Refresh and data-quality monitoring",
      "Recurring report and workflow maintenance",
      "Review of exceptions you choose to watch",
      "A backlog of improvements, agreed with you",
    ],
    href: "/services/managed-analytics",
  },
];

export interface AiOffering {
  id: string;
  title: string;
  summary: string;
  points: string[];
  note: string;
}

export const aiAnalyticsOfferings: AiOffering[] = [
  {
    id: "claude-chatgpt",
    title: "Claude and ChatGPT-powered analytics",
    summary:
      "Business users ask questions in plain language. Answers stay tied to datasets you approve and to calculations defined in the model.",
    points: [
      "Questions about sales, revenue, cost, and profitability, within metrics you have already defined.",
      "Analysis of Excel files and recurring management reports when those files are the system of record.",
      "Draft management commentary and variance explanations a reviewer can edit before they circulate.",
      "Room to explore a question without commissioning a new report for every cut.",
    ],
    note: "Using Claude or ChatGPT inside an existing workspace is a different engagement from building a custom application or API integration. A workspace can support a controlled pilot. A custom integration is the path when the workflow has to live inside your permissions, warehouse, and review process. We scope them separately.",
  },
  {
    id: "conversational",
    title: "Conversational analytics and business data agents",
    summary:
      "A natural-language interface over a SQL database, a warehouse, or a governed semantic model. The model selects an approved tool. The database or semantic model computes the result.",
    points: [
      "Natural-language-to-SQL limited to approved schemas and reviewed query patterns.",
      "Semantic-model integration so metrics keep the definitions the business has already accepted.",
      "Tool calling that runs the analytical code or queries you allow.",
      "Source citations or query provenance where the platform supports them.",
      "Calculation tests against known results before a figure is treated as management-ready.",
      "Role-based access aligned to the data each person is already permitted to see.",
      "Human review before an action that changes a record, sends a report outside the team, or commits a number to a management pack.",
    ],
    note: "A language model is not the source of truth for a numerical result. Figures should be computed against the underlying data and checked. The model interprets the question, calls the right tool, and explains what came back.",
  },
  {
    id: "automated-reporting",
    title: "Automated analytical reporting",
    summary:
      "Recurring analysis that currently depends on someone exporting, pivoting, and writing the same commentary every cycle.",
    points: [
      "Monthly financial reporting.",
      "Budget-versus-actual analysis.",
      "Variance explanations.",
      "Inventory coverage and exception lists.",
      "KPI summaries for management reviews.",
      "Anomaly checks and scheduled alerts.",
      "Report generation and distribution through a channel you already approve.",
    ],
    note: "These are example use cases. They describe the kind of workflow we can implement. They are not a list of completed client engagements.",
  },
  {
    id: "production",
    title: "Production AI analytics and enterprise integration",
    summary:
      "A demonstration still has to survive permissions, ambiguous questions, model changes, and cost. This is the engineering that makes an analytical workflow operable.",
    points: [
      "API integration with Anthropic Claude and OpenAI models, when that is the right interface for the workflow.",
      "Connections to the warehouse and to the applications that should receive the output.",
      "Permissions and data security aligned to how access already works in your environment.",
      "Evaluation sets and regression tests so a prompt or model change does not silently move a KPI.",
      "Observability for failures, latency, and model cost.",
      "An audit trail and an approval step for consequential output.",
      "Deployment and support after the first release.",
    ],
    note: "Technologies are named where they match how these systems are built. A name on this page does not mean every integration is already running in production for a Noeris client. Fit is confirmed against your stack during discovery.",
  },
];

export interface AnalyticsDemoScenario {
  id: string;
  question: string;
  metrics: Array<{ label: string; value: string }>;
  factors: string[];
  narrative: string;
  provenance: string[];
  query: string;
}

export const analyticsDemoScenarios: AnalyticsDemoScenario[] = [
  {
    id: "margin",
    question: "Why did gross margin decline this month?",
    metrics: [
      { label: "Gross margin", value: "31.4%" },
      { label: "Prior month", value: "34.1%" },
      { label: "Change", value: "−2.7 pt" },
    ],
    factors: [
      "Product mix shifted toward a lower-margin family.",
      "Freight per unit rose in two regions.",
      "Average selling price was flat.",
    ],
    narrative:
      "The decline is concentrated in mix and inbound freight. Price did not move enough to explain the gap.",
    provenance: [
      "Source: sample finance semantic model",
      "Measure: Gross Margin %",
      "Comparison: current month vs prior month",
      "Breaks: product family, region",
      "Status: calculated in the model · illustrative",
    ],
    query: `SELECT product_family, region, gross_margin_pct
FROM sample_finance.monthly_margin
WHERE month IN ('2026-09', '2026-10');`,
  },
  {
    id: "budget",
    question: "Which customers drove the revenue variance versus budget?",
    metrics: [
      { label: "Revenue", value: "$4.18M" },
      { label: "Budget", value: "$4.40M" },
      { label: "Variance", value: "−$220k" },
    ],
    factors: [
      "Three accounts account for most of the gap.",
      "Two slipped a shipment into the next month.",
      "One renewed at a lower contracted rate.",
    ],
    narrative:
      "The variance is customer-specific, not a broad demand shift. The commentary names the accounts and the reason code on each.",
    provenance: [
      "Source: sample revenue semantic model",
      "Measures: Revenue, Budget, Variance",
      "Grain: customer × month",
      "Filter: top contributors to the negative variance",
      "Status: calculated in the model · illustrative",
    ],
    query: `SELECT customer_name, revenue_amt, budget_amt
FROM sample_finance.customer_revenue
WHERE month = '2026-10'
ORDER BY (revenue_amt - budget_amt) ASC;`,
  },
  {
    id: "coverage",
    question: "Which SKUs are below the inventory coverage policy?",
    metrics: [
      { label: "Policy", value: "4 weeks" },
      { label: "Below policy", value: "14 SKUs" },
      { label: "Locations", value: "3" },
    ],
    factors: [
      "Six SKUs are stocked out at the primary warehouse.",
      "Inbound purchase orders cover five of the fourteen.",
      "The rest have no receipt inside the policy window.",
    ],
    narrative:
      "The exception list is the deliverable. Coverage weeks are calculated from on-hand and recent demand, then filtered to the policy threshold.",
    provenance: [
      "Source: sample inventory semantic model",
      "Measure: Weeks of cover",
      "Filter: weeks of cover < 4",
      "Breaks: SKU, warehouse",
      "Status: calculated in the model · illustrative",
    ],
    query: `SELECT sku, warehouse, weeks_of_cover
FROM sample_ops.inventory_coverage
WHERE weeks_of_cover < 4
ORDER BY weeks_of_cover ASC;`,
  },
];

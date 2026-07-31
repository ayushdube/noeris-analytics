export const technologies = [
  "Power BI",
  "Microsoft Fabric",
  "Snowflake",
  "Databricks",
  "Azure",
  "AWS",
  "SQL Server",
  "PostgreSQL",
  "BigQuery",
  "Shopify",
  "HubSpot",
  "Salesforce",
  "NetSuite",
  "Dynamics 365",
  "SAP",
  "Python",
  "dbt",
];

export const problems = [
  {
    title: "Fragmented data across systems",
    description:
      "Sales, finance, operations, and marketing each maintain separate sources of truth. Leadership spends more time reconciling numbers than acting on them.",
  },
  {
    title: "Reports that arrive too late",
    description:
      "Monthly close cycles and manual spreadsheet workflows delay visibility. By the time insights surface, the decision window has closed.",
  },
  {
    title: "Dashboards without decision context",
    description:
      "Teams inherit BI tools filled with charts but no clear KPI hierarchy, ownership model, or path from metric to action.",
  },
  {
    title: "Legacy analytics holding back growth",
    description:
      "On-prem warehouses, outdated BI platforms, and brittle ETL pipelines cannot scale with transaction volume or executive expectations.",
  },
];

export const outcomes = [
  { metric: "40%", label: "Faster executive reporting cycles" },
  { metric: "3x", label: "Increase in self-service adoption" },
  { metric: "60%", label: "Reduction in manual reconciliation" },
  { metric: "24h", label: "Data freshness for critical KPIs" },
];

export const services = [
  {
    slug: "business-intelligence",
    title: "Business Intelligence",
    summary:
      "Executive and operational dashboards aligned to how your business actually makes decisions.",
    deliverables: [
      "Executive dashboards",
      "Operational dashboards",
      "KPI strategy",
      "Self-service reporting",
    ],
    challenges: [
      "Inconsistent KPI definitions across departments",
      "Leadership lacks a single view of performance",
      "Analyst teams buried in ad-hoc report requests",
    ],
    outcomes: [
      "Unified KPI framework owned by business stakeholders",
      "Executive-ready dashboards refreshed on schedule",
      "Self-service layer that reduces analyst backlog",
    ],
    timeline: "8–14 weeks",
  },
  {
    slug: "data-engineering",
    title: "Data Engineering",
    summary:
      "Reliable pipelines and modern warehouses that make analytics trustworthy at scale.",
    deliverables: [
      "ETL pipelines",
      "Data warehouses",
      "Microsoft Fabric",
      "Snowflake",
      "Databricks",
    ],
    challenges: [
      "Siloed source systems with no reliable integration layer",
      "Batch jobs that fail silently or deliver stale data",
      "No governed path from raw data to certified metrics",
    ],
    outcomes: [
      "Documented, monitored ingestion from critical systems",
      "Warehouse architecture designed for analytics workloads",
      "Certified datasets ready for BI and AI consumption",
    ],
    timeline: "10–16 weeks",
  },
  {
    slug: "analytics-modernization",
    title: "Analytics Modernization",
    summary:
      "Migrate legacy BI and reporting stacks without disrupting business operations.",
    deliverables: [
      "Tableau migration",
      "Qlik migration",
      "Legacy BI modernization",
      "Reporting optimization",
    ],
    challenges: [
      "Expensive legacy licenses with declining user satisfaction",
      "Report sprawl with no lineage or ownership",
      "Migration risk perceived as too high to start",
    ],
    outcomes: [
      "Phased migration plan with parallel-run validation",
      "Consolidated report catalog with clear owners",
      "Lower total cost and faster time-to-insight",
    ],
    timeline: "12–20 weeks",
  },
  {
    slug: "ai-powered-analytics",
    title: "AI-powered Analytics",
    summary:
      "Natural language access and intelligent summaries built on trusted data foundations.",
    deliverables: [
      "Executive summaries",
      "Forecasting",
      "Natural language querying",
      "Intelligent reporting assistants",
    ],
    challenges: [
      "AI initiatives launched on ungoverned data",
      "Executives want answers, not another tool to learn",
      "Forecasting models disconnected from operational reality",
    ],
    outcomes: [
      "AI layer grounded in certified metrics and lineage",
      "Automated narrative summaries for leadership reviews",
      "Forecasting workflows integrated into planning cycles",
    ],
    timeline: "6–12 weeks",
  },
];

export const industries = [
  {
    slug: "shopify-ecommerce",
    title: "Shopify & eCommerce",
    summary: "Unify storefront, marketing, and fulfillment data into one performance view.",
    challenges: [
      "Shopify, ad platforms, and 3PL data in separate silos",
      "Margin visibility delayed until month-end",
      "Inventory and demand signals not connected",
    ],
    kpis: ["Revenue & margin by channel", "CAC & LTV", "Inventory turns", "Fulfillment SLA"],
    outcomes: [
      "Daily P&L visibility by product and channel",
      "Marketing spend tied to contribution margin",
      "Inventory planning informed by sell-through trends",
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    summary: "Connect ERP, production, and quality data for operational intelligence.",
    challenges: [
      "OEE and throughput metrics calculated manually",
      "Quality issues detected after shipment",
      "Production planning disconnected from demand signals",
    ],
    kpis: ["OEE", "Scrap rate", "On-time delivery", "Capacity utilization"],
    outcomes: [
      "Real-time production dashboards by line and plant",
      "Quality trend analysis linked to root causes",
      "Demand-driven production planning visibility",
    ],
  },
  {
    slug: "saas",
    title: "SaaS",
    summary: "Build the metrics layer investors and operators both trust.",
    challenges: [
      "Product, billing, and CRM data misaligned on ARR",
      "Cohort analysis requires manual exports",
      "Board reporting assembled under deadline pressure",
    ],
    kpis: ["ARR & NRR", "Logo churn", "CAC payback", "Expansion revenue"],
    outcomes: [
      "Single source of truth for SaaS metrics",
      "Automated board and investor reporting packs",
      "Self-service cohort and funnel analysis",
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    summary: "Operational and financial analytics with governance built in.",
    challenges: [
      "Claims, scheduling, and clinical systems disconnected",
      "Compliance requirements slow analytics delivery",
      "Leadership lacks timely operational visibility",
    ],
    kpis: ["Revenue cycle days", "Utilization rate", "Denial rate", "Patient volume"],
    outcomes: [
      "Governed analytics layer with role-based access",
      "Operational dashboards for site and service line leaders",
      "Financial performance tied to operational drivers",
    ],
  },
  {
    slug: "financial-services",
    title: "Financial Services",
    summary: "Risk-aware analytics for portfolio and operational performance.",
    challenges: [
      "Regulatory reporting separate from management reporting",
      "Data lineage requirements slow new analytics",
      "Legacy core systems resist modern integration",
    ],
    kpis: ["NIM", "Cost-to-income", "Portfolio yield", "Operational loss rate"],
    outcomes: [
      "Certified metrics with documented lineage",
      "Management reporting aligned to regulatory definitions",
      "Faster analytics delivery within compliance guardrails",
    ],
  },
  {
    slug: "logistics",
    title: "Logistics",
    summary: "End-to-end visibility across fleet, warehouse, and customer delivery.",
    challenges: [
      "TMS, WMS, and customer systems not integrated",
      "On-time delivery metrics calculated after the fact",
      "Cost per shipment opaque until billing close",
    ],
    kpis: ["On-time delivery", "Cost per mile", "Dock-to-stock time", "Order accuracy"],
    outcomes: [
      "Unified logistics control tower dashboard",
      "Route and carrier performance benchmarking",
      "Margin analysis by lane and customer segment",
    ],
  },
  {
    slug: "private-equity",
    title: "Private Equity",
    summary: "Standardized portfolio analytics across operating companies.",
    challenges: [
      "Each portco runs different ERP and BI stacks",
      "LP reporting requires manual consolidation",
      "Value creation metrics inconsistent across holdings",
    ],
    kpis: ["EBITDA bridge", "Working capital days", "Revenue growth", "Synergy tracking"],
    outcomes: [
      "Standardized KPI framework across portfolio",
      "Automated consolidation for LP and IC reporting",
      "Operating partner dashboards for value creation tracking",
    ],
  },
];

export const caseStudies = [
  {
    slug: "ecommerce-margin-intelligence",
    title: "eCommerce Margin Intelligence Platform",
    industry: "Shopify & eCommerce",
    client: "Multi-brand DTC retailer",
    challenge:
      "Leadership lacked daily visibility into contribution margin by channel. Finance spent two weeks each month reconciling Shopify, Amazon, and ad platform data.",
    solution:
      "Built a Fabric-based data platform integrating Shopify, Meta Ads, Google Ads, and NetSuite. Deployed executive and merchandising dashboards in Power BI.",
    architecture: ["Shopify", "NetSuite", "Meta Ads", "Microsoft Fabric", "Power BI"],
    impact: [
      { metric: "85%", label: "Reduction in month-end close time for channel reporting" },
      { metric: "$2.1M", label: "Margin improvement identified in first quarter" },
      { metric: "Daily", label: "P&L refresh cadence vs. monthly" },
    ],
    engagementLead: "ankita" as const,
  },
  {
    slug: "manufacturing-oee-dashboard",
    title: "Manufacturing OEE & Quality Analytics",
    industry: "Manufacturing",
    client: "Precision components manufacturer",
    challenge:
      "Plant managers tracked OEE in spreadsheets. Quality issues were discovered post-shipment, driving costly returns.",
    solution:
      "Integrated SAP ERP and MES data into Snowflake. Built real-time OEE dashboards and quality trend analysis with automated alerts.",
    architecture: ["SAP", "MES", "Snowflake", "dbt", "Power BI"],
    impact: [
      { metric: "12%", label: "OEE improvement within six months" },
      { metric: "40%", label: "Reduction in quality-related returns" },
      { metric: "4 plants", label: "Standardized on single analytics platform" },
    ],
    engagementLead: "ayush" as const,
  },
  {
    slug: "saas-board-reporting",
    title: "SaaS Metrics & Board Reporting Automation",
    industry: "SaaS",
    client: "Series B enterprise SaaS company",
    challenge:
      "Board decks required manual pulls from Salesforce, Stripe, and product analytics. ARR definitions differed across teams.",
    solution:
      "Defined certified SaaS metrics in dbt. Automated board reporting pack with ARR waterfall, cohort analysis, and pipeline coverage.",
    architecture: ["Salesforce", "Stripe", "PostgreSQL", "dbt", "Power BI"],
    impact: [
      { metric: "90%", label: "Reduction in board prep time" },
      { metric: "Single", label: "Source of truth for ARR across org" },
      { metric: "Weekly", label: "Investor metrics refresh" },
    ],
    engagementLead: "ankita" as const,
  },
  {
    slug: "healthcare-revenue-cycle",
    title: "Healthcare Revenue Cycle Analytics",
    industry: "Healthcare",
    client: "Regional health system",
    challenge:
      "Revenue cycle performance was invisible until 30 days post-service. Denial patterns were analyzed reactively.",
    solution:
      "Built governed analytics layer connecting EHR, billing, and scheduling systems. Deployed revenue cycle dashboards with denial root-cause analysis.",
    architecture: ["Epic", "SQL Server", "Azure", "Power BI"],
    impact: [
      { metric: "18%", label: "Reduction in denial rate" },
      { metric: "5 days", label: "Improvement in days in A/R" },
      { metric: "12 sites", label: "Unified performance visibility" },
    ],
    engagementLead: "ankita" as const,
  },
  {
    slug: "financial-services-risk-reporting",
    title: "Financial Services Management Reporting",
    industry: "Financial Services",
    client: "Regional credit union",
    challenge:
      "Management reporting was assembled manually from core banking and loan systems. Regulatory and management metrics diverged.",
    solution:
      "Modernized data warehouse on Azure Synapse. Aligned management and regulatory metric definitions with full lineage documentation.",
    architecture: ["Core Banking", "Azure Synapse", "Power BI"],
    impact: [
      { metric: "70%", label: "Faster management reporting cycle" },
      { metric: "100%", label: "Metric lineage documented" },
      { metric: "3 days", label: "Monthly close vs. 12 days prior" },
    ],
    engagementLead: "ayush" as const,
  },
  {
    slug: "logistics-control-tower",
    title: "Logistics Control Tower",
    industry: "Logistics",
    client: "Third-party logistics provider",
    challenge:
      "Operations teams lacked unified visibility across TMS, WMS, and customer portals. SLA breaches discovered after customer complaints.",
    solution:
      "Integrated TMS, WMS, and CRM into Databricks lakehouse. Built control tower dashboard with SLA monitoring and margin analysis.",
    architecture: ["TMS", "WMS", "Salesforce", "Databricks", "Power BI"],
    impact: [
      { metric: "25%", label: "Improvement in on-time delivery" },
      { metric: "Real-time", label: "SLA monitoring vs. daily batch" },
      { metric: "15%", label: "Cost per shipment reduction" },
    ],
    engagementLead: "ayush" as const,
  },
  {
    slug: "pe-portfolio-analytics",
    title: "PE Portfolio Analytics Standardization",
    industry: "Private Equity",
    client: "Mid-market private equity firm",
    challenge:
      "Each portfolio company reported differently. LP reporting required weeks of manual consolidation each quarter.",
    solution:
      "Defined standard KPI framework and built portfolio consolidation platform. Automated LP reporting with drill-down to portco level.",
    architecture: ["Multi-ERP", "Snowflake", "Power BI"],
    impact: [
      { metric: "8 portcos", label: "Standardized on common KPI framework" },
      { metric: "75%", label: "Reduction in LP reporting cycle" },
      { metric: "Quarterly", label: "Automated IC pack generation" },
    ],
    engagementLead: "ankita" as const,
  },
  {
    slug: "tableau-to-power-bi-migration",
    title: "Enterprise Tableau to Power BI Migration",
    industry: "Manufacturing",
    client: "Global industrial equipment manufacturer",
    challenge:
      "500+ Tableau workbooks with inconsistent data sources. License costs rising with declining user adoption.",
    solution:
      "Phased migration with parallel-run validation. Consolidated report catalog from 500 to 120 certified dashboards.",
    architecture: ["Tableau", "SAP", "Snowflake", "Power BI"],
    impact: [
      { metric: "76%", label: "Report catalog reduction" },
      { metric: "$400K", label: "Annual license savings" },
      { metric: "2x", label: "Increase in active BI users" },
    ],
    engagementLead: "ankita" as const,
  },
  {
    slug: "ai-executive-summaries",
    title: "AI Executive Summary Layer",
    industry: "SaaS",
    client: "Growth-stage B2B SaaS platform",
    challenge:
      "Executives wanted narrative insights from dashboards but lacked time to interpret charts. Previous AI pilot failed on ungoverned data.",
    solution:
      "Built certified metrics layer first, then deployed AI summary generation for weekly leadership reviews with natural language querying.",
    architecture: ["Salesforce", "PostgreSQL", "Azure OpenAI", "Power BI"],
    impact: [
      { metric: "60%", label: "Reduction in leadership meeting prep time" },
      { metric: "Certified", label: "Metrics foundation before AI layer" },
      { metric: "Weekly", label: "Automated executive narrative" },
    ],
    engagementLead: "ayush" as const,
  },
  {
    slug: "fabric-unified-analytics",
    title: "Microsoft Fabric Unified Analytics",
    industry: "Financial Services",
    client: "Insurance brokerage group",
    challenge:
      "Data scattered across Dynamics 365, SQL Server, and Excel. No single platform for actuarial and operational analytics.",
    solution:
      "Implemented Microsoft Fabric OneLake architecture with unified semantic model. Deployed operational and actuarial dashboards with row-level security.",
    architecture: ["Dynamics 365", "SQL Server", "Microsoft Fabric", "Power BI"],
    impact: [
      { metric: "Single", label: "Platform for ops and actuarial teams" },
      { metric: "50%", label: "Faster new report development" },
      { metric: "RLS", label: "Governed access across business units" },
    ],
    engagementLead: "ayush" as const,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Map decision workflows, data sources, and KPI gaps. Align stakeholders on outcomes before architecture.",
  },
  {
    step: "02",
    title: "Architecture",
    description:
      "Design the data platform, integration patterns, and semantic model. Validate against security and compliance requirements.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Deliver pipelines, certified datasets, and dashboards in phased releases. Parallel-run against existing reports where needed.",
  },
  {
    step: "04",
    title: "Enable",
    description:
      "Train business teams, document KPI ownership, and establish refresh monitoring. Transition to managed operations.",
  },
];

export const testimonials = [
  {
    quote:
      "Noeris did not just deliver dashboards. They rebuilt how our leadership team consumes performance data - with metrics we finally trust.",
    author: "Chief Operating Officer",
    company: "Multi-brand eCommerce group",
  },
  {
    quote:
      "The migration from our legacy BI stack was executed with zero disruption to month-end reporting. That alone justified the engagement.",
    author: "VP Finance",
    company: "Precision manufacturing company",
  },
  {
    quote:
      "Our board reporting went from a two-week scramble to an automated weekly refresh. The ROI was visible within the first quarter.",
    author: "CEO",
    company: "Series B SaaS platform",
  },
];

export const faqs = [
  {
    question: "Do you sell dashboards or build decision systems?",
    answer:
      "We build trusted decision systems. Dashboards are one deliverable within a broader architecture that includes data integration, KPI governance, and enablement. Our goal is faster, better decisions - not more charts.",
  },
  {
    question: "Which platforms do you specialize in?",
    answer:
      "We specialize in Microsoft Fabric, Power BI, Snowflake, Databricks, and Azure. We also integrate with Shopify, Salesforce, NetSuite, HubSpot, SAP, and other common business systems.",
  },
  {
    question: "How long does a typical engagement take?",
    answer:
      "Most engagements run 8–16 weeks depending on scope. We deliver in phases so business teams see value early - often within the first four weeks.",
  },
  {
    question: "Can you migrate from Tableau or Qlik?",
    answer:
      "Yes. We run phased migrations with parallel-run validation to eliminate disruption. Most migrations include report catalog consolidation as part of the modernization.",
  },
  {
    question: "Do you work with companies our size?",
    answer:
      "We work with growing companies from 20 to 1,000 employees across eCommerce, manufacturing, SaaS, healthcare, financial services, logistics, and private equity portfolio companies.",
  },
  {
    question: "Who will we work with during the engagement?",
    answer:
      "Every engagement is led by a principal consultant - from discovery and architecture through implementation and executive handover. You work directly with the experts responsible for your solution, not a separate sales or delivery team.",
  },
  {
    question: "How do you approach AI-powered analytics?",
    answer:
      "We build the certified metrics foundation first. AI summaries, forecasting, and natural language querying are layered on trusted data - never on ungoverned exports.",
  },
];

export const resources = [
  {
    slug: "blog",
    title: "Blog",
    description: "Perspectives on analytics strategy, platform architecture, and decision systems.",
    href: "/resources/blog",
    status: "coming-soon" as const,
  },
  {
    slug: "whitepapers",
    title: "Whitepapers",
    description: "In-depth guides on BI modernization, Fabric adoption, and KPI governance.",
    href: "/resources/whitepapers",
    status: "coming-soon" as const,
  },
  {
    slug: "architecture-guides",
    title: "Architecture Guides",
    description: "Reference architectures for common analytics platform patterns.",
    href: "/resources/architecture-guides",
    status: "coming-soon" as const,
  },
  {
    slug: "bi-maturity-assessment",
    title: "BI Maturity Assessment",
    description: "Evaluate your organization's analytics readiness across five dimensions.",
    href: "/resources/bi-maturity-assessment",
    status: "coming-soon" as const,
  },
  {
    slug: "dashboard-examples",
    title: "Dashboard Examples",
    description: "Curated examples of executive and operational dashboard patterns.",
    href: "/resources/dashboard-examples",
    status: "coming-soon" as const,
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

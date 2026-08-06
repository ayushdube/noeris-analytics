import { ArchitecturePipeline } from "@/components/visuals/ArchitecturePipeline";
import { KpiDashboardPreview } from "@/components/visuals/KpiDashboardPreview";
import { VisualFrame } from "@/components/visuals/VisualFrame";
import { BarChart } from "@/components/visuals/charts/BarChart";

interface ServiceDetailVisualProps {
  slug: string;
  deliverables: string[];
}

const serviceArchitectures: Record<string, string[]> = {
  "business-intelligence": ["Sources", "Warehouse", "Semantic model", "Power BI", "Teams"],
  "data-engineering": ["ERP/CRM", "Ingestion", "Warehouse", "dbt", "Trusted data"],
  "analytics-modernization": ["Legacy BI", "Migration", "Validation", "Power BI", "Catalog"],
  "ai-powered-analytics": ["Certified metrics", "Semantic layer", "AI layer", "Summaries", "Leadership"],
  "agentic-ai-autonomous-analytics": ["Sources", "Agents", "Monitoring", "LLM layer", "Automation"],
};

const serviceChartData: Record<string, number[]> = {
  "business-intelligence": [38, 52, 45, 68, 55, 72, 60, 78],
  "data-engineering": [30, 45, 55, 48, 62, 58, 70, 75],
  "analytics-modernization": [70, 65, 55, 48, 40, 35, 30, 28],
  "ai-powered-analytics": [25, 35, 50, 62, 58, 72, 68, 80],
  "agentic-ai-autonomous-analytics": [20, 32, 48, 58, 66, 74, 82, 88],
};

export function ServiceDetailVisual({ slug, deliverables }: ServiceDetailVisualProps) {
  const nodes = serviceArchitectures[slug] ?? serviceArchitectures["business-intelligence"];
  const chartData = serviceChartData[slug] ?? serviceChartData["business-intelligence"];

  if (slug === "ai-powered-analytics") {
    return (
      <KpiDashboardPreview
        title="AI analytics layer"
        kpis={deliverables.slice(0, 3)}
        chartData={chartData}
        chartType="line"
      />
    );
  }

  if (slug === "business-intelligence") {
    return (
      <KpiDashboardPreview
        title="Executive dashboard"
        kpis={deliverables.slice(0, 3)}
        chartData={chartData}
      />
    );
  }

  return (
    <VisualFrame aspect="wide">
      <p className="mb-4 text-label">Delivery architecture</p>
      <ArchitecturePipeline nodes={nodes!} className="mb-6" />
      <div className="flex flex-1 flex-col justify-end">
        <p className="mb-2 text-label text-label-sm">Delivery progress</p>
        <BarChart data={chartData!} />
      </div>
    </VisualFrame>
  );
}

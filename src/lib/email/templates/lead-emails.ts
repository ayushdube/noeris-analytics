import { siteConfig } from "@/lib/site-config";
import { getConsultationMailto } from "@/modules/booking";

interface LeadEmailData {
  name: string;
  email: string;
  company?: string | null;
  phone?: string | null;
  message?: string | null;
  pagePath?: string | null;
}

const baseStyles = `
  body { margin: 0; padding: 0; background: #111110; font-family: 'Segoe UI', system-ui, sans-serif; color: #ececea; }
  .container { max-width: 560px; margin: 0 auto; padding: 40px 24px; }
  .brand { font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; color: #FF0234; margin-bottom: 8px; }
  .card { background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(79, 70, 229, 0.2); border-radius: 12px; padding: 32px; }
  h1 { font-size: 24px; font-weight: 600; color: #f8fafc; margin: 0 0 16px; }
  p { font-size: 15px; line-height: 1.6; color: #94a3b8; margin: 0 0 16px; }
  .field { margin-bottom: 12px; }
  .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #64748b; }
  .value { font-size: 15px; color: #e2e8f0; margin-top: 4px; }
  .cta { display: inline-block; margin-top: 24px; padding: 12px 24px; background: #4F46E5; color: #fff; text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 500; }
  .footer { margin-top: 32px; font-size: 12px; color: #475569; text-align: center; }
`;

export function leadNotificationTemplate(lead: LeadEmailData): string {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><style>${baseStyles}</style></head>
<body>
  <div class="container">
    <div class="brand">${siteConfig.name}</div>
    <div class="card">
      <h1>New lead from ${siteConfig.domain}</h1>
      <div class="field"><div class="label">Name</div><div class="value">${escapeHtml(lead.name)}</div></div>
      <div class="field"><div class="label">Email</div><div class="value">${escapeHtml(lead.email)}</div></div>
      ${lead.company ? `<div class="field"><div class="label">Company</div><div class="value">${escapeHtml(lead.company)}</div></div>` : ""}
      ${lead.phone ? `<div class="field"><div class="label">Phone</div><div class="value">${escapeHtml(lead.phone)}</div></div>` : ""}
      ${lead.message ? `<div class="field"><div class="label">Message</div><div class="value">${escapeHtml(lead.message)}</div></div>` : ""}
      ${lead.pagePath ? `<div class="field"><div class="label">Source page</div><div class="value">${escapeHtml(lead.pagePath)}</div></div>` : ""}
    </div>
    <div class="footer">Lead captured via ${siteConfig.domain} contact form</div>
  </div>
</body>
</html>`;
}

export function leadConfirmationTemplate(lead: Pick<LeadEmailData, "name">): string {
  const consultationUrl = getConsultationMailto();
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><style>${baseStyles}</style></head>
<body>
  <div class="container">
    <div class="brand">${siteConfig.name}</div>
    <div class="card">
      <h1>Thank you, ${escapeHtml(lead.name)}</h1>
      <p>We received your inquiry and will respond within one business day.</p>
      <p>Noeris helps organizations build trusted decision systems by integrating business data, modernizing analytics platforms, and delivering actionable insights through dashboards, reporting, and AI-powered intelligence.</p>
      <p>To arrange a time, email <a href="${consultationUrl}">${siteConfig.email}</a>.</p>
    </div>
    <div class="footer">${siteConfig.name} · ${siteConfig.email}</div>
  </div>
</body>
</html>`;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

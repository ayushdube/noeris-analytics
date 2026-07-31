import { prisma } from "@/lib/db/prisma";
import { getEmailFrom, getLeadsNotifyEmail, sendEmail } from "@/lib/email/client";
import {
  leadConfirmationTemplate,
  leadNotificationTemplate,
} from "@/lib/email/templates/lead-emails";
import { logger } from "@/lib/logging/logger";
import type { ContactApiInput } from "@/lib/validation/contact";
import { getCrmAdapter } from "@/modules/crm";
import { leadToDto } from "@/modules/crm/types";

export async function createLead(input: ContactApiInput) {
  const lead = await prisma.lead.create({
    data: {
      name: input.name,
      email: input.email,
      company: input.company || null,
      phone: input.phone || null,
      message: input.message,
      pagePath: input.pagePath ?? null,
      utmSource: input.utmSource ?? null,
      utmMedium: input.utmMedium ?? null,
      utmCampaign: input.utmCampaign ?? null,
      source: "contact_form",
    },
  });

  logger.info("Lead created", { leadId: lead.id, email: lead.email });

  await Promise.all([
    sendLeadNotification(lead),
    sendLeadConfirmation(lead),
  ]);

  syncLeadToCrm(lead.id).catch((error) => {
    logger.error("CRM sync failed", {
      leadId: lead.id,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  });

  return lead;
}

async function sendLeadNotification(lead: {
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  message: string | null;
  pagePath: string | null;
}) {
  await sendEmail({
    to: getLeadsNotifyEmail(),
    subject: `New lead: ${lead.name}${lead.company ? ` · ${lead.company}` : ""}`,
    html: leadNotificationTemplate(lead),
  });
}

async function sendLeadConfirmation(lead: { name: string; email: string }) {
  await sendEmail({
    to: lead.email,
    subject: "We received your inquiry - Noeris Analytics",
    html: leadConfirmationTemplate({ name: lead.name }),
  });
}

async function syncLeadToCrm(leadId: string) {
  const lead = await prisma.lead.findUnique({ where: { id: leadId } });
  if (!lead) return;

  const adapter = getCrmAdapter();
  if (adapter.provider === "noop") return;

  const result = await adapter.upsertLead(leadToDto(lead));

  await prisma.lead.update({
    where: { id: leadId },
    data: {
      crmSyncedAt: new Date(),
      crmProvider: result.provider,
      crmExternalId: result.externalId,
    },
  });

  logger.info("Lead synced to CRM", {
    leadId,
    provider: result.provider,
    externalId: result.externalId,
  });
}

export function validateEmailConfig(): boolean {
  return Boolean(
    process.env.RESEND_API_KEY &&
      process.env.EMAIL_FROM &&
      process.env.LEADS_NOTIFY_EMAIL,
  );
}

export { getEmailFrom };

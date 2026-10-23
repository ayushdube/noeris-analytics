import { Resend } from "resend";

import { logger } from "@/lib/logging/logger";
import { siteConfig } from "@/lib/site-config";

let resendClient: Resend | null = null;

export function getResendClient(): Resend {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  if (!resendClient) {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }

  return resendClient;
}

export function getEmailFrom(): string {
  return process.env.EMAIL_FROM ?? "Noeris Analytics <hello@noeris.io>";
}

export function getLeadsNotifyEmail(): string {
  const configured = process.env.LEADS_NOTIFY_EMAIL?.trim();
  return configured || siteConfig.email;
}

export async function sendEmail(params: {
  to: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
}) {
  const resend = getResendClient();
  const from = getEmailFrom();

  const { data, error } = await resend.emails.send({
    from,
    to: params.to,
    subject: params.subject,
    html: params.html,
    replyTo: params.replyTo,
  });

  if (error) {
    logger.error("Failed to send email", { error, subject: params.subject });
    throw new Error(error.message);
  }

  return data;
}

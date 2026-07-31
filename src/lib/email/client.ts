import { Resend } from "resend";

import { logger } from "@/lib/logging/logger";

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
  if (!process.env.LEADS_NOTIFY_EMAIL) {
    throw new Error("LEADS_NOTIFY_EMAIL is not configured");
  }
  return process.env.LEADS_NOTIFY_EMAIL;
}

export async function sendEmail(params: {
  to: string | string[];
  subject: string;
  html: string;
}) {
  const resend = getResendClient();
  const from = getEmailFrom();

  const { data, error } = await resend.emails.send({
    from,
    to: params.to,
    subject: params.subject,
    html: params.html,
  });

  if (error) {
    logger.error("Failed to send email", { error, subject: params.subject });
    throw new Error(error.message);
  }

  return data;
}

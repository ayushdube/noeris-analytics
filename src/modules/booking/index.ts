import { siteConfig } from "@/lib/site-config";

const consultationBody = [
  "Hello,",
  "",
  "I would like to arrange a consultation.",
  "",
  "Company:",
  "What we need help with:",
].join("\n");

export function getConsultationMailto(
  subject = "Consultation with Noeris",
): string {
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(consultationBody)}`;
}

export function getBookingUrl(): string {
  return getConsultationMailto();
}

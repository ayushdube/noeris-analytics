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

/**
 * Optional scheduler (Cal.com, Calendly, Google Calendar booking page).
 * Set NEXT_PUBLIC_BOOKING_URL to send every booking CTA there; without it,
 * CTAs fall back to email and their labels avoid promising a booking.
 */
export const schedulerUrl = process.env.NEXT_PUBLIC_BOOKING_URL?.trim() || undefined;
export const hasScheduler = Boolean(schedulerUrl);

/** Short label for header, mobile menu, and inline links. */
export const contactCtaShortLabel = hasScheduler ? "Book a call" : "Get in touch";

export function getBookingUrl(): string {
  return schedulerUrl ?? getConsultationMailto();
}

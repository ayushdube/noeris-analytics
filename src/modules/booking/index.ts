/** Default Calendly URL - override with NEXT_PUBLIC_CALENDLY_URL in production */
export const DEFAULT_CALENDLY_URL = "https://calendly.com/hello-noeris";

export interface BookingProvider {
  type: "calendly" | "calcom" | "microsoft-bookings";
  bookUrl: string;
  embedUrl?: string;
}

function toCalendlyEmbedUrl(url: string) {
  return url.includes("?") ? `${url}&hide_gdpr_banner=1` : `${url}?hide_gdpr_banner=1`;
}

export function getBookingProvider(): BookingProvider {
  const url = process.env.NEXT_PUBLIC_CALENDLY_URL ?? DEFAULT_CALENDLY_URL;

  return {
    type: "calendly",
    bookUrl: url,
    embedUrl: toCalendlyEmbedUrl(url),
  };
}

export function getBookingUrl(): string {
  return process.env.NEXT_PUBLIC_CALENDLY_URL ?? DEFAULT_CALENDLY_URL;
}

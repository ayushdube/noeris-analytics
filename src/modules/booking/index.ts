export interface BookingProvider {
  type: "calendly" | "calcom" | "microsoft-bookings";
  bookUrl: string;
  embedUrl?: string;
}

export function getBookingProvider(): BookingProvider | null {
  const url = process.env.NEXT_PUBLIC_CALENDLY_URL;
  if (!url) return null;

  return {
    type: "calendly",
    bookUrl: url,
    embedUrl: url.includes("?") ? `${url}&hide_gdpr_banner=1` : `${url}?hide_gdpr_banner=1`,
  };
}

export function getBookingUrl(): string {
  return process.env.NEXT_PUBLIC_CALENDLY_URL ?? "/contact";
}

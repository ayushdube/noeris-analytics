"use client";

import { CalendarDays, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { getBookingUrl, getConsultationMailto, schedulerUrl } from "@/modules/booking";

interface BookingEmbedProps {
  className?: string;
}

export function BookingEmbed({ className }: BookingEmbedProps) {
  return (
    <div className={className}>
      {schedulerUrl ? (
        <Button asChild size="lg" className="mb-3">
          <a href={schedulerUrl} target="_blank" rel="noopener noreferrer">
            <CalendarDays className="h-4 w-4" strokeWidth={1.5} />
            Book a time
          </a>
        </Button>
      ) : null}
      <Button asChild size="lg" variant={schedulerUrl ? "secondary" : "default"}>
        <a href={getConsultationMailto()}>
          <Mail className="h-4 w-4" strokeWidth={1.5} />
          Email {siteConfig.email}
        </a>
      </Button>
    </div>
  );
}

interface BookingButtonProps {
  className?: string;
  variant?: "default" | "accent" | "secondary";
  size?: "default" | "lg";
  label?: string;
}

export function BookingButton({
  className,
  variant = "default",
  size = "default",
  label = siteConfig.bookingCtaLabel,
}: BookingButtonProps) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a
        href={getBookingUrl()}
        {...(schedulerUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {label}
      </a>
    </Button>
  );
}

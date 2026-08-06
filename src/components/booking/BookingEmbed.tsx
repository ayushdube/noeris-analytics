"use client";

import { Calendar } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { getBookingProvider } from "@/modules/booking";

interface BookingEmbedProps {
  className?: string;
}

export function BookingEmbed({ className }: BookingEmbedProps) {
  const provider = getBookingProvider();

  if (!provider.embedUrl) {
    return (
      <div className={className}>
        <Button asChild size="lg">
          <a href={provider.bookUrl} target="_blank" rel="noopener noreferrer">
            <Calendar className="h-4 w-4" strokeWidth={1.5} />
            Schedule a discovery call →
          </a>
        </Button>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="depth-soft overflow-hidden rounded-sm border border-white/[0.06]">
        <iframe
          src={provider.embedUrl}
          title="Schedule a discovery call with Noeris Analytics"
          className="h-[680px] w-full border-0 bg-neutral-100"
          loading="lazy"
        />
      </div>
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
  const provider = getBookingProvider();

  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href={provider.bookUrl} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    </Button>
  );
}

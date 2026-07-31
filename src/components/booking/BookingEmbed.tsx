"use client";

import { Calendar } from "lucide-react";

import { Button } from "@/components/ui/button";
import { bookingLabel } from "@/modules/content/founders-content";
import { getBookingProvider } from "@/modules/booking";

interface BookingEmbedProps {
  className?: string;
}

export function BookingEmbed({ className }: BookingEmbedProps) {
  const provider = getBookingProvider();

  if (!provider?.embedUrl) {
    return (
      <div className={className}>
        <Calendar className="mb-6 h-6 w-6 text-muted" strokeWidth={1.5} />
        <p className="max-w-sm text-base leading-[1.8] text-muted">
          Scheduling is being configured. Use the contact form and we will follow up within one business day.
        </p>
      </div>
    );
  }

  return (
    <div className={`depth-soft overflow-hidden rounded-sm ${className ?? ""}`}>
      <iframe
        src={provider.embedUrl}
        title="Schedule a strategy session with Noeris Analytics"
        className="h-[680px] w-full border-0 bg-neutral-100"
        loading="lazy"
      />
    </div>
  );
}

interface BookingButtonProps {
  className?: string;
  variant?: "default" | "secondary";
  size?: "default" | "lg";
  label?: string;
}

export function BookingButton({
  className,
  variant = "default",
  size = "default",
  label = bookingLabel,
}: BookingButtonProps) {
  const provider = getBookingProvider();
  const href = provider?.bookUrl ?? "/contact";

  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href={href} target={provider ? "_blank" : undefined} rel={provider ? "noopener noreferrer" : undefined}>
        {label}
      </a>
    </Button>
  );
}

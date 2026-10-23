"use client";

import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { getConsultationMailto } from "@/modules/booking";

interface BookingEmbedProps {
  className?: string;
}

export function BookingEmbed({ className }: BookingEmbedProps) {
  return (
    <div className={className}>
      <Button asChild size="lg">
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
      <a href={getConsultationMailto()}>{label}</a>
    </Button>
  );
}

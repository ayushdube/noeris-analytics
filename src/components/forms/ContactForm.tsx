"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  contactFormSchema,
  type ContactFormInput,
} from "@/lib/validation/contact";

interface ContactFormProps {
  className?: string;
}

const fieldGroupClassName = "flex flex-col gap-3";

const fieldClassName =
  "rounded-sm border border-white/15 bg-white/[0.03] px-4 placeholder:text-muted/70 focus-visible:border-accent/40 focus-visible:ring-1 focus-visible:ring-accent/20";

export function ContactForm({ className }: ContactFormProps) {
  const pathname = usePathname();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
      website: "",
      pagePath: pathname,
    },
  });

  async function onSubmit(data: ContactFormInput) {
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, pagePath: pathname }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? "Something went wrong");
      }

      setStatus("success");
      reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Unable to submit. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className={className}>
        <h3 className="font-display text-2xl font-medium text-foreground">Thank you</h3>
        <p className="mt-5 text-base leading-[1.8] text-muted">
          We received your inquiry and will respond within one business day.
        </p>
        <button
          type="button"
          className="mt-10 text-sm text-muted transition-colors duration-500 hover:text-accent-foreground"
          onClick={() => setStatus("idle")}
        >
          Send another message →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className} noValidate>
      <div className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-x-6">
          <div className={fieldGroupClassName}>
            <Label htmlFor="name" className="text-label">
              Name
            </Label>
            <Input
              id="name"
              autoComplete="name"
              placeholder="Your name"
              className={cn(fieldClassName, "h-12 border-b-0")}
              {...register("name")}
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <p className="text-sm text-red-400/70" role="alert">{errors.name.message}</p>
            )}
          </div>

          <div className={fieldGroupClassName}>
            <Label htmlFor="email" className="text-label">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              className={cn(fieldClassName, "h-12 border-b-0")}
              {...register("email")}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="text-sm text-red-400/70" role="alert">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className={fieldGroupClassName}>
          <Label htmlFor="company" className="text-label">
            Company
          </Label>
          <Input
            id="company"
            autoComplete="organization"
            placeholder="Company name"
            className={cn(fieldClassName, "h-12 border-b-0")}
            {...register("company")}
          />
        </div>

        <div className={fieldGroupClassName}>
          <Label htmlFor="message" className="text-label">
            How can we help?
          </Label>
          <Textarea
            id="message"
            rows={5}
            placeholder="Tell us about your data landscape, goals, and timeline"
            className={cn(fieldClassName, "min-h-[140px] resize-y bg-white/[0.03]")}
            {...register("message")}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p className="text-sm text-red-400/70" role="alert">{errors.message.message}</p>
          )}
        </div>
      </div>

      <div className="absolute -left-[9999px]" aria-hidden="true">
        <Label htmlFor="website">Website</Label>
        <Input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      {status === "error" && (
        <p className="mt-8 text-sm text-red-400/70" role="alert">{errorMessage}</p>
      )}

      <Button type="submit" className="mt-8" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send message"}
      </Button>

      <p className="mt-3 text-sm text-muted">
        We respond to all enquiries within one business day.
      </p>
    </form>
  );
}

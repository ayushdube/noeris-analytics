"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  contactFormSchema,
  type ContactFormInput,
} from "@/lib/validation/contact";

interface ContactFormProps {
  className?: string;
}

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
      phone: "",
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
      <div className="space-y-12">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-3">
            <Label htmlFor="name" className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
              Name
            </Label>
            <Input id="name" autoComplete="name" {...register("name")} aria-invalid={!!errors.name} />
            {errors.name && (
              <p className="text-sm text-red-400/70" role="alert">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-3">
            <Label htmlFor="email" className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
              Email
            </Label>
            <Input id="email" type="email" autoComplete="email" {...register("email")} aria-invalid={!!errors.email} />
            {errors.email && (
              <p className="text-sm text-red-400/70" role="alert">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-3">
            <Label htmlFor="company" className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
              Company
            </Label>
            <Input id="company" autoComplete="organization" {...register("company")} />
          </div>

          <div className="space-y-3">
            <Label htmlFor="phone" className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
              Phone
            </Label>
            <Input id="phone" type="tel" autoComplete="tel" {...register("phone")} />
          </div>
        </div>

        <div className="space-y-3">
          <Label htmlFor="message" className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
            How can we help?
          </Label>
          <Textarea id="message" rows={5} {...register("message")} aria-invalid={!!errors.message} />
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

      <Button type="submit" className="mt-14" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}

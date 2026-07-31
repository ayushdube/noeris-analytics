import { NextResponse } from "next/server";

import { logger } from "@/lib/logging/logger";
import { getClientIp, rateLimit } from "@/lib/rate-limit";
import { contactApiSchema } from "@/lib/validation/contact";
import { createLead } from "@/modules/leads/create-lead";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const rateLimitResult = await rateLimit(`contact:${ip}`);

    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": String(rateLimitResult.limit),
            "X-RateLimit-Remaining": String(rateLimitResult.remaining),
            "X-RateLimit-Reset": String(rateLimitResult.reset),
          },
        },
      );
    }

    const body = await request.json();
    const parsed = contactApiSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    const { website, ...data } = parsed.data;

    if (website && website.length > 0) {
      logger.warn("Honeypot triggered", { ip });
      return NextResponse.json({ success: true, message: "Thank you for your inquiry." });
    }

    const lead = await createLead(data);

    return NextResponse.json(
      { success: true, message: "Thank you for your inquiry.", id: lead.id },
      { status: 201 },
    );
  } catch (error) {
    logger.error("Contact API error", {
      error: error instanceof Error ? error.message : "Unknown error",
    });

    return NextResponse.json(
      { error: "Unable to process your request. Please try again or email us directly." },
      { status: 500 },
    );
  }
}

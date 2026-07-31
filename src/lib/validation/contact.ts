import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().max(200).optional().or(z.literal("")),
  phone: z.string().max(30).optional().or(z.literal("")),
  message: z
    .string()
    .min(10, "Please provide a brief description of your needs")
    .max(5000),
  website: z.string().max(0, "Invalid submission").optional().or(z.literal("")),
  pagePath: z.string().optional(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export const contactApiSchema = contactFormSchema.extend({
  website: z.string().optional(),
});

export type ContactApiInput = z.infer<typeof contactApiSchema>;

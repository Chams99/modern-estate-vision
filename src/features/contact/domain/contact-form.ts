import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(3, "Please enter your full name")
    .max(120, "Name is too long"),
  workEmail: z
    .string()
    .email("Enter a valid work email")
    .max(160, "Email is too long"),
  organization: z
    .string()
    .min(2, "Organization is required")
    .max(160, "Organization name is too long"),
  aumBracket: z.enum(["<250M", "250M-1B", "1B-5B", "5B+"], {
    required_error: "Select an approximate AUM bracket",
  }),
  message: z
    .string()
    .min(10, "Add a bit more context so we can prepare")
    .max(2000, "Message is too long"),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

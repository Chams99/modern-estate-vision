import { contactFormSchema } from "./contact-form";

describe("contactFormSchema", () => {
  it("accepts a valid payload", () => {
    const result = contactFormSchema.safeParse({
      fullName: "Ada Lovelace",
      workEmail: "ada@example.com",
      organization: "Analytical Engines",
      aumBracket: "1B-5B",
      message: "We would like to explore portfolio analytics.",
    });

    expect(result.success).toBe(true);
  });

  it("rejects an invalid email", () => {
    const result = contactFormSchema.safeParse({
      fullName: "Ada Lovelace",
      workEmail: "not-an-email",
      organization: "Analytical Engines",
      aumBracket: "1B-5B",
      message: "We would like to explore portfolio analytics.",
    });

    expect(result.success).toBe(false);
  });
});

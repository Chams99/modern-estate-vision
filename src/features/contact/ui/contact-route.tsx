import { useMemo } from "react";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Building2, Loader2 } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Button } from "../../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import {
  contactFormSchema,
  type ContactFormInput,
} from "../domain/contact-form";
import {
  HttpContactRepository,
  buildSubmitContactUseCase,
} from "../application/submit-contact-form";
import { httpClient } from "../../../shared/api/http-client";
import { useToast } from "../../../components/ui/use-toast";

const repository = new HttpContactRepository(httpClient);
const submitContact = buildSubmitContactUseCase(repository);

export const ContactRoute = () => {
  const { toast } = useToast();

  const form = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      workEmail: "",
      organization: "",
      aumBracket: "<250M",
      message: "",
    },
    mode: "onBlur",
  });

  const mutation = useMutation({
    mutationFn: submitContact,
    onSuccess: () => {
      toast({
        title: "Message sent",
        description:
          "Thank you for reaching out. Our team will follow up with a few time options within one business day.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description:
          "We were unable to submit your message. Please try again or email your relationship contact directly.",
        variant: "destructive",
      });
    },
  });

  const isSubmitting = mutation.isPending;

  const submitLabel = useMemo(
    () => (isSubmitting ? "Sending" : "Request a working session"),
    [isSubmitting],
  );

  return (
    <section className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
      <div className="space-y-6">
        <p className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
          <Building2 className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          Strategic working session
        </p>
        <h1 className="heading-gradient text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Share your mandate. We&apos;ll bring the portfolio view.
        </h1>
        <p className="text-balance text-sm text-muted-foreground md:text-base">
          Tell us how you currently evaluate real estate strategies, and
          we&apos;ll structure a live session around your portfolio, risk
          appetite, and governance model.
        </p>
        <ul className="grid list-disc gap-2 pl-5 text-sm text-muted-foreground md:grid-cols-2">
          <li>30–45 minute discovery with a senior practitioner</li>
          <li>Optional working session with investment committee materials</li>
          <li>No sales scripts, no generic product demos</li>
          <li>Secure, read-only portfolio ingestion options</li>
        </ul>
      </div>

      <div>
        <div className="card-modern rounded-2xl border border-border/70 bg-card/80 p-6 shadow-card">
          <Form {...form}>
            <form
              className="space-y-4"
              onSubmit={form.handleSubmit((values) => mutation.mutate(values))}
              aria-label="Request a consult form"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          autoComplete="name"
                          aria-required="true"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="workEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Work email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          autoComplete="email"
                          inputMode="email"
                          aria-required="true"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="organization"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Organization</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        autoComplete="organization"
                        aria-required="true"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="aumBracket"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Approximate AUM</FormLabel>
                    <Select
                      disabled={isSubmitting}
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger aria-required="true">
                          <SelectValue placeholder="Select a range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="<250M">&lt; $250M</SelectItem>
                        <SelectItem value="250M-1B">$250M – $1B</SelectItem>
                        <SelectItem value="1B-5B">$1B – $5B</SelectItem>
                        <SelectItem value="5B+">$5B+</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What should we prepare?</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        rows={5}
                        aria-required="true"
                        placeholder="Example: “Global core-plus mandate, evaluating manager concentration and execution risk across Europe and North America.”"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center justify-between gap-4 pt-2">
                <p className="text-xs text-muted-foreground">
                  By submitting, you agree to be contacted about non-promotional
                  portfolio working sessions. No mailing lists.
                </p>
                <Button
                  type="submit"
                  className="btn-modern min-w-[11rem] justify-center gap-2"
                  size="sm"
                  disabled={isSubmitting}
                >
                  {isSubmitting && (
                    <Loader2
                      aria-hidden="true"
                      className="h-4 w-4 animate-spin"
                    />
                  )}
                  <span>{submitLabel}</span>
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

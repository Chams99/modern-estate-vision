import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { corePortfolioMetrics } from "../domain/landing-metrics";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

export const LandingRoute = () => {
  return (
    <div
      className="space-y-16 md:space-y-24"
      aria-label="Modern Estate Vision overview"
    >
      <section className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            <ShieldCheck
              className="h-3.5 w-3.5 text-primary"
              aria-hidden="true"
            />
            Institutional-grade real estate intelligence
          </p>
          <h1 className="heading-gradient text-balance text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            See your real estate portfolio the way an investment committee does.
          </h1>
          <p className="text-balance text-sm text-muted-foreground md:text-base">
            Modern Estate Vision gives asset managers, CIOs, and investment
            teams a single, trusted view of performance, risk, and execution
            across global real estate strategies.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button className="btn-modern gap-2" size="lg" asChild>
              <a href="/contact">
                <span>Request a working session</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <button
              type="button"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground underline-offset-4 hover:underline"
            >
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              <span>Explore sample portfolio</span>
            </button>
          </div>
        </div>

        <Card
          className="card-glass relative overflow-hidden"
          aria-label="Key portfolio metrics"
        >
          <CardHeader>
            <CardTitle className="flex items-center justify-between gap-2">
              Snapshot coverage
              <span className="rounded-full bg-primary-muted px-2 py-1 text-xs font-medium text-primary-foreground">
                Live demo data
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {corePortfolioMetrics.map((metric) => (
              <div
                key={metric.id}
                className="flex flex-col gap-1 rounded-lg border border-border/60 bg-background/40 p-3"
              >
                <dt className="text-xs font-medium text-muted-foreground">
                  {metric.label}
                </dt>
                <dd className="text-lg font-semibold md:text-xl">
                  {metric.value}
                </dd>
                <p className="text-[11px] text-muted-foreground">
                  {metric.helperText}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

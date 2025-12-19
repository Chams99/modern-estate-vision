import { Link } from "react-router-dom";
import { ArrowLeft, MapPinOff } from "lucide-react";
import { Button } from "../../../components/ui/button";

export const NotFoundRoute = () => {
  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center gap-6 text-center">
      <div className="inline-flex items-center justify-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
        <MapPinOff className="mr-2 h-4 w-4 text-primary" aria-hidden="true" />
        Route not found
      </div>
      <div className="space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          This view doesn&apos;t exist (yet).
        </h1>
        <p className="max-w-md text-sm text-muted-foreground md:text-base">
          The page you are looking for is not available. Use the navigation or
          head back to the portfolio overview.
        </p>
      </div>
      <Button asChild className="btn-modern gap-2" size="sm">
        <Link to="/">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to overview
        </Link>
      </Button>
    </section>
  );
};

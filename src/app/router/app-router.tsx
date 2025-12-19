import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AppShell } from "../shell/app-shell";
import { PageLoader } from "../../shared/ui/page-loader";

const LandingRoute = lazy(() =>
  import("../../features/landing/ui/landing-route").then((module) => ({
    default: module.LandingRoute,
  })),
);

const PortfolioRoute = lazy(() =>
  import("../../features/portfolio/ui/portfolio-route").then((module) => ({
    default: module.PortfolioRoute,
  })),
);

const ContactRoute = lazy(() =>
  import("../../features/contact/ui/contact-route").then((module) => ({
    default: module.ContactRoute,
  })),
);

const NotFoundRoute = lazy(() =>
  import("../../features/misc/ui/not-found-route").then((module) => ({
    default: module.NotFoundRoute,
  })),
);

export const AppRouter = () => {
  return (
    <AppShell>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<LandingRoute />} />
          <Route path="/portfolio" element={<PortfolioRoute />} />
          <Route path="/contact" element={<ContactRoute />} />
          <Route path="*" element={<NotFoundRoute />} />
        </Routes>
      </Suspense>
    </AppShell>
  );
};

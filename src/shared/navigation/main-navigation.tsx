import { NavLink } from "react-router-dom";
import { Building2, PhoneCall, ScrollText } from "lucide-react";
import { Button } from "../../components/ui/button";

const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
  [
    "nav-link",
    "px-2 py-1 text-sm md:text-base",
    isActive ? "text-primary" : "text-muted-foreground",
  ].join(" ");

export const MainNavigation = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <nav
        className="container-modern flex h-16 items-center justify-between gap-4"
        aria-label="Primary navigation"
      >
        <div className="flex items-center gap-2 md:gap-3">
          <Building2
            aria-hidden="true"
            className="h-6 w-6 md:h-7 md:w-7 text-primary"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold md:text-base">
              Modern Estate Vision
            </span>
            <span className="text-[11px] text-muted-foreground md:text-xs">
              Institutional-grade real estate intelligence
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-4 md:flex">
            <NavLink to="/" className={navLinkClassName}>
              Home
            </NavLink>
            <NavLink to="/portfolio" className={navLinkClassName}>
              Portfolio
            </NavLink>
            <NavLink to="/contact" className={navLinkClassName}>
              Contact
            </NavLink>
          </div>

          <Button
            asChild
            size="sm"
            className="btn-modern hidden gap-2 md:inline-flex"
          >
            <NavLink to="/contact">
              <PhoneCall className="h-4 w-4" aria-hidden="true" />
              <span>Request a consult</span>
            </NavLink>
          </Button>

          <Button
            asChild
            size="icon"
            variant="outline"
            className="btn-modern inline-flex items-center justify-center gap-1 md:hidden"
            aria-label="Skip to portfolio overview"
          >
            <NavLink to="/portfolio">
              <ScrollText className="h-4 w-4" aria-hidden="true" />
            </NavLink>
          </Button>
        </div>
      </nav>
    </header>
  );
};

import type { PropsWithChildren } from "react";
import { MainNavigation } from "../../shared/navigation/main-navigation";

export const AppShell = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <MainNavigation />
      <main
        className="flex-1 container-modern section-modern"
        aria-live="polite"
      >
        {children}
      </main>
      <footer className="border-t border-border py-6 text-sm text-muted-foreground">
        <div className="container-modern flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <span>
            &copy; {new Date().getFullYear()} Modern Estate Vision. All rights
            reserved.
          </span>
          <span className="sr-only">
            Built with accessibility-first, responsive design.
          </span>
        </div>
      </footer>
    </div>
  );
};

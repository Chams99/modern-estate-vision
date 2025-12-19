export const PageLoader = () => (
  <div
    role="status"
    aria-live="polite"
    className="flex h-[40vh] items-center justify-center"
  >
    <div className="inline-flex items-center gap-3 rounded-full border border-border/60 bg-card/80 px-4 py-2 shadow-card">
      <span className="h-2 w-2 animate-ping rounded-full bg-primary" />
      <span className="text-sm text-muted-foreground">
        Loading experience&hellip;
      </span>
    </div>
  </div>
);

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import { Progress } from "../../../components/ui/progress";

export const PortfolioRoute = () => {
  return (
    <section
      className="space-y-8"
      aria-label="Sample real estate portfolio overview"
    >
      <header className="space-y-3">
        <h1 className="heading-gradient text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Sample portfolio overview
        </h1>
        <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
          This sample view illustrates how Modern Estate Vision surfaces risk,
          execution, and performance across strategies — without requiring you
          to change existing systems.
        </p>
      </header>

      <div className="grid-modern md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <Card className="card-modern">
          <CardHeader className="flex flex-row items-center justify-between gap-2">
            <CardTitle>Strategy mix</CardTitle>
            <Badge variant="outline">Sample data</Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Core</span>
                <span>42%</span>
              </div>
              <Progress value={42} aria-label="Core allocation 42 percent" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Core-plus</span>
                <span>31%</span>
              </div>
              <Progress
                value={31}
                aria-label="Core-plus allocation 31 percent"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Opportunistic</span>
                <span>19%</span>
              </div>
              <Progress
                value={19}
                aria-label="Opportunistic allocation 19 percent"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Secondaries &amp; special situations</span>
                <span>8%</span>
              </div>
              <Progress
                value={8}
                aria-label="Secondaries and special situations allocation 8 percent"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="card-modern">
          <CardHeader>
            <CardTitle>Execution risk indicators</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              In production, this panel highlights{" "}
              <span className="font-medium text-foreground">
                manager concentration, pipeline slippage, and leverage drift
              </span>{" "}
              relative to mandate guidelines.
            </p>
            <ul className="grid gap-2">
              <li>
                <span className="font-medium text-foreground">3</span> mandates
                tracking ahead of target pacing
              </li>
              <li>
                <span className="font-medium text-foreground">1</span> mandate
                flagged for emerging leverage risk
              </li>
              <li>
                <span className="font-medium text-foreground">0</span> mandates
                in breach of governance thresholds
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

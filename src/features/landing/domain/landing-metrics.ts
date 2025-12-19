export interface PortfolioMetric {
  readonly id: string;
  readonly label: string;
  readonly value: string;
  readonly helperText: string;
}

export const corePortfolioMetrics: PortfolioMetric[] = [
  {
    id: "aum",
    label: "Assets under management",
    value: "$2.4B+",
    helperText: "Across core, core-plus, and opportunistic strategies",
  },
  {
    id: "occupancy",
    label: "Average occupancy",
    value: "97.2%",
    helperText: "Stabilized portfolio, trailing 12 months",
  },
  {
    id: "irr",
    label: "Net IRR outperformance",
    value: "+240 bps",
    helperText: "Versus benchmark, across realized investments",
  },
];

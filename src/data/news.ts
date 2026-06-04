export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
  // NOTE: dates below are approximate — please verify/adjust.
  {
    date: "December 2025",
    title: "Two papers accepted at ICASSP 2026",
    description:
      "Two papers (PENGUIN and a decomposition-based state space model for multivariate time-series forecasting) were accepted at ICASSP 2026.",
  },
];

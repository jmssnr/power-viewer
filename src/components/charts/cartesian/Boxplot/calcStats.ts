import { quantile, ascending } from "@visx/vendor/d3-array";

export const computeStatistics = (datum: number[]) => {
  const data_sorted = datum.sort(ascending);
  const q1 = quantile(data_sorted, 0.25) as number;
  const median = quantile(data_sorted, 0.5) as number;
  const q3 = quantile(data_sorted, 0.75) as number;
  const interQuantileRange = q3 - q1;
  const min = Math.max(Math.min(...datum), q1 - 1.5 * interQuantileRange);
  const max = Math.min(Math.max(...datum), q3 + 1.5 * interQuantileRange);
  return { q1, q3, median, interQuantileRange, min, max };
};

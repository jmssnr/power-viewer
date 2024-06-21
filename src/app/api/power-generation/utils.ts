import { ResponseType } from "./types";
import { min, max, mean } from "@visx/vendor/d3-array";

export const computeDates = (lookBack: string | null) => {
  const start = new Date(
    new Date().getTime() - (Number(lookBack) || 1) * 24 * 60 * 60 * 1000
  )
    .toISOString()
    .slice(0, 10);
  const end = new Date().toISOString().slice(0, 10);

  return { start, end };
};

export const transformData = (data: ResponseType) => {
  return data.production_types.map((prodType) => {
    return {
      name: prodType.name,
      min: min(prodType.data),
      max: max(prodType.data),
      avg: mean(prodType.data),
      data: prodType.data.map((d, idx) => {
        return {
          timestamp: Number(data.unix_seconds[idx]) * 1000,
          value: d,
        };
      }),
    };
  });
};

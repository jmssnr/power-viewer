import { ResponseType } from "./types";

export const transformData = (data: ResponseType) => {
  return data.production_types.map((prodType) => {
    return {
      name: prodType.name,
      data: prodType.data.map((d, idx) => {
        return {
          timestamp: Number(data.unix_seconds[idx]) * 1000,
          value: d,
        };
      }),
    };
  });
};

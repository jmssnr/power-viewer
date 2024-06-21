import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PowerGenerationDatum } from "@/app/api/power-generation/types";
import { useCountryContext } from "./useCountryContext";

type lookBackOptions = "1" | "7" | "30" | "365";

const fetcher = (
  country: string,
  lookBack: lookBackOptions
): Promise<PowerGenerationDatum[]> => {
  return axios
    .get(`/api/power-generation?country=${country}&lookBack=${lookBack}`)
    .then((response) => response.data);
};

export const useGetPowerGeneration = (lookBack: lookBackOptions) => {
  const { country } = useCountryContext();
  return useQuery({
    queryKey: ["power-generation", country, lookBack],
    queryFn: () => fetcher(country, lookBack),
    staleTime: 1000 * 60 * 15,
  });
};

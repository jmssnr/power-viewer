import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PowerGenerationDatum } from "@/app/api/power-generation/types";
import { useCountryContext } from "./useCountryContext";
import { useDateContext } from "./useDateContext";
type lookBackOptions = "1" | "7" | "30" | "365";

const fetcher = (
  country: string,
  lookBack: lookBackOptions
): Promise<PowerGenerationDatum[]> => {
  return axios
    .get(`/api/power-generation?country=${country}&lookBack=${lookBack}`)
    .then((response) => response.data);
};

export const useGetPowerGeneration = () => {
  const { country } = useCountryContext();
  const { lookBack } = useDateContext();
  return useQuery({
    queryKey: ["power-generation", country, lookBack],
    queryFn: () => fetcher(country, lookBack as lookBackOptions),
    staleTime: 1000 * 60 * 15,
  });
};

import { PowerGenerationDatum } from "@/app/api/power-generation/types";
import { useQueryState } from "nuqs";
import { isServer, useSuspenseQuery } from "@tanstack/react-query";

function getBaseURL() {
  if (!isServer) {
    return "";
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}
const baseUrl = getBaseURL();

const fetcher = async (country: string): Promise<PowerGenerationDatum[]> => {
  const url = baseUrl + `/api/power-generation?country=${country}`;

  const response = await fetch(url, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

export const useGetPowerGeneration = () => {
  const [country] = useQueryState("country");
  return useSuspenseQuery({
    queryKey: ["power-generation", country],
    queryFn: () => fetcher(country || "de"),
    staleTime: 1000 * 60 * 15,
  });
};

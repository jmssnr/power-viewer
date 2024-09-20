import { useQuery } from "@tanstack/react-query";
import { Country } from "@/app/api/countries/route";
import { isServer, useSuspenseQuery } from "@tanstack/react-query";

export const dynamic = "force-dynamic";

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

const fetcher = async (): Promise<Country[]> => {
  const url = baseUrl + "/api/countries";

  const response = await fetch(url, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

export const useGetCountries = () => {
  return useSuspenseQuery({
    queryKey: ["countries"],
    queryFn: () => fetcher(),
  });
};

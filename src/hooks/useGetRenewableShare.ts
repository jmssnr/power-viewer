import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { RenewableShareData } from "@/app/api/renewable-share/route";
import { useCountryContext } from "./useCountryContext";

const fetcher = (
  country: string,
  group?: string | undefined
): Promise<RenewableShareData[]> => {
  return axios
    .get(
      !group
        ? `/api/renewable-share?country=${country}`
        : `/api/renewable-share?country=${country}&groupby=${group}`
    )
    .then((response) => response.data);
};

export const useGetRenewable = (group?: string | undefined) => {
  const { country } = useCountryContext();
  return useQuery({
    queryKey: ["renewable-share", country, group],
    queryFn: () => fetcher(country, group),
    staleTime: 1000 * 60 * 24,
  });
};

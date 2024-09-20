"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { useGetCountries } from "@/hooks/useGetCountries";
import { useQueryState } from "nuqs";

const CountrySelect = () => {
  const [country, setCountry] = useQueryState("country");
  const { data } = useGetCountries();

  const options = data.map((country, i) => (
    <SelectItem key={country.value} value={country.value}>
      {country.label}
    </SelectItem>
  ));
  return (
    <Select value={country || "de"} onValueChange={setCountry}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Country" />
      </SelectTrigger>
      <SelectContent>{options}</SelectContent>
    </Select>
  );
};

export default CountrySelect;

"use client";

import { Select, SelectItem } from "@/components/primitives/Select";
import { data } from "./data";
import { useCountryContext } from "@/hooks/useCountryContext";

const CountrySelect = () => {
  const { country, setCountry } = useCountryContext();
  return (
    <Select value={country} onValueChange={setCountry}>
      {data.map((country) => (
        <SelectItem key={country.value} value={country.value}>
          {country.label}
        </SelectItem>
      ))}
    </Select>
  );
};

export default CountrySelect;

"use client";

import { useMemo, useState } from "react";
import { CountryContext, CountryContextProps } from "@/hooks/useCountryContext";

const CountryContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [country, setCountry] = useState<CountryContextProps["country"]>("de");

  const value = useMemo(() => ({ country, setCountry }), [country]);

  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
};

export default CountryContextProvider;

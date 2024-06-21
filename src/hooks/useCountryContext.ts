import { createContext, useContext } from "react";

export type CountryContextProps = {
  country: string;
  setCountry: React.Dispatch<
    React.SetStateAction<CountryContextProps["country"]>
  >;
};

export const CountryContext = createContext<CountryContextProps | null>(null);

export const useCountryContext = () => {
  const context = useContext(CountryContext);

  if (!context) {
    throw new Error("Must be used in provider");
  }

  return context;
};
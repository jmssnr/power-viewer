import React from "react";
import ReactQueryProvider from "./ReactQueryProvider";
import CountryContextProvider from "./CountryContextProvider";
type ProviderProps = {
  children: React.ReactNode;
};

const Provider = ({ children }: ProviderProps) => {
  return (
    <ReactQueryProvider>
      <CountryContextProvider>{children}</CountryContextProvider>
    </ReactQueryProvider>
  );
};

export default Provider;

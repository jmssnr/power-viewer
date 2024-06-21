import React from "react";
import ReactQueryProvider from "./ReactQueryProvider";
import CountryContextProvider from "./CountryContextProvider";
import DateContextProvider from "./DateContextProvider";
type ProviderProps = {
  children: React.ReactNode;
};

const Provider = ({ children }: ProviderProps) => {
  return (
    <ReactQueryProvider>
      <CountryContextProvider>
        <DateContextProvider>{children}</DateContextProvider>
      </CountryContextProvider>
    </ReactQueryProvider>
  );
};

export default Provider;

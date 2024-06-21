import { createContext, useContext } from "react";

export type DateContextProps = {
  lookBack: string;
  setLookBack: React.Dispatch<
    React.SetStateAction<DateContextProps["lookBack"]>
  >;
};

export const DateContext = createContext<DateContextProps | null>(null);

export const useDateContext = () => {
  const context = useContext(DateContext);

  if (!context) {
    throw new Error("Must be used in provider");
  }

  return context;
};

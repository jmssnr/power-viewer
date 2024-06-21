"use client";

import { useMemo, useState } from "react";
import { DateContext, DateContextProps } from "@/hooks/useDateContext";

const DateContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [lookBack, setLookBack] = useState<DateContextProps["lookBack"]>("1");

  const value = useMemo(() => ({ lookBack, setLookBack }), [lookBack]);

  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};

export default DateContextProvider;

"use client";

import { useCountryContext } from "@/hooks/useCountryContext";
import classes from "./page.module.css";
import MonitoringView from "./components/MonitoringView";

export default function Monitoring() {
  const { country } = useCountryContext();
  return (
    <>
      <h1 className={classes.title}>
        Monitor Public Net Electricity Generation
      </h1>
      <MonitoringView key={country} />
    </>
  );
}

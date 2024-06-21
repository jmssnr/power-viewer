"use client";

import CountrySelect from "../components/CountrySelect";
import DateToggleGroup from "../components/DateToggleGroup/DateToggleGroup";
import PowerTypeSelect from "../components/PowerTypeSelect";
import classes from "./page.module.css";
import { useState } from "react";
import PowerGenerationChart from "./components/PowerGenerationChart";
import KPIBar from "./components/KPIBar";

export default function Monitoring() {
  const [powerType, setPowerType] = useState("");
  return (
    <>
      <h1 className={classes.title}>Monitor Public Power Generation</h1>
      <section className={classes.toolbar}>
        <DateToggleGroup />
        <div className={classes.selects}>
          <PowerTypeSelect value={powerType} setValue={setPowerType} />
          <CountrySelect />
        </div>
      </section>
      <KPIBar selection={powerType} />
      <PowerGenerationChart selection={powerType} />
    </>
  );
}

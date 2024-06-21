"use client";

import CountrySelect from "@/app/(tools)/components/CountrySelect";
import DateToggleGroup from "@/app/(tools)/components/DateToggleGroup/DateToggleGroup";
import PowerTypeSelect from "@/app/(tools)/components/PowerTypeSelect";
import classes from "./MonitoringView.module.css";
import { useState } from "react";
import PowerGenerationChart from "../PowerGenerationChart";
import KPIBar from "../KPIBar";

const MonitoringView = () => {
  const [powerType, setPowerType] = useState(0);

  return (
    <>
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
};

export default MonitoringView;

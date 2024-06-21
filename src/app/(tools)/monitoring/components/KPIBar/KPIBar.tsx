"use client";

import classes from "./KPIBar.module.css";
import Skeleton from "@/components/primitives/Skeleton";
import { useGetPowerGeneration } from "@/hooks/useGetPowerGeneration";
import KPICard from "../KPICard";

type KPIBarProps = { selection: string };

const valueHelper = (
  key: string,
  selection: string,
  data: any,
  isPending: boolean,
  isError: boolean
) => {
  if (isPending) {
    return <Skeleton width={100} height={40} />;
  }

  if (isError) {
    return "An error occured";
  }

  //@ts-ignore
  const selectedIndex = data.findIndex((d) => d.name === selection);

  if (selectedIndex === -1) {
    return;
  }

  return data[selectedIndex][key].toFixed(2);
};

const KPIBar = ({ selection }: KPIBarProps) => {
  const { data, isPending, isError } = useGetPowerGeneration();

  return (
    <div className={classes.root}>
      <KPICard
        title="Average Production"
        value={valueHelper("avg", selection, data, isPending, isError)}
      />
      <KPICard
        title="Minimum Production"
        value={valueHelper("min", selection, data, isPending, isError)}
      />
      <KPICard
        title="Maximum Production"
        value={valueHelper("max", selection, data, isPending, isError)}
      />
    </div>
  );
};

export default KPIBar;

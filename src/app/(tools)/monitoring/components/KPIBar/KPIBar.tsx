"use client";

import classes from "./KPIBar.module.css";
import Skeleton from "@/components/primitives/Skeleton";
import { useGetPowerGeneration } from "@/hooks/useGetPowerGeneration";
import KPICard from "../KPICard";

type KPIBarProps = { selection: number };

const valueHelper = (
  key: string,
  selection: number,
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

  return `${data[selection][key].toFixed(0)} MW`;
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

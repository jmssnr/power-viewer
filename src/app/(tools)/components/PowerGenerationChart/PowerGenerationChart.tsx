"use client";

import SimpleLineChart from "@/components/charts/cartesian/SimpleLineChart";
import Skeleton from "@/components/primitives/Skeleton";
import { useGetPowerGeneration } from "@/hooks/useGetPowerGeneration";
import { PowerGenerationDatum } from "@/app/api/power-generation/types";

type PowerGenerationChartProps = {
  selection: string;
};

const xAccessor = (d: PowerGenerationDatum["data"][0]) => new Date(d.timestamp);
const yAccessor = (d: PowerGenerationDatum["data"][0]) => d.value;

const PowerGenerationChart = ({ selection }: PowerGenerationChartProps) => {
  const { data, isPending, error } = useGetPowerGeneration();

  if (isPending) {
    return    <div style={{ width: 500, height: 400 }}>
      <Skeleton />
    </div>;
  }

  if (error) {
    return <div style={{ width: 500, height: 400 }}>An error occured</div>;
  }

  const selectionIdx = data?.findIndex((d) => d.name === selection);

  if (selectionIdx === -1) {
    return (
      <div style={{ width: 500, height: 400 }}>Select a production type</div>
    );
  }

  return (
    <div style={{ width: 500, height: 400 }}>
      <SimpleLineChart
        margin={{ top: 10, bottom: 50, left: 50, right: 20 }}
        data={data[selectionIdx].data}
        xAccessor={xAccessor}
        yAccessor={yAccessor}
      />
    </div>
  );
};

export default PowerGenerationChart;

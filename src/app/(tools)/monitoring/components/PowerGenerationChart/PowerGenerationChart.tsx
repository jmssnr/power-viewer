"use client";

import SimpleLineChart from "@/components/charts/cartesian/SimpleLineChart";
import Skeleton from "@/components/primitives/Skeleton";
import { useGetPowerGeneration } from "@/hooks/useGetPowerGeneration";
import { PowerGenerationDatum } from "@/app/api/power-generation/types";
import Card from "@/components/primitives/Card";

type PowerGenerationChartProps = {
  selection: string;
};

const xAccessor = (d: PowerGenerationDatum["data"][0]) => new Date(d.timestamp);
const yAccessor = (d: PowerGenerationDatum["data"][0]) => d.value;

const PowerGenerationChart = ({ selection }: PowerGenerationChartProps) => {
  const { data, isPending, error } = useGetPowerGeneration();

  if (isPending) {
    return (
      <Card style={{ minHeight: 200, flex: "1" }}>
        <Skeleton />
      </Card>
    );
  }

  if (error) {
    return <Card style={{ minHeight: 200, flex: "1" }}>An error occured</Card>;
  }

  const selectionIdx = data?.findIndex((d) => d.name === selection);

  if (selectionIdx === -1) {
    return (
      <Card style={{ minHeight: 200, flex: "1" }}>
        Select a production type
      </Card>
    );
  }

  return (
    <Card style={{ minHeight: 200, flex: "1" }}>
      <SimpleLineChart
        margin={{ top: 10, bottom: 50, left: 50, right: 20 }}
        data={data[selectionIdx].data}
        xAccessor={xAccessor}
        yAccessor={yAccessor}
      />
    </Card>
  );
};

export default PowerGenerationChart;

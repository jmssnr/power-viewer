"use client";

import { Chart, ChartContent, ChartLegend } from "@/components/charts/Chart";
import MultiLineChart from "@/components/charts/MultiLineChart";
import { useGetPowerGeneration } from "@/hooks/useGetPowerGeneration";

const PowerChart = () => {
  const { data } = useGetPowerGeneration();

  const datasets = data.map((d) => {
    return { id: d.name, data: d.data };
  });

  return (
    <Chart className="border flex-1 p-2">
      <ChartLegend>Chart Legend</ChartLegend>
      <ChartContent>
        {(width, height) => (
          <MultiLineChart
            xAccessor={(d) => d.timestamp}
            yAccessor={(d) => d.value}
            width={width}
            height={height}
            datasets={datasets}
          />
        )}
      </ChartContent>
    </Chart>
  );
};

export default PowerChart;

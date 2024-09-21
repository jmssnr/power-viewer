"use client";

import MultiSelect from "@/components/ui/MultiSelect";
import { useGetPowerGeneration } from "@/hooks/useGetPowerGeneration";
import LineChart from "@/components/charts/LineChart";
export default function AnalyzePage() {
  const { data } = useGetPowerGeneration();

  const options = data.map((prod) => {
    return {
      value: prod.name,
      label: prod.name,
      chart: (
        <LineChart
          width={100}
          height={20}
          data={prod.data}
          xAccessor={(d) => d.timestamp}
          yAccessor={(d) => d.value}
        />
      ),
    };
  });
  return (
    <>
      <MultiSelect options={options} values={[]} onValueChange={() => {}} />
    </>
  );
}

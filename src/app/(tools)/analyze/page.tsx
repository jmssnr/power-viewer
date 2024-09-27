"use client";
import DateRangeSelect from "../components/DateRangeSelect";
import MultiSelect from "@/components/ui/MultiSelect";
import { useGetPowerGeneration } from "@/hooks/useGetPowerGeneration";
import LineChart from "@/components/charts/LineChart";
import { useState } from "react";
// import { Datum } from "@/app/api/power-generation/types";

export default function AnalyzePage() {
  const { data } = useGetPowerGeneration();
  const [power, setPower] = useState<string[]>([]);

  // const datasets = data
  //   .filter((d) => power.includes(d.name))
  //   .map((d) => {
  //     return { id: d.name, data: d.data };
  //   });

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
    <div className="p-5">
      <div className="flex justify-between items-center">
        <DateRangeSelect />
        <MultiSelect
          options={options}
          values={power}
          onValueChange={setPower}
        />
      </div>
    </div>
  );
}

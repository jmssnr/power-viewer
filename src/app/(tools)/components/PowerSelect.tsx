"use client";

import { useState } from "react";
import { useGetPowerGeneration } from "@/hooks/useGetPowerGeneration";
import LineChart from "@/components/charts/LineChart";
import MultiSelect from "@/components/ui/MultiSelect";

const PowerSelect = () => {
  const { data } = useGetPowerGeneration();
  const [power, setPower] = useState<string[]>([]);

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
    <MultiSelect options={options} values={power} onValueChange={setPower} />
  );
};

export default PowerSelect;

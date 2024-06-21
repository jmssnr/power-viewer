"use client";

import { useGetPowerGeneration } from "@/hooks/useGetPowerGeneration";
import CountrySelect from "./(tools)/components/CountrySelect";
import PowerTypeSelect from "./(tools)/components/PowerTypeSelect";
import DateToggleGroup from "./(tools)/components/DateToggleGroup/DateToggleGroup";
import SimpleLineChart from "@/components/charts/cartesian/SimpleLineChart";
import { useState } from "react";
import PowerGenerationChart from "./(tools)/components/PowerGenerationChart";
export default function Home() {
  const [powerType, setPowerType] = useState("");
  const { data, isPending, isError } = useGetPowerGeneration();

  console.log(powerType);
  console.log(data);

  return (
    <main>
      Landing Page
      <div
        style={{
          padding: 50,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <DateToggleGroup />
        <CountrySelect />
        <PowerTypeSelect value={powerType} setValue={setPowerType} />
        <PowerGenerationChart selection={powerType} />
      </div>
    </main>
  );
}

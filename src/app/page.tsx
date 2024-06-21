"use client";

import { useGetPowerGeneration } from "@/hooks/useGetPowerGeneration";
import CountrySelect from "./(tools)/components/CountrySelect";
import PowerTypeSelect from "./(tools)/components/PowerTypeSelect";
import DateToggleGroup from "./(tools)/components/DateToggleGroup/DateToggleGroup";

export default function Home() {
  const { data } = useGetPowerGeneration();

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
        <PowerTypeSelect />
      </div>
    </main>
  );
}

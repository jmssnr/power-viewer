"use client";

import { useGetPowerGeneration } from "@/hooks/useGetPowerGeneration";
import CountrySelect from "./(tools)/components/CountrySelect";
import PowerTypeSelect from "./(tools)/components/PowerTypeSelect";
import DateToggleGroup from "./(tools)/components/DateToggleGroup/DateToggleGroup";
import SimpleLineChart from "@/components/charts/cartesian/SimpleLineChart";
import { PowerGenerationDatum } from "./api/power-generation/types";

const xAccessor = (d: PowerGenerationDatum["data"][0]) => new Date(d.timestamp);
const yAccessor = (d: PowerGenerationDatum["data"][0]) => d.value;

export default function Home() {
  const { data, isPending, isError } = useGetPowerGeneration();

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
        <div style={{ width: 500, height: 200 }}>
          {isPending ? (
            "Loading..."
          ) : isError ? (
            "Error!"
          ) : (
            <SimpleLineChart
              margin={{ top: 10, bottom: 50, left: 50, right: 20 }}
              data={data[0].data}
              xAccessor={xAccessor}
              yAccessor={yAccessor}
            />
          )}
        </div>
      </div>
    </main>
  );
}

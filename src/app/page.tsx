"use client";

import { useGetPowerGeneration } from "@/hooks/useGetPowerGeneration";
import CountrySelect from "./(tools)/components/CountrySelect";
import PowerTypeSelect from "./(tools)/components/PowerTypeSelect";
export default function Home() {
  const { data } = useGetPowerGeneration();

  console.log(data);
  return (
    <main>
      Landing Page
      <div style={{ padding: 50 }}>
        <CountrySelect />
        <PowerTypeSelect />
      </div>
    </main>
  );
}

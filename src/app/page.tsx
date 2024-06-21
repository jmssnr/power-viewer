"use client";

import { useGetPowerGeneration } from "@/hooks/useGetPowerGeneration";
import CountrySelect from "./(tools)/components/CountrySelect";

export default function Home() {
  const { data } = useGetPowerGeneration("1");

  console.log(data);
  return (
    <main>
      Landing Page
      <div style={{ padding: 50 }}>
        <CountrySelect />
      </div>
    </main>
  );
}

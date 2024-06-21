"use client";
import { useGetPowerGeneration } from "@/hooks/useGetPowerGeneration";

export default function Home() {
  const { data } = useGetPowerGeneration("1");

  console.log(data);
  return <main>Landing Page</main>;
}

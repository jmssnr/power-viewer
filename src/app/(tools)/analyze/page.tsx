"use client";

import DateRangeSelect from "../components/DateRangeSelect";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/Skeleton";
import PowerSelect from "../components/PowerSelect";
import PowerChart from "../components/PowerChart";

export default function AnalyzePage() {
  return (
    <div className="p-5 h-full flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <Suspense
          fallback={<Skeleton className="w-[350px] h-[40px] rounded-full" />}
        >
          <DateRangeSelect />
        </Suspense>
        <Suspense
          fallback={<Skeleton className="w-[150px] h-[40px] rounded-full" />}
        >
          <PowerSelect />
        </Suspense>
      </div>
      <Suspense fallback={<Skeleton className="flex-1 rounded-lg w-full" />}>
        <PowerChart />
      </Suspense>
    </div>
  );
}

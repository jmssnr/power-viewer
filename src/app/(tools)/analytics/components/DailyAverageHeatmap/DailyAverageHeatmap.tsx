"use client";

import Card from "@/components/primitives/Card";
import Skeleton from "@/components/primitives/Skeleton";
import { useGetRenewable } from "@/hooks/useGetRenewableShare";
import CalendarHeatmap from "@/components/charts/cartesian/CalendarHeatmap";

type Datum = {
  date: Date;
  value: number;
};

const dateAccessor = (d: Datum) => new Date(d.date);
const valueAccessor = (d: Datum) => d.value;

const DailyAverageHeatmap = () => {
  const { data, isPending, error } = useGetRenewable();

  if (isPending) {
    return (
      <Card style={{ minHeight: 200 }}>
        <Skeleton />
      </Card>
    );
  }

  if (error) {
    return <Card style={{ minHeight: 200 }}>An error occured</Card>;
  }

  return (
    <Card style={{ minHeight: 200 }}>
      <CalendarHeatmap
        data={data}
        dateAccessor={dateAccessor}
        valueAccessor={valueAccessor}
      />
    </Card>
  );
};

export default DailyAverageHeatmap;

"use client";

import Boxplot from "@/components/charts/cartesian/Boxplot";
import Skeleton from "@/components/primitives/Skeleton";
import Card from "@/components/primitives/Card";
import { useGetRenewable } from "@/hooks/useGetRenewableShare";
import { RenewableShareData } from "@/app/api/renewable-share/route";

const xAccessor = (d: RenewableShareData) => d.key;
const yAccessor = (d: RenewableShareData) => d.values;

const SeasonalAnalysis = () => {
  const { data, isPending, error } = useGetRenewable("day");

  if (isPending) {
    return (
      <Card style={{ minHeight: 200, flex: "1" }}>
        <Skeleton />
      </Card>
    );
  }

  if (error) {
    return <Card style={{ minHeight: 200, flex: "1" }}>An error occured</Card>;
  }

  return (
    <Card style={{ minHeight: 200, flex: "1" }}>
      <Boxplot data={data} xAccessor={xAccessor} yAccessor={yAccessor} />
    </Card>
  );
};

export default SeasonalAnalysis;

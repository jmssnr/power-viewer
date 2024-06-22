import { type NextRequest } from "next/server";
import { utcParse } from "@visx/vendor/d3-time-format";
import { groups } from "@visx/vendor/d3-array";

type Response = {
  days: string[];
  data: number[];
  deprecated: boolean;
};

export type RenewableShareData = {
  key: number;
  values: number[];
};

const parseTime = utcParse("%d.%m.%Y");

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const country = searchParams.get("country");
  const groupby = searchParams.get("groupby");

  const res = await fetch(
    `https://api.energy-charts.info/ren_share_daily_avg?country=${country}`
  );
  const data = (await res.json()) as Response;

  const formatData = data.days.map((d, i) => {
    return { date: parseTime(d) as Date, value: data.data[i] };
  });

  if (!groupby) {
    return Response.json(formatData);
  }

  const grouped = groups(formatData, (d) =>
    groupby === "day"
      ? d.date.getUTCDay()
      : groupby === "month"
      ? d.date.getUTCDate()
      : undefined
  ).map((d) => {
    return { key: d[0], values: d[1].map((dd) => dd.value) };
  });

  return Response.json(grouped);
}

import { type NextRequest } from "next/server";
import { computeDates, transformData } from "./utils";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const country = searchParams.get("country");
  const lookBack = searchParams.get("lookBack");

  const { start, end } = computeDates(lookBack);

  const res = await fetch(
    `https://api.energy-charts.info/public_power?country=${country}&start=${start}&end=${end}`
  );
  const data = await res.json();

  const transformedData = transformData(data);

  return Response.json(transformedData);
}

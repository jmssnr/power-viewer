import { type NextRequest } from "next/server";
import { transformData } from "./utils";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const country = searchParams.get("country");


  const res = await fetch(
    `https://api.energy-charts.info/public_power?country=${country}`
  );
  const data = await res.json();

  const transformedData = transformData(data);

  return Response.json(transformedData);
}

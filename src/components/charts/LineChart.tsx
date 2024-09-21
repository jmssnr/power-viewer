"use client";

import { Group } from "@visx/group";
import colors from "tailwindcss/colors";
import { scaleLinear } from "@visx/scale";
import { max, min } from "@visx/vendor/d3-array";
import { LinePath } from "@visx/shape";

const MARGIN = { top: 5, bottom: 5, left: 5, right: 5 };

const LineChart = <Datum extends object>(props: {
  data: Datum[];
  xAccessor: (d: Datum) => number;
  yAccessor: (d: Datum) => number;
  width: number;
  height: number;
  margin?: { top: number; bottom: number; left: number; right: number };
}) => {
  const { data, xAccessor, yAccessor, width, height, margin = MARGIN } = props;

  if (width == 0 || height == 0) {
    return;
  }

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const xScale = scaleLinear({
    range: [0, innerWidth],
    domain: [min(data, xAccessor) || 0, max(data, xAccessor) || 0],
  });

  const yScale = scaleLinear({
    range: [innerHeight, 0],
    domain: [min(data, yAccessor) || 0, max(data, yAccessor) || 0],
  });

  const line = (
    <LinePath
      data={data}
      x={(d: Datum) => xScale(xAccessor(d)) || 0}
      y={(d: Datum) => yScale(yAccessor(d)) || 0}
      stroke="blue"
    />
  );

  return (
    <svg width={width} height={height}>
      <Group top={margin.top} left={margin.left}>
        {line}
      </Group>
    </svg>
  );
};

export default LineChart;

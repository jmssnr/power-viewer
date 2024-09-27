"use client";

import { Group } from "@visx/group";
import { scaleLinear } from "@visx/scale";
import { max, min } from "@visx/vendor/d3-array";
import { LinePath } from "@visx/shape";
import colors from "tailwindcss/colors";

const COLORS = [colors.amber["500"], colors.blue["500"], colors.green["500"]];
const MARGIN = { top: 0, bottom: 0, left: 0, right: 0 };

const MultiLineChart = <Datum extends object>(props: {
  datasets: { id: string; data: Datum[] }[];
  xAccessor: (d: Datum) => number;
  yAccessor: (d: Datum) => number;
  width: number;
  height: number;
  margin?: { top: number; bottom: number; left: number; right: number };
}) => {
  const {
    datasets: _datasets,
    xAccessor,
    yAccessor,
    width,
    height,
    margin = MARGIN,
  } = props;

  if (width == 0 || height == 0) {
    return;
  }

  const datasets = _datasets.map((dataset, i) => {
    return { ...dataset, color: COLORS[i % COLORS.length] };
  });

  const flattenedDatasets = datasets
    .map((dataset) => dataset.data.map((d) => d))
    .flat();

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const xScale = scaleLinear({
    range: [0, innerWidth],
    domain: [
      min(flattenedDatasets, xAccessor) || 0,
      max(flattenedDatasets, xAccessor) || 0,
    ],
  });

  const yScale = scaleLinear({
    range: [innerHeight, 0],
    domain: [
      min(flattenedDatasets, yAccessor) || 0,
      max(flattenedDatasets, yAccessor) || 0,
    ],
  });

  const lines = datasets.map((dataset) => (
    <LinePath
      data={dataset.data}
      x={(d: Datum) => xScale(xAccessor(d)) || 0}
      y={(d: Datum) => yScale(yAccessor(d)) || 0}
      stroke={dataset.color}
    />
  ));

  const background = (
    <rect
      width={innerWidth}
      height={innerHeight}
      fill={colors.neutral["100"]}
    />
  );

  return (
    <svg width={width} height={height}>
      <Group top={margin.top} left={margin.left}>
        {background}
        {lines}
      </Group>
    </svg>
  );
};

export default MultiLineChart;

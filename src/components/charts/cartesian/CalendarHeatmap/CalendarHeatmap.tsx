import React from "react";
import { ParentSize } from "@visx/responsive";
import { utcSunday } from "@visx/vendor/d3-time";
import { dayNames, monthNames } from "./utils";
import { Group } from "@visx/group";
import { scaleBand, scaleLinear } from "@visx/scale";
import { AxisLeft } from "@visx/axis";
import { min, max, mean, rollup, rollups } from "@visx/vendor/d3-array";
import { LinePath, AreaClosed } from "@visx/shape";
import { scaleSequential } from "@visx/vendor/d3-scale";
import * as allCurves from "@visx/curve";
import { LinearGradient } from "@visx/gradient";

type CalendarHeatmapProps<Datum extends object> = {
  data: Datum[];
  dateAccessor: (d: Datum) => Date;
  valueAccessor: (d: Datum) => number;
  width?: number;
  margin?: { top: number; bottom: number; left: number; right: number };
  cover?: boolean;
};

const CalendarHeatmap = <Datum extends object>(
  props: CalendarHeatmapProps<Datum>
) => {
  const {
    cover,
    data,
    dateAccessor,
    valueAccessor,
    width,
    margin = { top: 80, bottom: 10, left: 50, right: 20 },
  } = props;

  // Use parent width is none is supplied
  if (width == null) {
    return (
      <ParentSize>
        {(parent) => (
          <CalendarHeatmap
            {...props}
            width={props.width == null ? parent.width : width}
          />
        )}
      </ParentSize>
    );
  }

  // Catch first render (due to ParentSize component)
  if (width === 0) {
    return null;
  }

  // Calculate height with fixed aspect ratio and inner dimensions
  const numWeeks =
    utcSunday.count(
      dateAccessor(data[0]),
      dateAccessor(data[data.length - 1])
    ) + 1;

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = (dayNames.length / numWeeks) * innerWidth;
  const height = innerHeight + margin.top + margin.bottom;

  // Scales
  const xScale = scaleBand({
    range: [0, innerWidth],
    domain: Array.from(Array(numWeeks).keys()),
    padding: 0.2,
  });

  const yScale = scaleBand<string>({
    range: [0, innerHeight],
    domain: dayNames,
    padding: 0.2,
  });

  const colorScale = scaleSequential(["white", "#AB4ABA"]).domain([
    min(data, valueAccessor) || 0,
    max(data, valueAccessor) || 0,
  ]);

  // Helper functions for date calculations
  const getDay = (d: Datum) => dayNames[dateAccessor(d).getUTCDay()];
  const getWeek = (d: Datum) =>
    utcSunday.count(dateAccessor(data[0]), dateAccessor(d));

  const weekMean = rollups(
    data.map((d) => {
      return {
        week: getWeek(d),
        value: valueAccessor(d),
      };
    }),
    (D) => mean(D.map((dd) => dd.value)),
    (d) => d.week
  ) as [number, number][];

  const otherYScale = scaleLinear({
    range: [40, 0],
    domain: [
      Math.min(...weekMean.map((d) => d[1])),
      Math.max(...weekMean.map((d) => d[1])),
    ],
  });

  return (
    <svg width={width} height={height} opacity={cover ? 0.2 : 1.0}>
      <LinearGradient
        id="area-gradient"
        from={"var(--accent-line)"}
        to={"var(--accent-line)"}
        toOpacity={0}
      />
      {/* <rect width={width} height={height} fill="lightGray" /> */}

      <Group top={5} left={margin.left}>
        <AreaClosed
          yScale={otherYScale}
          data={weekMean as [number, number][]}
          x={(d: [number, number]) =>
            (xScale(d[0]) || 0) + xScale.bandwidth() / 2
          }
          y={(d: [number, number]) => otherYScale(d[1]) || 0}
          stroke="url(#area-gradient)"
          fill="url(#area-gradient)"
          curve={allCurves.curveNatural}
        />
        <LinePath
          data={weekMean as [number, number][]}
          x={(d: [number, number]) =>
            (xScale(d[0]) || 0) + xScale.bandwidth() / 2
          }
          y={(d: [number, number]) => otherYScale(d[1]) || 0}
          stroke="var(--accent-solid)"
          strokeWidth={2}
          curve={allCurves.curveNatural}
        />
      </Group>
      <Group top={margin.top} left={margin.left}>
        {/* <rect width={innerWidth} height={innerHeight} fill="gray" /> */}
        <AxisLeft
          scale={yScale}
          hideTicks
          hideAxisLine
          numTicks={3}
          tickLabelProps={{
            fill: "var(--gray-text)",
            fontSize: "0.65rem",
          }}
        />
        {data.map((d: Datum, i) => (
          <>
            <rect
              key={`tiles-${i}`}
              y={yScale(getDay(d))}
              x={xScale(getWeek(d))}
              fill={colorScale(valueAccessor(d))}
              width={xScale.bandwidth()}
              height={yScale.bandwidth()}
              stroke="var(--gray-border)"
              rx={2}
              onMouseEnter={() => console.log(d)}
            />
            {dateAccessor(d).getUTCDate() === 1 && (
              <text
                key={`month-labels-${i}`}
                style={{ fontSize: "0.65rem", fill: "var(--gray-text)" }}
                y={-10}
                x={xScale(getWeek(d))}
              >
                {monthNames[dateAccessor(d).getUTCMonth()]}
              </text>
            )}
          </>
        ))}
      </Group>
    </svg>
  );
};

export default CalendarHeatmap;

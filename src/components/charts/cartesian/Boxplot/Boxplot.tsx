"use client";

import { scaleBand, scaleLinear } from "@visx/scale";
import { computeStatistics } from "./calcStats";
import { Group } from "@visx/group";
import { Line } from "@visx/shape";
import { max } from "@visx/vendor/d3-array";
import ResponsiveChartContainer from "../../common/ResponsiveChartContainer";
import AxisX from "../../axis/AxisX";
import AxisY from "../../axis/AxisY";

type BoxplotProps<Datum extends object> = {
  data: Datum[];
  xAccessor: (d: Datum) => number | string;
  yAccessor: (d: Datum) => number[];
  margin?: { top: number; bottom: number; left: number; right: number };
};

const Boxplot = <Datum extends object>(props: BoxplotProps<Datum>) => {
  const {
    data,
    xAccessor,
    yAccessor,
    margin = { top: 20, bottom: 30, left: 50, right: 30 },
  } = props;

  return (
    <ResponsiveChartContainer margin={margin}>
      {({ innerWidth, innerHeight }) => {
        const xScale = scaleBand({
          range: [0, innerWidth],
          domain: data.map(xAccessor),
          padding: 0.2,
        });

        const yScale = scaleLinear({
          range: [innerHeight, 0],
          domain: [0, max(data.map(yAccessor).flat()) as number],
        });

        const boxData = data.map((d) => {
          return {
            category: xAccessor(d),
            stats: computeStatistics(yAccessor(d)),
          };
        });

        const boxWidth = xScale.bandwidth();

        return (
          <Group top={margin.top} left={margin.left}>
            <rect
              width={innerWidth}
              height={innerHeight}
              fill="var(--gray-subtle-bg)"
            />
            {boxData.map((d, i) => (
              <Line
                key={`line-${i}`}
                from={{
                  x: (xScale(d.category) as number) + boxWidth / 2,
                  y: yScale(d.stats.min),
                }}
                to={{
                  x: (xScale(d.category) as number) + boxWidth / 2,
                  y: yScale(d.stats.max),
                }}
                stroke="var(--accent-solid)"
                strokeWidth={2}
              />
            ))}
            {boxData.map((d, i) => (
              <>
                <Line
                  key={`whisker-1-${i}`}
                  from={{
                    x: xScale(d.category),
                    y: yScale(d.stats.min),
                  }}
                  to={{
                    x: (xScale(d.category) as number) + boxWidth,
                    y: yScale(d.stats.min),
                  }}
                  stroke="var(--accent-solid)"
                  strokeWidth={2}
                />
                <Line
                  key={`whisker-2-${i}`}
                  from={{
                    x: xScale(d.category),
                    y: yScale(d.stats.max),
                  }}
                  to={{
                    x: (xScale(d.category) as number) + boxWidth,
                    y: yScale(d.stats.max),
                  }}
                  stroke="var(--accent-solid)"
                  strokeWidth={2}
                />
              </>
            ))}
            {boxData.map((d, i) => (
              <rect
                key={`box-${i}`}
                x={xScale(d.category)}
                y={yScale(d.stats.q3)}
                height={yScale(d.stats.q1) - yScale(d.stats.q3)}
                width={boxWidth}
                fill="var(--accent-line)"
                stroke="var(--accent-solid)"
                strokeWidth={2}
              />
            ))}
            {boxData.map((d, i) => (
              <Line
                key={`median-${i}`}
                from={{
                  x: xScale(d.category),
                  y: yScale(d.stats.median),
                }}
                to={{
                  x: (xScale(d.category) as number) + boxWidth,
                  y: yScale(d.stats.median),
                }}
                stroke="var(--accent-solid)"
                strokeWidth={2}
              />
            ))}
            <AxisY scale={yScale} />
            <AxisX scale={xScale} top={innerHeight} />
          </Group>
        );
      }}
    </ResponsiveChartContainer>
  );
};

export default Boxplot;

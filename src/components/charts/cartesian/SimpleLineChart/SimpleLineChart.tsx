import { scaleLinear, scaleTime } from "@visx/scale";
import ResponsiveChartContainer from "../../common/ResponsiveChartContainer";
import { extent } from "@visx/vendor/d3-array";
import { Group } from "@visx/group";
import { LinePath } from "@visx/shape";
import AxisX from "../../axis/AxisX";
import AxisY from "../../axis/AxisY";

type SimpleLineChartProps<Datum extends object> = {
  data: Datum[];
  xAccessor: (d: Datum) => Date;
  yAccessor: (d: Datum) => number;
  margin?: { top: number; bottom: number; left: number; right: number };
};

const SimpleLineChart = <Datum extends object>(
  props: SimpleLineChartProps<Datum>
) => {
  const { data, xAccessor, yAccessor, margin } = props;
  return (
    <ResponsiveChartContainer margin={margin}>
      {({ innerWidth, innerHeight, margin }) => {
        const xScale = scaleTime({
          range: [0, innerWidth],
          domain: extent(data, xAccessor) as [Date, Date],
        });

        const yScale = scaleLinear({
          range: [innerHeight, 0],
          domain: extent(data, yAccessor) as [number, number],
        });
        return (
          <Group top={margin.top} left={margin.left}>
            <rect
              width={innerWidth}
              height={innerHeight}
              fill="var(--gray-bg)"
            />
            <LinePath
              data={data}
              x={(d: Datum) => xScale(xAccessor(d))}
              y={(d: Datum) => yScale(yAccessor(d))}
              stroke={"var(--accent-solid)"}
              strokeWidth={2}
            />
            <AxisY scale={yScale} />
            <AxisX scale={xScale} top={innerHeight} />
          </Group>
        );
      }}
    </ResponsiveChartContainer>
  );
};

export default SimpleLineChart;

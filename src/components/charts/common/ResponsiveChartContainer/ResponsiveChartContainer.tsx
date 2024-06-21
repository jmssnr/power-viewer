import React from "react";
import { ParentSize } from "@visx/responsive";

type Margin = { top: number; bottom: number; left: number; right: number };

type ProvidedProps = {
  width: number;
  height: number;
  margin: Margin;
  innerHeight: number;
  innerWidth: number;
};

type ResponsiveChartContainerProps = {
  margin?: Margin;
  children: (props: ProvidedProps) => React.ReactNode;
};

const ResponsiveChartContainer = (props: ResponsiveChartContainerProps) => {
  const { children, margin = { top: 10, bottom: 10, left: 10, right: 10 } } =
    props;

  return (
    <ParentSize>
      {({ width, height }) => {
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;
        return (
          <svg width={width} height={height}>
            {children({ width, height, innerHeight, innerWidth, margin })}
          </svg>
        );
      }}
    </ParentSize>
  );
};

export default ResponsiveChartContainer;

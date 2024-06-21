import React from "react";
import { AxisBottom, AxisScale, SharedAxisProps } from "@visx/axis";

const AxisX = <Scale extends AxisScale>(props: SharedAxisProps<Scale>) => {
  return (
    <AxisBottom
      {...props}
      stroke="var(--gray-line)"
      tickStroke="var(--gray-line)"
      tickLabelProps={{
        fill: "var(--gray-text)",
        fontSize: "0.75rem",
      }}
      labelOffset={30}
      labelProps={{
        fill: "var(--gray-text)",
        fontSize: "0.8rem",
      }}
    />
  );
};

export default AxisX;

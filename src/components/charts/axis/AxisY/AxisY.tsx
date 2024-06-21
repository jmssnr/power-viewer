import React from "react";
import { AxisLeft, AxisScale, SharedAxisProps } from "@visx/axis";

const AxisY = <Scale extends AxisScale>(props: SharedAxisProps<Scale>) => {
  return (
    <AxisLeft
      {...props}
      stroke="var(--gray-line)"
      tickStroke="var(--gray-line)"
      tickLabelProps={{
        fill: "var(--gray-text)",
        fontSize: "0.75rem",
      }}
      labelOffset={50}
      labelProps={{
        fill: "var(--gray-text)",
        fontSize: "0.8rem",
      }}
    />
  );
};

export default AxisY;

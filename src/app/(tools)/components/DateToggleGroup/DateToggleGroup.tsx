"use client";

import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import classes from "./DateToggleGroup.module.css";
import { useDateContext } from "@/hooks/useDateContext";

const DateToggleGroup = () => {
  const { lookBack, setLookBack } = useDateContext();

  return (
    <ToggleGroupPrimitive.Root
      className={classes.root}
      type="single"
      value={lookBack}
      onValueChange={(value) => {
        if (value) setLookBack(value);
      }}
    >
      <ToggleGroupPrimitive.Item value="1" className={classes.item}>
        1D
      </ToggleGroupPrimitive.Item>
      <ToggleGroupPrimitive.Item value="7" className={classes.item}>
        1W
      </ToggleGroupPrimitive.Item>
      <ToggleGroupPrimitive.Item value="30" className={classes.item}>
        1M
      </ToggleGroupPrimitive.Item>
      <ToggleGroupPrimitive.Item value="365" className={classes.item}>
        1Y
      </ToggleGroupPrimitive.Item>
    </ToggleGroupPrimitive.Root>
  );
};

export default DateToggleGroup;

"use client";

import { Select, SelectItem } from "@/components/primitives/Select";
import { useGetPowerGeneration } from "@/hooks/useGetPowerGeneration";
import Skeleton from "@/components/primitives/Skeleton";
import { Dispatch, SetStateAction } from "react";

type PowerTypeSelectProps = {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
};

const PowerTypeSelect = ({ value, setValue }: PowerTypeSelectProps) => {
  const { data, isPending, isError } = useGetPowerGeneration();

  if (isPending) {
    return <Skeleton width={200} height={35} />;
  }

  if (isError) {
    return "An error occured";
  }

  return (
    <Select
      placeholder="Select a power type"
      required
      value={data[value].name}
      onValueChange={(v) => setValue(data.findIndex((d) => d.name == v))}
    >
      {data.map((type, idx) => (
        <SelectItem key={idx} value={type.name}>
          {type.name}
        </SelectItem>
      ))}
    </Select>
  );
};

export default PowerTypeSelect;

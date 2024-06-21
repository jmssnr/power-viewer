"use client";

import { Select, SelectItem } from "@/components/primitives/Select";
import { useGetPowerGeneration } from "@/hooks/useGetPowerGeneration";
import Skeleton from "@/components/primitives/Skeleton";

type PowerTypeSelectProps = {
  value: string;
  setValue: (v: string) => void;
};

const PowerTypeSelect = ({value, setValue}: PowerTypeSelectProps) => {
  const { data, isPending, isError } = useGetPowerGeneration();

  if (isPending) {
    return <Skeleton width={200} height={35} />;
  }

  if (isError) {
    return "An error occured";
  }

  return (
    <Select placeholder="Select a power type" required value={value} onValueChange={setValue}>
      {data.map((type, idx) => (
        <SelectItem key={idx} value={type.name}>
          {type.name}
        </SelectItem>
      ))}
    </Select>
  );
};

export default PowerTypeSelect;

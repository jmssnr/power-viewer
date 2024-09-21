"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/Command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import { Badge } from "@/components/ui/Badge";

export type MultiSelectProps = {
  values: string[];
  onValueChange: (values: string[]) => void;
  options: { value: string; label: string; chart: React.ReactNode }[];
};
const MultiSelect = ({ values, onValueChange, options }: MultiSelectProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" className="justify-between">
          {values.length > 0 ? (
            <div className="space-x-1">
              {values.map((value, i) => (
                <Badge key={i} variant={"secondary"} className="font-normal">
                  {options.find((option) => option.value === value)?.label}
                </Badge>
              ))}
            </div>
          ) : (
            "Select framework..."
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[350px] p-0" align="start">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = values.find((v) => v == option.value);
                return (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={() => {
                      if (isSelected) {
                        if (values.length === 1) return;

                        const nextValues = values.filter(
                          (v) => v !== option.value
                        );
                        onValueChange(nextValues);
                      } else {
                        const nextValues = [...values, option.value];
                        onValueChange(nextValues);
                      }
                    }}
                  >
                    <div
                      className={cn(
                        "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : "opacity-50 [&_svg]:invisible"
                      )}
                    >
                      <CheckIcon className={cn("h-4 w-4")} />
                    </div>
                    {/* <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === option.value ? "opacity-100" : "opacity-0"
                      )}
                    /> */}
                    <div className="flex justify-between w-full">
                      {option.label}
                      {option.chart}
                    </div>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default MultiSelect;

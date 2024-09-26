"use client";
import {
  useQueryStates,
  parseAsIsoDateTime,
  useQueryState,
  parseAsString,
} from "nuqs";
import { subDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/ToggleGroup";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Calendar } from "@/components/ui/Calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import { useState } from "react";
import { Separator } from "@/components/ui/Separator";

const DateRangeSelect = () => {
  const [relative, setRelative] = useQueryState(
    "relative",
    parseAsString.withDefault("3")
  );
  const [dateRange, setDateRange] = useQueryStates({
    from: parseAsIsoDateTime.withDefault(subDays(new Date(), Number(relative))),
    to: parseAsIsoDateTime.withDefault(new Date()),
  });

  const [date, setDate] = useState<DateRange>(dateRange);

  return (
    <div className="flex">
      <ToggleGroup
        type="single"
        value={relative}
        variant={"secondary"}
        className="gap-0"
        onValueChange={(value) => {
          const nextDates = {
            from: subDays(new Date(), Number(value)),
            to: new Date(),
          };
          setRelative(value);
          setDateRange(null);
          setDate(nextDates);
        }}
      >
        <ToggleGroupItem className="" value="1">
          1 D
        </ToggleGroupItem>
        <ToggleGroupItem value="7">7 D</ToggleGroupItem>
        <ToggleGroupItem value="30">1 M</ToggleGroupItem>
        <ToggleGroupItem value="365">1 Y</ToggleGroupItem>
      </ToggleGroup>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "justify-start text-left font-normal rounded-none rounded-tr-md rounded-br-md",
              !date && "text-muted-foreground"
            )}
            size="sm"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="flex gap-0 h-full">
            <Separator orientation="vertical" className="h-auto" />
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={(nextRange, selectedDay) => {
                setDate((range) => {
                  if (range.from && range.to) return { from: selectedDay };
                  return nextRange as DateRange;
                });

                if (nextRange?.to && nextRange?.from) {
                  setDateRange(nextRange);
                }

                setRelative(null);
              }}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DateRangeSelect;

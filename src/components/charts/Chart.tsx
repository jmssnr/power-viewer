"use client";
import { cn } from "@/lib/utils";
import { ParentSize } from "@visx/responsive";
import { Card } from "../ui/Card";

const ChartControls = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("min-h-12 h-12", className)} {...props} />;
};

const ChartLegend = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("min-h-12 h-12", className)} {...props} />;
};

const ChartContent = ({
  children,
}: {
  children: (width: number, height: number) => React.ReactNode;
}) => {
  return (
    <div className="flex-1 h-full min-h-42">
      <ParentSize>{({ width, height }) => children(width, height)}</ParentSize>
    </div>
  );
};

const ChartSelection = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-h-16 h-7">{children}</div>;
};

const Chart = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card className={cn("flex flex-col w-full h-full", className)} {...props} />
  );
};

export { Chart, ChartContent, ChartControls, ChartLegend, ChartSelection };

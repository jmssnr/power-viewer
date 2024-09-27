import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div className="p-5 h-full flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <Skeleton className="w-[350px] h-[40px] rounded-full" />
        <Skeleton className="w-[200px] h-[40px] rounded-full" />
      </div>
      <Skeleton className="flex-1 rounded-lg w-full" />
    </div>
  );
}

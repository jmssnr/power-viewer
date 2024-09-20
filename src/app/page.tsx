import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="bg-repeat w-full h-full grid place-content-center heropattern-overlappingcircles-neutral-100">
      <div className="flex flex-col items-center gap-4">
        <div className="text-center">
          <h1 className="font-bold text-2xl">Analyze Electricity Data</h1>
          <h2 className="text-neutral-500">
            Intuitive visualization of global electricity data
          </h2>
        </div>
        <div className="flex gap-4 w-full">
          <Button className="w-full">Get started</Button>
          <Button className="w-full" variant={"secondary"}>
            View source
          </Button>
        </div>
      </div>
    </main>
  );
}

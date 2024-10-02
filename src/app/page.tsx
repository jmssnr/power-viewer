import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-repeat w-full h-full grid place-content-center heropattern-wiggle-neutral-50">
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/power-views-logo.png"
          width={100}
          height={100}
          alt="PowerViews"
        />
        <div className="text-center">
          <h1 className="font-bold text-3xl">Power Viewer</h1>
          <h2 className="text-neutral-500 text-lg">
            View and analyze global electricity data
          </h2>
        </div>
        <div className="flex gap-4 w-full">
          <Button asChild className="w-full">
            <Link href="/analyze">Get started</Link>
          </Button>
          <Button className="w-full" variant={"outline"}>
            View source
          </Button>
        </div>
      </div>
    </main>
  );
}

import Link from "next/link";
import CountrySelect from "./CountrySelect";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/Skeleton";

const Header = () => {
  return (
    <header className="border-b p-3 flex items-center h-[60px] justify-between">
      <p>
        <span className="font-bold">Power</span>Viewer
      </p>
      <nav className="flex gap-5 items-center">
        <Link href="/">Home</Link>
        <Link href="/analyze">Analyze</Link>
        <Link href="/about">About</Link>
        <Suspense
          fallback={<Skeleton className="w-[180px] h-[30px] rounded-full" />}
        >
          <CountrySelect />
        </Suspense>
      </nav>
    </header>
  );
};

export default Header;

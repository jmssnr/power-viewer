import CountrySelect from "@/app/(tools)/components/CountrySelect";
import { Skeleton } from "./ui/Skeleton";
import { Suspense } from "react";

const Header = () => {
  return (
    <header className="flex bg-white justify-between items-center p-2 justify-self-end h-[var(--header-height)] border-b col-span-2 w-[calc(100%-var(--sidebar-width))]">
      <p>
        Power<span className="font-semibold">Viewer</span>
      </p>

      <Suspense
        fallback={<Skeleton className="w-[180px] h-[40px] rounded-full" />}
      >
        <CountrySelect />
      </Suspense>
    </header>
  );
};

export default Header;

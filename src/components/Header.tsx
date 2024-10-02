import CountrySelect from "@/app/(tools)/components/CountrySelect";
import { Skeleton } from "./ui/Skeleton";
import { Suspense } from "react";

const Header = () => {
  return (
    <header className="flex justify-end items-center p-2 h-[var(--header-height)]">
      <Suspense
        fallback={<Skeleton className="w-[180px] h-[40px] rounded-full" />}
      >
        <CountrySelect />
      </Suspense>
    </header>
  );
};

export default Header;

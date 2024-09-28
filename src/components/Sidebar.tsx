import Image from "next/image";
import { Button } from "./ui/Button";
import { ChartLineIcon, GithubIcon, HomeIcon, InfoIcon } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-[var(--sidebar-width)] border-r bg-white">
      <Image
        className="absolute top-[10px] left-[10px]"
        src="/power-views-logo.png"
        width={40}
        height={40}
        alt="PowerViews"
      />
      <nav className="flex flex-col items-center w-full">
        <Button size="icon" variant={"ghost"}>
          <HomeIcon className="stroke-2 h-4 w-4" />
        </Button>
        <Button size="icon" variant={"ghost"}>
          <ChartLineIcon className="stroke-2 h-4 w-4" />
        </Button>
        <Button size="icon" variant={"ghost"}>
          <InfoIcon className="stroke-2 h-4 w-4" />
        </Button>
        <Button size="icon" variant={"ghost"}>
          <GithubIcon className="stroke-2 h-4 w-4" />
        </Button>
      </nav>
    </aside>
  );
};

export default Sidebar;

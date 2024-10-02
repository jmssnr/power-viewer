"use client";

import Image from "next/image";
import { Button } from "./ui/Button";
import { HomeIcon, InfoIcon, LineChart, LucideProps } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type NavItem = {
  href: string;
  hoverInfo: string;
  icon: React.FC<LucideProps>;
};

const navLinks: NavItem[] = [
  { href: "/", hoverInfo: "Home", icon: HomeIcon },
  { href: "/analyze", hoverInfo: "Analyze", icon: LineChart },
  { href: "/about", hoverInfo: "About", icon: InfoIcon },
];

const SidebarNavItem = (item: NavItem) => {
  const pathname = usePathname();
  const isCurrentPage = pathname === item.href;

  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            variant={isCurrentPage ? "secondary" : "ghost"}
            disabled={isCurrentPage}
            asChild
          >
            <Link
              href={item.href}
              className={cn(isCurrentPage && "pointer-events-none")}
            >
              <item.icon className="stroke-2 h-4 w-4" />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{item.hoverInfo}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const Sidebar = () => {
  return (
    <aside className="shadow-md w-[var(--sidebar-width)] flex flex-col items-center justify-start gap-3 pt-4 border-r bg-background">
      <Link href="/">
        <Image
          src="/power-views-logo.png"
          width={30}
          height={30}
          alt="PowerViews"
        />
      </Link>
      <nav className="flex flex-col items-center w-full p-3 gap-2">
        {navLinks.map((item, i) => (
          <SidebarNavItem key={i} {...item} />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

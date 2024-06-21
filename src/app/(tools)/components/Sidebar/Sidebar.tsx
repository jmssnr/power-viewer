"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import classes from "./Sidebar.module.css";
import { useState } from "react";
import {
  TransformIcon,
  AngleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";

const links = [
  {
    href: "/monitoring",
    label: "Monitoring",
    icon: <AngleIcon width={20} height={20} />,
  },
  {
    href: "/analytics",
    label: "Analytics",
    icon: <TransformIcon width={20} height={20} />,
  },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <aside className={open ? classes.root : classes.rootCollapsed}>
      <div
        style={{
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "stretch",
        }}
      >
        <div className={classes.list}>
          {links.map((link, i) => (
            <Link
              key={i}
              className={
                path === link.href ? classes.linkHighlight : classes.link
              }
              href={link.href}
            >
              <span
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                {link.icon} {open && link.label}
              </span>
            </Link>
          ))}
        </div>
        <button
          style={{
            width: 40,
            height: 40,
            alignSelf: "end",
            display: "grid",
            placeContent: "center",
            color: "var(--accent-text)",
            backgroundColor: "var(--accent-bg-active)",
            border: "1px solid var(--accent-line)",
            borderRadius: "5px",
          }}
          onClick={() => setOpen(!open)}
        >
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

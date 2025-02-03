"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import classes from "./nav-links.module.css";

export default function NavLink({ children, href, className }) {
  const path = usePathname();
  
  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.active} ${classes.link} `
          : classes.link
      }
    >
      {children}
    </Link>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import classes from "./navLink.module.css";

export default function NavLinks({ children, href }) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={
        pathname.startsWith(href)
          ? `${classes.active} ${classes.link}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}

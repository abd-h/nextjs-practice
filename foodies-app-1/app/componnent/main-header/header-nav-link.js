"use client";
const { default: Link } = require("next/link");
const { usePathname } = require("next/navigation");

import classes from "./header-nav-link.module.css";

const NavLink = ({ children, href }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`${
        path.startsWith(href)
          ? `${classes.active} ${classes.link}`
          : classes.link
      }`}
    >
      {" "}
      {children}{" "}
    </Link>
  );
};

export default NavLink;

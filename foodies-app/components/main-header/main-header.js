import React from "react";
import Link from "next/link";
import Image from "next/image";

import classes from "./main-header.module.css";
import logoImg from "@/assets/icons/meal.png";
import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={logoImg} alt="A Plate with food in it" priority />
        Next level of food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;

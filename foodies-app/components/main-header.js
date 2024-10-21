import React from "react";
import Link from "next/link";
import Image from "next/image";

import classes from "./main-header.module.css";
import logoImg from "@/assets/icons/meal.png";

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
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;

import Link from "next/link";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./navlink";

import classes from "./main-header.module.css";

import logoImage from "@/assets/logo.png";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImage} alt="Selected image" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink className={classes.active? classes.active : ''} end href="/meals">Meals</NavLink>
              <NavLink href="/community">Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

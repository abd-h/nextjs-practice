'use client'
const { default: Link } = require("next/link");
import { usePathname } from 'next/navigation';
import Image from "next/image";
import classes from "./main-header.module.css";
import logoImage from "@/assets/icons/meal.png";
import MainHeaderBackground from "./main-header-background";
import NavLink from './nav-link';


const MainHeader = () => {
    const path = usePathname();
    console.log(path);

  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImage} alt="A plate with food" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals" >
                Browse Meals
              </NavLink>
            </li>
            <li>
              <NavLink href="/community" >
                Community
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;

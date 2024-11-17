import Link from "next/link";
import classes from "./page.module.css";

const HomePage = () => {
  return (
    <>
      <h1 className={classes.h1}>Home Page</h1>
          <ul className={classes.links}>
              <li className={classes.p}><Link href="/meals/meal-one">Meal One</Link></li>
              <li className={classes.p}><Link href="/meals/meal-two">Meal two</Link></li>
          </ul>
    </>
  );
};

export default HomePage;

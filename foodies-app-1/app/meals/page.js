import Link from "next/link";
import classes from './page.module.css'
import MealsGrid from "../componnent/meals/meals-grid";
import { getMeals } from "../lib/meals";
import { Suspense } from 'react';
import LoadingMealsPage from "./louding-out";

const Meals = async () => {
    const meals = await getMeals();
    return (
      <>
        <MealsGrid meals={meals} />
      </>
    );
}

const MealsPage = async () => {
    
  return (
    <>
      <header className={classes.header}>
        {" "}
              <h1>Delicious meals, created <span className={ classes.highlight }>by you</span></h1>
              <p>Choose your favourite recipe and cook it yourself. its easy and fun!</p>
              <p className={classes.cta}><Link href='/meals/share'>Share your favourite recipe</Link></p>
      </header>
      <main className={classes.main}>
       <Suspense fallback={<LoadingMealsPage/>} ><Meals /></Suspense>
              <p><Link href='./'>Back</Link></p>
      </main>
    </>
  );
};

export default MealsPage;

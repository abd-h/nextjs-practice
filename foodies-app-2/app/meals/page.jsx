import { Suspense } from "react";
import Link from "next/link";

import classes from "./page.module.css";
import MealsGrid from "../component/meals/meals-grid";
import { getMeals } from "../lib/meal";
import MealsLoadingPage from "./loading-text";

export const metadata = {
  title: 'All Meals',
  description: 'Delicious Meals'
}


async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {


  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals, created
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself. Its easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favourite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<MealsLoadingPage />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}

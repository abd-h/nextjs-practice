import Link from "next/link";

import classes from './page.module.css';
import MealsGrid from "../../components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

const Meals = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}


export default async function MealPage() {
  
    return (
      <>
        <header className={classes.header}>
          <h1>
            Delicious meals, created{" "}
            <span className={classes.highlight}>by you</span>{" "}
          </h1>
          <p>
            Choose your favourite recipe and cook it yourself. It's fun and easy
            to make!
          </p>
          <p className={classes.cta}>
            <Link href="/meals/share">Share You Favourite Recipe</Link>
          </p>
        </header>
        <main>
          <Suspense fallback={<p className={classes.fallback}>Fetching meals...</p>} >
          <Meals />
          </Suspense>
        </main>
      </>
    );
}
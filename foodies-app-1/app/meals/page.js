import Link from "next/link";
import classes from './page.module.css'

const MealsPage = () => {
  return (
    <>
      <header className={classes.header}>
        {" "}
        <h1>Meals Page</h1>
      </header>
      <main className={classes.main}>
        <p>
          <Link href="/meals/meal-1">Meal 1 details</Link>
        </p>
        <p>
          <Link href="/meals/meal-2">Meal 2 details</Link>
              </p>
              <p><Link href='./'>Back</Link></p>
      </main>
    </>
  );
};

export default MealsPage;

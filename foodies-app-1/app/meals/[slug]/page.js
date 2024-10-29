import Link from 'next/link';
import classes from './page.module.css'

const MealsDetailPage = ({ params }) => {
  const meal = params.slug;
  return (
    <>
      <header className={classes.header}>
        <h1>Meals Detail Page</h1>
      </header>
      <main className={classes.main}>
        <p>pathName: {meal}</p>
        <p>
          <Link href="../">Back</Link>
        </p>
      </main>
    </>
  );
};

export default MealsDetailPage;
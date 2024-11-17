import Link from 'next/link';
import classes from './page.module.css';

const DynamicPage = ({params}) => {

    return (
      <>
        <h1 className={classes.h1}>Slugs</h1>
        <p className={classes.p}>{params.mealSlug}</p>
        <p className={classes.p}>
          <Link href="./">Back</Link>
        </p>
      </>
    );
}

export default DynamicPage;
import Link from 'next/link';
import classes from './page.module.css';
const ShareMealsPage = () => {
    return (
      <>
        <header className={classes.header}>
                <h1>Share Meals Page</h1>
                <p><Link href='./'>Back</Link></p>
        </header>
      </>
    );
}

export default ShareMealsPage;
import Link from "next/link";
import classes from './page.module.css';

const CommunityPage = () => {
    return (
      <>
        <header className={classes.header}>
          <h1>Community Page</h1>{" "}
        </header>
        <main className={classes.main}>
          <p>
            <Link href="./">Back</Link>
          </p>
        </main>
      </>
    );
}

export default CommunityPage;


import Link from "next/link";
import classes from "./page.module.css";
import ImagePicker from "@/app/componnent/meals/image-picker";
import { shareMeal } from "@/app/lib/share-meal-action";
const ShareMealsPage = () => {
 
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favourite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={shareMeal}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" name="name" id="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" name="email" id="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" required />
          </p>
          <p>
            {" "}
            <label htmlFor="summary">Short Summary</label>
            <input type="text" name="summary" id="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea name="instructions" id="instructions" cols="30" rows="10" required></textarea>
          </p>
          <ImagePicker label='image' name='image' />
          <p className={classes.actions}>
            <button type="submit">Share Meal</button>
          </p>
        </form>{" "}
        <p>
          <Link href="./">Back</Link>
        </p>
      </main>
    </>
  );
};

export default ShareMealsPage;

'use client'

import { useFormState } from 'react-dom';

import ImagePicker from "@/components/meals/image-picker";
import classes from "./page.module.css";
import { shareMeal } from "@/lib/share-meal-action";
import SubmitBtn from '@/components/meals/submit-button';


export default function ShareMealPage() {
  const [state, formData] = useFormState(shareMeal, {message: null});
  
  
  console.log(state);
  
  
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formData}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
            {state.title && (
              <span className={classes.span}> {state.title} </span>
            )}
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
            {state.summary && (
              <span className={classes.span}> {state.summary} </span>
            )}
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
            {state.instructions && (
              <span className={classes.span}> {state.instructions} </span>
            )}
          </p>
          <ImagePicker label="Your Image" name="image" />
          {state.image && <span className={classes.span}> {state.image} </span>}
          <p className={classes.actions}>
            <SubmitBtn type='submit'/>
          </p>
        </form>
      </main>
    </>
  );
}

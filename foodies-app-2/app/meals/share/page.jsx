'use client'

import { useFormState } from 'react-dom';

import ImagePicker from "@/app/component/meals/image-picker";
import classes from "./page.module.css";
import { shareMeal } from "@/app/lib/actions";
import MealsFormSubmit from "@/app/component/meals/meals-form-submit";

export default function ShareMealPage() {
  const [state, formAction] = useFormState(shareMeal, {message: null});
  console.log(state.message);
  console.log(state.instructions);
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          {state.message && <p>Invalid data has been entered</p>}
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
          </p>
          {state.title && <p>{state.title}</p>}
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          {state.summary && <p>{state.summary}</p>}
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker name="image" label="Your Image" />
          {state.title && <p>{state.title} </p>}
          {state.email && <p>{state.email}</p>}

          {state.instructions && <p>{state.instructions}</p>}
          {state.image && <p>{state.image}</p>}
          {state.name && <p>{state.name}</p>}
          {state.summary && <p>{state.summary}</p>}
          {state.s && <p>{state.summary}</p>}
          <p className={classes.actions}>
            <MealsFormSubmit type="submit">Share Meal</MealsFormSubmit>
          </p>
        </form>
      </main>
    </>
  );
}

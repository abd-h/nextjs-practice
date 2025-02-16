
import Link from "next/link";
import { redirect } from "next/navigation";
import Image from 'next/image';
import '@/app/globals.css';

import classes from './page.module.css';
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";
import DeleteMeal from "@/components/meals/delete-meal";

export default function MealDetailPage({ params }) {

  const meal = getMeal(params.mealSlug);
console.log('insideMealDetailsPage', params);

  if (!meal) {
    // redirect('/meals')
    notFound();
  }
  
  let { id, title, creator, creator_email, image, summary, instructions } = meal;
  
  console.log('From inside the MealDetails page:', id);
  console.log('From inside the MealDetails page:', params);
  
  
 instructions = instructions.replace(/\n/g, "<br/>");
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{title} </h1>
          <p className={classes.creator}>
            By <a href={`mailto:${creator_email}`}>{creator} </a>
          </p>
          <p className={classes.summary}>{summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: instructions }}
        ></p>
      </main>
      <DeleteMeal id={ id } params={params.mealSlug } />
    </>
  );
}

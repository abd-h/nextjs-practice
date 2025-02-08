import Link from "next/link";
import Image from 'next/image';
import '@/app/globals.css';

import classes from './page.module.css';
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export default function MealDetailPage({ params }) {

  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }
  
  let { title, creator, creator_email, image, summary, instructions } = meal;
  
 instructions = instructions.replace(/\n/g, "<br/>");
  return (
    <>
      <header className={ classes.header }>
        <div className={ classes.image }>
        <Image src={image} alt={title} fill/>
        </div>
        <div className={ classes.headerText }><h1>{title} </h1>
          <p className={classes.creator} >By <a href={ `mailto:${creator_email}` }>{creator} </a></p>
        <p className={classes.summary}>{summary}</p>
        </div>
      </header>
      <main>
      <p className={classes.instructions} dangerouslySetInnerHTML={{__html: instructions}} ></p>
      </main>
    </>
  );
}

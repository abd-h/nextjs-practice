import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";

const MealDetailPage = ({ params }) => {
  const param = params.slug;
  const meal = getMeal(param);

  meal.instructions = meal.instructions.replace(/\n/g, '<br />')

  console.log(meal.title);
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} fill alt={meal.title} />
        </div>
        <div className={classes.headerText}>
          <h1>{ meal.title }</h1>
          <p>
            By <a href={ `mailto:${meal.creator_email}` }>{ meal.creator }</a>
          </p>
          <p className={classes.summery}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions, }}
        ></p>
      </main>
    </>
  );
};

export default MealDetailPage;

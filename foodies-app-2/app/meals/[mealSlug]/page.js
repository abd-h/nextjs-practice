import Link from "next/link";
import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/app/lib/meals";
import NavLink from "@/app/components/nav-link";
import { notFound } from "next/navigation";

const MealDetailsPage = ({ params }) => {
  const meal = getMeal(params.mealSlug);
  if (!meal) {
    notFound();
  }

  let { title, creator, creator_email, summary, image, instructions } = meal;
  instructions = instructions.replace(/\n/g, "<br />");

  

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{title}</h1>
          <p className={classes.creator}>
            Creator by{" "}
            <a href={`mailto:${creator_email}`} className={classes.highlight}>
              {creator}
            </a>
          </p>
          <p className={classes.summary}>{summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: instructions }}
        ></p>

        <NavLink className={classes.highlight} href="./">
          Back
        </NavLink>
      </main>
    </>
  );
};

export default MealDetailsPage;

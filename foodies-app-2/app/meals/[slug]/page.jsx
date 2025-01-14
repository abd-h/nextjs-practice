import Link from "next/link";
import Image from "next/image";

import classes from "./page.module.css";
import { getMeal } from "@/app/lib/meal";
import { notFound } from "next/navigation";

export default async function DynamicPage({ params }) {

    // const meal = await getMeal(params.slug);
    // if (!meal) {
    //     notFound();
    // }


    let { title, image, summary, instructions, creator, creator_email } =
      await getMeal(params.slug);

    instructions = instructions.replace(/\n/g, "<br/>");
   
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
                  <h1>{ title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${creator_email}`}>{creator}</a>
          </p>
          <p className={classes.summary}>{summary} </p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: instructions }}
        ></p>
      </main>
    </>
  );
}

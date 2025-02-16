import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const db = sql("meals.db");

export const getMeals = async () => {
  // created two second delay to simulate slow response, so that i can practice creating better response to the end user.
  // throw new Error('an error')
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
};

export const getMeal = (slug) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
};

export const saveMeal = async (meal) => {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extentions = meal.image.name.split(".").pop();

  const fileName = `${meal.slug}.${extentions}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);

  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Could not save the image!");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `
          INSERT INTO meals
           (title, summary, instructions, creator, creator_email, image, slug)
          VALUES (
              @title,
              @summary,
              @instructions,
              @creator,
              @creator_email,
              @image,
              @slug
          )
              
          `
  ).run(meal);
};


export const deleteMeal = async (id) => {
  await db.prepare("DELETE FROM meals WHERE id = ?").run(id);
    // revalidatePath("/meals");
    // redirect('/meals')
};
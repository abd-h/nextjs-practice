import fs from "node:fs";
import sql from "better-sqlite3";
import { resolve } from "styled-jsx/css";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export const getMeals = async () => {
//   await new Promise((resolve) => setTimeout(resolve, 5000));
  // throw new Error('An error has occured!')
  return db.prepare("SELECT * FROM meals").all();
};

export const getMeal = (slug) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
};

export const saveMeal = async (meal) => {
  meal.slug = slugify(meal.title);
  meal.instruction = xss(meal.instructions);

  const extention = meal.image.name.split(".").pop();

  const fileName = `${meal.slug}.${extention}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed");
    }
  });

    meal.image = `/images/${fileName}`;
    

 db.prepare(`
    INSERT INTO meals
        (title, image, summary, instructions, creator, creator_email, slug)
    VALUES (
        @title, 
        @image, 
        @summary, 
        @instructions, 
        @creator, 
        @creator_email, 
        @slug
    )
    `).run(meal);
};

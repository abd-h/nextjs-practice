import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

export const getMeals = async () => {
  // similating action that takes longer
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error('Failed to fetch data!')
  return db.prepare("SELECT * FROM meals").all();
};

export const getMeal = (slug) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
};

export const saveMeal = async (meal) => {
  meal.slug = slugify(meal.title, { lower: true });

  console.log(meal.slug);
  meal.instructions = xss(meal.instructions);

  const extentions = meal.image.name.split(".").pop();
  console.log(extentions);

  const fileName = `${meal.slug}.${extentions}`;
  console.log(fileName);

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  console.log(stream);

  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Could not save new image for the meal");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `
        INSERT INTO meals 
            (slug, title, summary, instructions, creator, creator_email, image)
        VALUES (
            @slug,
                @title,
                @summary,
                @instructions,
                @creator,
                @creator_email,
                @image
        )
    `
  ).run(meal);
};

// export const saveMeal = async (meal) => {
//   meal.slug = slugify(meal.title, { lower: true });

//   meal.instructions = xss(meal.instructions);

//   const extention = meal.image.name.split(".").pop();

//   const fileName = `${meal.slug}.${extention}`;

//   const stream = fs.createWriteStream(`public/images/${fileName}`);

//   const bufferedImage = await meal.image.arrayBuffer();

//   stream.write(Buffer.from(bufferedImage), (error) => {
//     if (error) {
//       throw new Error("Saving photo has failed");
//     }
//   });

//     meal.image = `/images/${fileName}`;

//     // inserted must be the same order as values
//     db.prepare(`
//     INSERT INTO meals
//     (slug, title, summary, image, instructions, creator, creator_email)
//     VALUES(
//         @slug,
//         @title,
//         @summary,
//         @image,
//         @instructions,
//         @creator,
//         @creator_email
//     )
//     `).run(meal);
// };

"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

// mealData actions
export const shareMealData = async (formData) => {
  const invalidMeal = (text) => {
    return !text || text.trim() === "";
  };
  const meal = {
    title: formData.get("title"),
    image: formData.get("image"),
    summary: formData.get("summary"),
    creator_email: formData.get("email"),
    creator: formData.get("name"),
    instructions: formData.get("instructions"),
  };

  if (
    invalidMeal(meal.title) ||
    invalidMeal(meal.summary) ||
    invalidMeal(creator_email) ||
    invalidMeal(meal.creator) ||
    invalidMeal(meal.instructions) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
      return {
          message: 'Invalid input'
      }
  }

  await saveMeal(meal);
    revalidatePath('/meals', 'layout');
  redirect("/meals");
};

"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meal";
import { revalidatePath } from "next/cache";

function isInvalid(text) {
  return !text && text.trim() === '';
}

export const shareMeal = async (prevState, formData) => {
  const meal = {
    title: formData.get("title"),
    image: formData.get("image"),
    creator: formData.get("name"),
    summary: formData.get("summary"),
    creator_email: formData.get("email"),
    instructions: formData.get("instructions"),
  };
  if (
    isInvalid(meal.title) ||
    isInvalid(meal.image) ||
    isInvalid(meal.creator) ||
    isInvalid(meal.creator_email) ||
    isInvalid(meal.summary) ||
    isInvalid(meal.instructions) ||
    !meal.image ||
    !meal.creator_email.includes("@") ||
    meal.image.size === 0
  ) {
    console.log('inside actions: ', !meal.summary);
    // throw new Error('Invalid input')
    return {
      title: !meal.title ? "No Title Provided, please provide title" : null,
      email: !meal.creator_email ? "Please provide email" : null,
      image: meal.image.size === 0 ? "Ivalid Image" : "",
      summary: !meal.summary ? "please Provide summary" : null,
      instructions: !meal.instructions
        ? "Please Enter Instructions for the Your Chosen Meal"
        : null,
      name: !meal.creator ? "Please enter your name" : null,
    };
   
  }
  await saveMeal(meal);
  revalidatePath('/meals');
  redirect("/meals");
};

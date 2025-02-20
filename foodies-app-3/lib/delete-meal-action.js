'use server';

import { revalidatePath } from "next/cache";
import { deleteMeal } from "./meals";
import { redirect } from "next/navigation";

export const deletedMeal = async (id,params) => {
    // console.log('from deletedMeal: ', params);
    
    await deleteMeal(id, params);
   revalidatePath('/meals')
    redirect('/meals');
}
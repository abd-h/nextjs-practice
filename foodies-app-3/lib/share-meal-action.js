'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function invalidText(text) {
    return !text && text.trim() === '';
}

export const shareMeal = async (prevState,formData) => {
    const meal = {
        title: formData.get('title'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions')
    }
    
    const { title, image, creator, creator_email, summary, instructions } = meal;

    if (invalidText(title) || invalidText(image) || invalidText(creator) || invalidText(creator_email) ||
        invalidText(summary) || invalidText(instructions) || !creator_email.includes('@') || !image || !image.size === 0) {
        console.log(title);
        
        return {
            message: 'Invalid input',
            title: !title ? 'Please fill the title field' : null,
            summary: !summary ? 'fill summary' : null,
            instructions: !instructions ? 'Please input instructions for your chosen meal!' : null,
            image: !image ? 'Select an Image for your meals!' : null,
            creator: !creator ? 'Input your name!' : null,
            creator_email: !creator_email,
        }
    }

    await saveMeal(meal);
    revalidatePath('/meals')
    redirect('/meals')
    
}
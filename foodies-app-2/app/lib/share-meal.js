'use server';

export const shareMealData = async (formData) => {
    const meal = {
        title: formData.get('title'),
        image: formData.get('image'),
        summary: formData.get('summary'),
        creator_email: formData.get('email'),
        creator: formData.get('name'),
        instructions: formData.get('instructions')
    }

    console.log(meal);
}
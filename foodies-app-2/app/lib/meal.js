import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 5000))

    //testing error message! 
    // throw new Error('an error occurred')
    return db.prepare('SELECT * FROM meals').all();
}

export const getMeal = async (slug) => {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}
import sql from 'better-sqlite3';

const db = sql('meals.db');

export const getMeals = async () => {
    // created two second delay to simulate slow response, so that i can practice creating better response to the end user. 
    // throw new Error('an error')
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return db.prepare('SELECT * FROM meals').all();
};

export const getMeal = (slug) => {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}
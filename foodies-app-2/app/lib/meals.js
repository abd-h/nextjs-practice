import sql from 'better-sqlite3';
import { resolve } from 'styled-jsx/css';

const db = sql('meals.db');

export const getMeals = async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    // throw new Error('An error has occured!')
    return db.prepare('SELECT * FROM meals').all();
}

export const getMeal = (slug) => {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}
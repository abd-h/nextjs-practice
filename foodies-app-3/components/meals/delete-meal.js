'use server'
import Link from 'next/link';

import classes from './delete-meal.module.css'
// import { deleteMeal } from '@/lib/meals';
import { deleteMeal } from '@/lib/meals';
import { deletedMeal } from '@/lib/delete-meal-action';
import DeleteButton from './delete-meal-btn';


export default async function DeleteMeal({ id, params }) {
    
    
    
    console.log('Inside DeleteMeal', params);
    
// console.log('Passed meal id:', id);

    return (
      <form >
        <div className={classes.actions}>
          <Link href={`/meals`}>
            {" "}
            <DeleteButton id={id} params={params}  className={classes.button} type="button">
              Delete Meal
            </DeleteButton>
          </Link>
        </div>
      </form>
    );
}



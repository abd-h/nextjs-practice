'use client';

import { deletedMeal } from "@/lib/delete-meal-action";
import { redirects } from "@/next.config";
import { redirect, usePathname } from "next/navigation";

export default function DeleteButton({ id, params, ...props }) {
    
    const path = usePathname();
    function c() {
      redirect(path);
    }
    console.log(path);

    console.log(props);
    
    const handleClick = () => {
        const proceed = window.confirm('Are you sure you want to delete');
        console.log(proceed);
    
        if (proceed) {
           deletedMeal(id, params) 
        }
        
       
  };

  return (
    <button onClick={handleClick} {...props} >
      Delete Meal
    </button>
  );
}
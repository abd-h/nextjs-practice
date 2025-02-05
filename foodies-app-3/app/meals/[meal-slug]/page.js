import Link  from "next/link";
import '@/app/globals.css'
export default function MealDetailPage({ params }) {
  return (
    <main className='main'>
      <h1>Meal Detail Page</h1>
      <p>{params["meal-slug"]} </p>
      <p>
        <strong>
          <Link href="/meals">Back</Link>
        </strong>
      </p>
    </main>
  );
}

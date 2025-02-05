import Link from "next/link";

export default function MealPage() {

    return (
      <main className='main'>
        <h1>Meals</h1>
        <p>
          <strong>
            <Link href="/meals/meal-1">Meal 1</Link>
          </strong>
        </p>
        <p>
          <strong>
            <Link href="/meals/meal-2">Meal 2</Link>
          </strong>
        </p>
        <p>
          <strong>
            <Link href="/meals/meal-3">Meal 3</Link>
          </strong>
            </p>
            <p>
                <strong>
                    <Link href="/">Back</Link>
                </strong>
            </p>
      </main>
    );
}
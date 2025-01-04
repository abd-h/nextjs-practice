import Link from "next/link";

export default function Meals() {
    return (
      <main className="main">
        <h2>Meals Page</h2>
        <p>
          <Link href="/meals/meal-1">Meal-1</Link>
        </p>
        <p>
          <Link href="/meals/meal-2">Meal-2</Link>
        </p>
        <p>
          <Link href="/meals/meal-3">Meal-3</Link>
        </p>
        <p>
          <Link href="/">Back</Link>
        </p>
      </main>
    );
}
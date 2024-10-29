import Link from "next/link";
import './globals.css';

export default function Home() {
  return (
    <>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <main className="main">
        <p>
          <Link href="/meals">Meals</Link>
        </p>
        <p>
          <Link href="/meals/share">Share Meals Page</Link>
        </p>
        <p>
          <Link href="/community">Community</Link>
        </p>
      </main>
    </>
  );
}

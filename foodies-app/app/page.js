import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <p><Link href='/community' >Community Page</Link></p>
      <p><Link href='/meals' >Meals</Link></p>
    </main>
  );
}

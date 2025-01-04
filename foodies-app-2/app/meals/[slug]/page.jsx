import Link from "next/link";

export default function DynamicPage({ params }) {
    
    return (
        <main><h2>{ params.slug } </h2>
            <p>
                <Link href='/meals'>Back</Link>
            </p>
        </main>
    )
}
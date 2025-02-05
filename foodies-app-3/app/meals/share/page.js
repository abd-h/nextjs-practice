import Link  from 'next/link';

export default function ShareMealPage() {

    return (
        <main className='main'>
            <h1>Share Meals Page</h1>
            <p>
                <strong>
                    <Link href="/meals">Back</Link>
                </strong>
            </p>
        </main>
    )
}
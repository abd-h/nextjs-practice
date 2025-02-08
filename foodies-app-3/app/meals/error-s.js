'use client';

import Link from "next/link";

export default function ErrorPage() {
    return (
      <>
        <div className="error">
          <h1>Fail to fetched meals,An error has occurd</h1>
          <p>
            <Link href='/' >Try again later</Link>
          </p>
        </div>
      </>
    );
}
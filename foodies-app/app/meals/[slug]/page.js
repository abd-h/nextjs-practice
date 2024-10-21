import React from 'react';
import Link from 'next/link';

const SomeSlugPage = ({ params }) => {
  console.log(params);
  

  return (
    <main>
          <h1>SomeSlugPage</h1>
          { params.slug }
          <p><Link href='./'>Back</Link></p>
    </main>
  );
}

export default SomeSlugPage
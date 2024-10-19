import React from 'react'

import logoImg from '@/assets/icons/meal.png'
import Link from 'next/link'

const MainHeader = () => {
  return (
    <>
      <Link href='/'>
        <img src={ logoImg.src } alt="A Plate with food in it" />
        Next level of food
      </Link>
      <nav>
        <ul>
          <li><Link href='/meals' >Browse Meals</Link></li>
          <li><Link href='/community' >Foodies Community</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default MainHeader;
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import classes from './page.module.css';

const ShareMealpage = () => {

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}><Image /></div>
        <div className={headerText}>
          <h1>Title</h1>
          <p className={ classes.creator }> <a href={ `mailto:${'EMAIL'}` }></a></p>
          <p className={classes.summary}>Summary</p>
        </div>
      </header>
      <main>
      <p className={classes.instructions} dangerouslySetInnerHTML={{__html: '....'}} >Instructions</p>
      </main>
    </>
  );
}

export default ShareMealpage
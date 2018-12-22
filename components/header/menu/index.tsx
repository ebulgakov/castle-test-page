import React from 'react';
import Link from 'next/link';
import styles from './menu.scss';

export default () => (
  <ul className={styles.menu}>
    {['about', 'meetings', 'events', 'projects', 'contact us'].map((item) => (
      <li key={item} className={styles.item}>
        <Link href={item}>
          <a className={styles.menu}>{item}</a>
        </Link>
      </li>
    ))}
  </ul>
);

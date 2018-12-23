import React from 'react';
import styles from './slide.scss';
import { IArticlePreview } from '../../../../types/article';
import Link from 'next/link';

export default ({ image, title, text, link }: IArticlePreview) => (
  <Link href={link}>
    <a className={styles.slide}>
      <img src={image} className={styles.image} alt={title} />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.text}>{text}</p>
    </a>
  </Link>
);

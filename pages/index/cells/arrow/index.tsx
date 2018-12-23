import React from 'react';
import styles from './slide.scss';
import { IArticlePreview } from '../../../../types/article';
import Link from 'next/link';

export default ({ image, link, invert, title }: IArticlePreview) => (
  <Link href={link}>
    <a className={styles.slide}>
      <img src={image} className={invert ? styles.invert : styles.image} alt={title} />
    </a>
  </Link>
);

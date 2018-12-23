import React from 'react';
import styles from './slide.scss';
import Link from 'next/link';
import { IArticlePreview } from '../../../../types/article';
import Plus from '../../plus/index';

export default ({ image, title, text, link, number, invert }: IArticlePreview) => (
  <Link href={link}>
    <a className={invert ? styles.invert : styles.slide}>
      <div className={styles.wrapper}>
        {number && <div className={styles.number}>{number}</div>}
        {image && <img src={image} className={styles.image} alt={title} />}
        {title && <h1 className={styles.title}>{title}</h1>}
        {text && <p className={styles.text}>{text}</p>}
        <Plus />
      </div>
    </a>
  </Link>
);

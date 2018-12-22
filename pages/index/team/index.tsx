import React from 'react';
import styles from './team.scss';
import image from '../../../static/landing/team.jpg'

export default () => (
  <section className={styles.team}>
    <img src={image} className={styles.image} alt=""/>
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Team</h1>
      <p className={styles.text}>A team comprises a group of people or animals linked in a common purpose.</p>
    </div>
  </section>
);

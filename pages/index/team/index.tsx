import React from 'react';
import styles from './team.scss';

export default () => (
  <section className={styles.team}>
    <img src="/static/landing/team.jpg" className={styles.image} alt="Team" />
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Team</h1>
      <p className={styles.text}>A team comprises a group of people or animals linked in a common purpose.</p>
    </div>
  </section>
);

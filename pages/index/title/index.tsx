import React from 'react';
import styles from './title.scss';
import Plus from '../plus/index';

interface Props {
  title: string;
  modification?: string;
}

function getClassName(name?: string): string {
  switch (name) {
    case 'projects':
      return styles.projects;
    case 'events':
      return styles.events;
    case 'meeting':
      return styles.meeting;
    default:
      return styles.body;
  }
}

export default ({ title, modification }: Props) => (
  <section className={styles.title}>
    <h2 className={getClassName(modification)}>
      <div className={styles.text}>{title}</div> <Plus />
    </h2>
  </section>
);

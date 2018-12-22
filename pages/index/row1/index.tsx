import React from 'react';
import styles from './row.scss';
import LargeSlide from './large/index';
import MiddleSlide from './middle/index';

const slides = [
  {
    id: 0,
    link: '/about',
    image: require('../../../static/landing/image1.png'),
    title: 'Awesome design. Great code. Crazy team.',
    text:
      "We have the experience, team and process to bring ideas from concept to launch and beyond. Since our founding in 2009, we've launched over 25 new products.",
  },
  {
    id: 1,
    link: '/about',
    title: 'Development',
    text: 'Check out the timeline and be happy, dude.',
  },
  {
    id: 2,
    image: require('../../../static/landing/image2.jpg'),
    link: '/about',
    title: 'Design',
    text: 'Check out the timeline and be happy, dude.',
  },
  {
    id: 3,
    image: require('../../../static/landing/image3.jpg'),
    link: '/about',
    title: 'Work',
    text: 'Check out the timeline and be happy, dude.',
  },
];

export default () => (
  <section className={styles.row}>
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.item1}>
          <LargeSlide {...slides[0]} />
        </div>
        <div className={styles.item2}>
          <MiddleSlide {...slides[1]} />
        </div>
        <div className={styles.item3}>
          <MiddleSlide {...slides[2]} />
        </div>
        <div className={styles.item4}>
          <MiddleSlide {...slides[3]} />
        </div>
      </div>
    </div>
  </section>
);

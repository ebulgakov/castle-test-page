import React from 'react';
import styles from './footer.scss';
import Marker from './marker.svg';
import Twitter from '../header/twitter.svg';
import Facebook from '../header/facebook.svg';

export default () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.contacts}>
        <Marker className={styles.marker} />
        <div className={styles.tel}>
          <a href="tel:+18664983588">+1 866 498 3588</a>
        </div>
        <div className={styles.email}>
          <a href="mailto: hello@cloudcastlegroup.com">hello@cloudcastlegroup.com</a>
        </div>

        <div className={styles.socials}>
          <a href="#" className={styles.social}>
            <Twitter width={20} height={20} />
          </a>
          <a href="#" className={styles.social}>
            <Facebook width={17} height={17} />
          </a>
        </div>
      </div>

      {[
        {
          id: 0,
          city: 'New York, NW',
          address1: '37 W 20th st. ',
          address2: 'Suite 1004',
          address3: 'New Work, NY 10011',
        },
        {
          id: 1,
          city: 'Charlotte, NC',
          address1: '2820 Selwyn Ave.',
          address2: 'Suite 325',
          address3: 'Charlotte, NC 28209',
        },
        {
          id: 2,
          city: 'Samara, Russia',
          address1: 'Moskovskoe Hw. 4A,',
          address2: 'bld 2, office 163',
          address3: '+7 (846) 342 6826',
        },
      ].map((item) => (
        <div className={styles.address} key={item.id}>
          <div className={styles.city}>{item.city}</div>
          {item.address1}
          <br />
          {item.address2}
          <br />
          {item.address3}
        </div>
      ))}
    </div>
  </footer>
);

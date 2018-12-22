import React from 'react';
import Link from 'next/link';
import Menu from './menu/index';
import styles from './header.scss';
import Logo from '../../static/logo.svg';
import Twitter from '../../static/icons/twitter.svg';
import Facebook from '../../static/icons/facebook.svg';

export default class extends React.Component {
  render() {
    return (
      <header className={styles.static}>
        <div className={styles.runner}>
          <div className={styles.container}>
            <Link href="/">
              <a className={styles.logo}>
                <Logo role="button" />
              </a>
            </Link>
            <Menu />

            <Link href="/">
              <a className={styles.social}><Twitter width={18} height={18} /></a>
            </Link>
            <Link href="/">
              <a className={styles.social}><Facebook width={10} height={16} /></a>
            </Link>
            <Link href="/">
              <a className={styles.language}>ru</a>
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

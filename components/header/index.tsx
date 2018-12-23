import React from 'react';
import Link from 'next/link';
import Menu from './menu/index';
import styles from './header.scss';
import Logo from './logo.svg';
import Twitter from './twitter.svg';
import Facebook from './facebook.svg';

export default class extends React.Component {
  state = {
    scroll: false,
  };
  scrollHeader = () => {
    const offsetTop = window.pageYOffset ? window.pageYOffset : document.documentElement!.scrollTop;

    this.setState({
      scroll: offsetTop > 0,
    });
  };
  componentDidMount() {
    this.scrollHeader();
    window.addEventListener('scroll', this.scrollHeader);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHeader);
  }
  render() {
    return (
      <header className={styles.static}>
        <div className={this.state.scroll ? styles.invert : styles.normal}>
          <div className={styles.container}>
            <Link href="/">
              <a className={styles.logo}>
                <Logo role="button" />
              </a>
            </Link>
            <Menu />

            <Link href="/">
              <a className={styles.social}>
                <Twitter width={18} height={18} />
              </a>
            </Link>
            <Link href="/">
              <a className={styles.social}>
                <Facebook width={10} height={16} />
              </a>
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

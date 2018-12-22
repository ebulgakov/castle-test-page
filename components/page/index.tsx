import React, { ReactNode } from 'react';
import '../../styles/global.scss';
import styles from './styles.scss';

import Header from '../header/index';
import Footer from '../footer/index';

interface Props {
  children: ReactNode;
}

const Index = ({ children }: Props) => (
  <div className={styles.page}>
    <div className={styles.body}>
      <Header />
      {children}
      <div className={styles.indent} />
    </div>
    <div className={styles.footer}>
      <Footer />
    </div>
  </div>
);

export default Index;

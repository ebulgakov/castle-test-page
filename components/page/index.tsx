import React, { ReactNode } from 'react';
import '../../styles/global.scss';
import styles from './styles.scss';

import Header from '../header/index';

interface Props {
  children: ReactNode;
}

const Index = ({ children }: Props) => (
  <div className={styles.page}>
    <Header />
    {children}
  </div>
);

export default Index;

import React, { ReactNode } from 'react';
import Head from 'next/head';
import '../../styles/scaffolding.scss';

import styles from './styles.scss';

import Header from '../header/index';
import Footer from '../footer/index';

interface Props {
  children: ReactNode;
}

const page = ({ children }: Props) => (
  <div className={styles.page}>
    <Head>
      <title>Castle test page</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400" rel="stylesheet" />
    </Head>
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

export default page;

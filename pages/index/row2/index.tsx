import React from 'react';
import styles from './row.scss';
import MiddleSlide from '../cells/middle/index';
import Arrow from '../cells/arrow/index';
import Name from '../cells/name/index';
import Article from '../cells/article/index';
import {IArticlePreview} from "../../../types/article";

interface Props {
  slides: IArticlePreview[];
}
export default ({ slides }: Props) => (
  <section className={styles.row}>
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.grid}>
          <div className={styles.item1}>
            <Arrow {...slides[0]} />
          </div>
          <div className={styles.item2}>
            <Name {...slides[1]} />
          </div>
          <div className={styles.item3}>
            <MiddleSlide {...slides[2]} />
          </div>
          <div className={styles.item4}>
            <Article {...slides[3]} />
          </div>
        </div>
      </div>
    </div>
  </section>
);


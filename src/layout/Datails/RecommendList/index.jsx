import { Divider, Tag } from 'antd';
import { useState } from 'react';
import styles from './index.module.less';

export default function SmallLabel(props) {
  console.log(props);
  return (
    <div>
      <div className={styles.unscrambleContent}>
        <ul>
          <li>
            <div className={styles.unscrambleList}>发展改革委商务部令2021年第47号外商投资准入特别管理措施（负面清单）2021年版</div>
            <div className={styles.unscrambleTime}>
              <span>2021-07-23</span>
              <span className={styles.unCompany}>
                发布单位
                <span>北京商务厅</span>
              </span>
            </div>
          </li>
          <li>
            <div className={styles.unscrambleList}>发展改革委商务部令2021年第47号外商投资准入特别管理措施（负面清单）2021年版</div>
            <div className={styles.unscrambleTime}>
              <span>2021-07-23</span>
              <span className={styles.unCompany}>
                发布单位
                <span>北京商务厅</span>
              </span>
            </div>
          </li>
          <li>
            <div className={styles.unscrambleList}>发展改革委商务部令2021年第47号外商投资准入特别管理措施（负面清单）2021年版</div>
            <div className={styles.unscrambleTime}>
              <span>2021-07-23</span>
              <span className={styles.unCompany}>
                发布单位
                <span>北京商务厅</span>
              </span>
            </div>
          </li>
          <li>
            <div className={styles.unscrambleList}>发展改革委商务部令2021年第47号外商投资准入特别管理措施（负面清单）2021年版</div>
            <div className={styles.unscrambleTime}>
              <span>2021-07-23</span>
              <span className={styles.unCompany}>
                发布单位
                <span>北京商务厅</span>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

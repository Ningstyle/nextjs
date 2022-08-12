/* eslint-disable react/jsx-closing-tag-location */
import { useState } from 'react';
import { Tag } from 'antd';
import styles from './index.module.less';

export default function PolicyRecommendationList(props) {
  const { policyList } = props;
  const [colorList] = useState(['#007DE7', '#00B572', '#FC5D5D', '#FC5D5D']);
  return (
    <div className={styles.tagBox}>
      {
        policyList.map((item, index) => <div className={item.data.length > 0 ? styles.havaBorder : styles.noBorder} key={index}>
          <div>
            {item.msg}
          </div>
          <div className={styles.tagInfoBox}>
            <div>
              {
                item.data.length ? item.data.map((v, idx) => <Tag key={idx} color={colorList[idx]}>{v}</Tag>) : null

              }
            </div>
            <div className={styles.rightInfo}>
              <span>{item.time}</span>
              <span>{item.qy}</span>
            </div>
          </div>
        </div>)
      }
    </div>
  );
}

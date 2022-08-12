/* eslint-disable react/jsx-closing-tag-location */
import { Tag } from 'antd';
import { useState } from 'react';
import styles from './index.module.less';

export default function NewsDynamicList(props) {
  const { newsList } = props;
  const [colorLIst] = useState(['#007DE7', '#00B572', '#FC5D5D', '#FC5D5D']);
  return (
    <div className={styles.NewsDynamicListBox}>
      {
        newsList.map((item, index) => <div key={index} className={index === 10 ? styles.noBorder : styles.newListItem}>
          <div className={styles.itemTopInfo}>
            <div>
              <div>{item.tit}</div>
              <div className={styles.tagListBox}>
                {item.tagList.map((v, idx) => <Tag key={idx} color={colorLIst[idx]}>{v}</Tag>)}
              </div>
            </div>
            <div className={styles.itemRightInfo}>
              <span>{item.time}</span>
              <span>{item.qy}</span>
            </div>
          </div>
          <div className={styles.abstract}>
            <div>
              <Tag color="#007DE7">摘要</Tag>
            </div>
            <p>{item.abstract}</p>
          </div>
        </div>)
      }
    </div>
  );
}

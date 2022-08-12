/* eslint-disable react/jsx-closing-tag-location */
import { Tag } from 'antd';
import { useState } from 'react';
import styles from './index.module.less';

export default function EnterpriseTag(props) {
  const [colorList] = useState(['#007DE7', '#00B572', '#F88C6B', '#FC5D5D', '#DC69AD']);
  const { industrType } = props;
  return (
    <div>
      {
        industrType.map((item, index) => <div key={index} className={styles.itemLabel}>
          <span className={styles.tagLabel}>{item.title}</span>
          {
            item.data.map((v, idx) => <Tag key={idx} color={colorList[index]}>{v}</Tag>)
          }
        </div>)
      }
    </div>
  );
}

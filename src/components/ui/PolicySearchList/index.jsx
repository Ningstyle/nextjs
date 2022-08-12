/* eslint-disable react/jsx-closing-tag-location */
import { Tag } from 'antd';
import styles from './index.module.less';

export default function PolicySearchList(props) {
  const { policyList, colorList } = props;
  return (
    <div className={styles.listBox}>
      {
        policyList.map((item, index) => <div key={index} className={styles.listItem}>
          <div className={styles.topInfo}>
            <div className={styles.leftInfo}>
              <span>{item.name}</span>
              <div className={styles.scoreBox}>
                <span>企业评分</span>
                <span>96.24分</span>
              </div>
            </div>
            <div className={styles.rightInfo}>
              <div>{item.time}</div>
              <div>
                <span>发布单位</span>
                {item.company}
              </div>
            </div>
          </div>
          <div className={styles.labelBox}>
            {
              item.data.map((v, idx) => <Tag color={colorList[idx]} key={idx}>{v}</Tag>)
            }
          </div>
          <div />
        </div>)
      }
    </div>
  );
}

/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-closing-tag-location */
import { Divider } from 'antd';
import styles from './index.module.less';
import imgUrl from '../../../assets/images/itemIocn.png';

export default function ReporList(props) {
  const { listData } = props;
  return (
    <div>
      <div className={styles.countentList}>
        {
          listData.map((item, index) => <div key={index} className={styles.countItem}>
            <div className={styles.topInfo}>
              <img src={imgUrl.src} alt="" />
              <div className={styles.itemTit}>{item.msg}</div>
              <div className={styles.labelName}>行业研报</div>
            </div>
            <div className={styles.rightInfo}>
              <div>2022-06-01 12:44</div>
              <div>
                <span>发布单位：</span>
                {item.source}
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
}

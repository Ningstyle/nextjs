/* eslint-disable react/jsx-closing-tag-location */
import styles from './index.module.less';

export default function Sentiment(props) {
  const { listData } = props;
  return (
    <div>
      <div className={styles.listBox}>
        {
          listData.map((item, index) => <div className={styles.listItem} key={index}>
            <div className={styles.topInfo}>
              <div className={styles.leftInfo}>
                <span>{item.msg}</span>
                <span>{item.name}</span>
              </div>
              <div className={styles.rightINfo}>
                <span>{item.time}</span>
                <div>
                  发布单位：
                  <span>{item.dw}</span>
                </div>
              </div>
            </div>
            <div className={styles.bottomInfo}>
              <span>摘要</span>
              <span>{item.zy}</span>
            </div>
          </div>)
        }
      </div>
    </div>
  );
}

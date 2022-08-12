import { Tag } from 'antd';
import styles from './index.module.less';

export default function PolicyList(props) {
  const { policyData } = props;
  return (
    <div className={styles.PolicyListBox}>
      {
        policyData.map((item, index) => (
          <div className={styles.policyListItem} key={index}>
            <div className={styles.innerTitle}>
              <div className={styles.policyTitle}>{item.title}</div>
            </div>
            <div className={styles.tagsBox}>
              {
                item.tags.map((v, i) => <Tag color="blue" key={i}>{v.label}</Tag>)
              }

            </div>
            <div className={styles.policyItem}>
              <div className={styles.label}>发布日期：</div>
              <div className={styles.value}>{item.publishTime}</div>
            </div>
            <div className={styles.policyItem}>
              <div className={styles.label}>发文单位：</div>
              <div className={styles.value}>{item.publishCompany}</div>
            </div>
            <div className={styles.policyItem}>
              <div className={styles.label}>申报时间：</div>
              <div className={styles.value}>{item.declareTime}</div>
            </div>
            <div className={styles.policyItem}>
              <div className={styles.label}>扶持资金：</div>
              <div className={styles.value}>{item.money}</div>
            </div>
            <div className={styles.policyStatus}>
              <span className={styles.pipei}>匹配度：高</span>
              <span className={styles.ploicySb}>申报期内</span>
            </div>
          </div>
        ))
      }

    </div>
  );
}

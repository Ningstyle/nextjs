import { useState } from 'react';
import styles from './index.module.less';

export default function PolicyMain(props) {
  const { children, policyTabClick, tabIndex } = props;
  const [tabList] = useState([
    { name: '政策匹配', id: 1, path: '/policy/policyMatching' },
    { name: '政策检索', id: 2, path: '/policy/policySearch' },
    { name: '申报推荐', id: 3, path: '/policy/recommend' },
    { name: '政策申报', id: 4, path: '/policy/policyDeclare' },
  ]);
  const [activeIndex, setActiveIndex] = useState(tabIndex || 0);
  const handleClick = (item, index) => {
    setActiveIndex(index);
    policyTabClick(item, index);
  };
  return (
    <div className={styles.policyMain}>
      <div className={styles.policyBannerArea}>
        <div className={styles.policyContent}>
          <p />
        </div>
        <div className={styles.policyTabBox}>
          <div className={styles.policyTabItem}>
            {
              tabList.map((item, index) => <span key={index} className={activeIndex === index ? styles.activeSpan : ''} onClick={() => handleClick(item, index)}>{item.name}</span>)
            }
          </div>

        </div>
      </div>
      <div className={styles.policyManBox}>{children}</div>
    </div>
  );
}

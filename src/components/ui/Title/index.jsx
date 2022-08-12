import React from 'react';
import styles from './index.module.less';

function Title({ children }) {
  return (
    <div className={styles.titleMain}>
      {children}
    </div>
  );
}

export default Title;

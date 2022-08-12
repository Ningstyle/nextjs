import React from 'react';
import styles from './index.module.less';

function LargeScreen({
  children,
}) {
  return (
    <div className={styles.screen}>
      {children}
    </div>
  );
}

export default LargeScreen;

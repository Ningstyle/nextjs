import { Pagination } from 'antd';
import styles from './index.module.less';

export default function PageFull(props) {
  const { pageChange, current, total, showTotal } = props;
  const changeCurrent = (page, pageSize) => {
    pageChange(page, pageSize);
  };
  return (
    <div className={styles.PageFull}>
      <Pagination
        showQuickJumper
        showSizeChanger
        defaultCurrent={current || 1}
        total={total}
        showTotal={() => showTotal}
        onChange={changeCurrent}
      />
    </div>
  );
}

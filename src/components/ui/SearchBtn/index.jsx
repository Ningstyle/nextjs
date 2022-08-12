// eslint-disable-next-line no-unused-vars
import { Button } from 'antd';
import styles from './index.module.less';

export default function SearchBtn(props) {
  const { handelSearch, handelReset } = props;
  const onReset = () => {
    handelReset();
  };
  const onSearch = () => {
    handelSearch();
  };
  return (
    <div className={styles.searchBtnBox}>
      <Button type="primary" onClick={onSearch}>搜索</Button>
      <Button htmlType="button" onClick={onReset}>重置</Button>
    </div>
  );
}

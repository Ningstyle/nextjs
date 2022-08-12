/* eslint-disable max-len */
import { Input } from 'antd';
import styles from './index.module.less';

const { Search } = Input;
export default function SearchCom(props) {
  const { placeholder, enterButton, size, allowClear, onSearch, loading } = props;
  // 点击
  const btnClick = (value) => {
    onSearch(value);
  };
  // 回车
  const onPressEnter = (e) => {
    onSearch(e.target.value);
  };
  return (
    <div className={styles.searchComBox}>
      <Search placeholder={placeholder || '请输入搜索内容'} enterButton={enterButton || '搜索'} size={size || 'large'} allowClear={allowClear || false} loading={loading || false} style={{ marginTop: '18px' }} onSearch={btnClick} onPressEnter={onPressEnter} />
    </div>
  );
}

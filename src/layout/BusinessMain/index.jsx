/* eslint-disable max-len */
// 企业导航
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import styles from './index.module.less';

export default function Main(props) {
  const { children, indexKey, customClass, type } = props;
  return (
    <div>
      <Header selectKey={indexKey} type={type || 'EnterPriseBasicHeader'} />
      <main className={customClass || (type === 'EnterPriseBasicHeader' || type === 'GovernmentHeader' ? styles.basicMain : styles.main)}>
        <div className={styles.mainHeader}>{children}</div>
      </main>
      <Footer>页面底部</Footer>
    </div>
  );
}

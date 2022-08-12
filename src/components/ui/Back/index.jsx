import { useRouter } from 'next/router';
import styles from './index.module.less';

export default function Back({ children, handleBack }) {
  const router = useRouter();
  // 返回上一页
  const goBack = () => {
    // eslint-disable-next-line no-unused-expressions
    handleBack === undefined ? router.back() : handleBack();
  };
  return (
    <div className={styles.back}>
      <span onClick={goBack}>{children}</span>
    </div>
  );
}

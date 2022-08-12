import styles from '../styles/home.module.less';
import EnterPriseHome from './enterprise';
import GovernmentHome from './government';

export default function Home() {
  return (
    <div className={styles.container}>
      <EnterPriseHome />
    </div>
  );
}

import Main from '../layout/BusinessMain';
import styles from '../styles/usercenter.module.less';
import UsercenterTopNav from '../components/ui/UsercenterTopNav';

export default function Home() {
  return (
    <div>
      <Main type="GovernmentHeader">
        <div className={styles.topNavBox}>
          <UsercenterTopNav />
        </div>
      </Main>

    </div>
  );
}

import styles from './index.module.less';

export default function DetailsTit(props) {
  const { title } = props;
  return (
    <div>
      <div className={styles.inforItemTit}>
        <span />
        {title}
      </div>
    </div>
  );
}

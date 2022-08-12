/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-one-expression-per-line */
import styles from './index.module.less';
import imgUrl from '../../../assets/images/user.png';

export default function UsercenterTopNav() {
  return (
    <div className={styles.userInfoBox}>
      <div className={styles.leftInfo}>
        <div className={styles.imgBox}>
          <img src={imgUrl.src} alt="" />
        </div>
        <div className={styles.enterprisName}>
          <div>企业名称：<span>文化有限公司</span></div>
          <div>用户名称：<span>有文化</span></div>
        </div>
        <div className={styles.enterpriseInfo}>
          <div>企业认证：<span>已认证</span><span>修改</span></div>
          <div>手机号码：<span>190****0987</span><span>修改</span></div>
        </div>
        <div>
          <span>企业评分</span>
          <span>99.99分</span>
        </div>
        {/* <div className={styles.enterpriseInfo}>
          <div className={styles.enterprise}>
            <div className={styles.enterprisName}>
              <div> 企业名称：文化有限公司</div>
              <div>企业认证：已认证</div>
              <span>修改</span>
            </div>
            <div className={styles.userName}>
              <div> 用户名称：文化有限公司</div>
              <div>手机号码：190****0987</div>
              <span>修改</span>
            </div>
          </div>
        </div> */}
        <div />
      </div>
      <div />
    </div>
  );
}

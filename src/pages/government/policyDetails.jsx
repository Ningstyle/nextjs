// 企业搜索

// import { Input } from 'antd';
import { Divider, Tag } from 'antd';
import Main from '../../layout/BusinessMain';
import styles from '../../styles/government/policyDetails.module.less';
import Abstract from '../../layout/Datails/Abstract';
import RecommendList from '../../layout/Datails/RecommendList';
import SeeInput from '../../layout/Datails/SeeInput';
import Back from '../../components/ui/Back';

// const { Search } = Input;
const title = '发展改革委商务部令2021年第47号外商投资准入特别管理措施（负面清单）2021年版';
const batchNumber = '通政办发（2008）2号';
export default function Home() {
  return (
    <div>
      <Main type="GovernmentHeader">
        <Back>返回上一页</Back>
        {/* 返回上一页按钮 */}
        {/* <div className={styles.explainReture}>
          政策详情
        </div> */}
        <div className={styles.policyContent}>
          {/* 详情页标题 */}
          <div className={styles.title}>
            {title}
          </div>
          {/* 批号 */}
          <div className={styles.batchNumber}>
            {batchNumber}
          </div>
          {/* 小标签 */}
          <div className={styles.lableContent}>
            <Tag color="magenta">合成纤维</Tag>
            <Tag color="red">red</Tag>
            <Tag color="volcano">volcano</Tag>
            <Tag color="orange">orange</Tag>
            <Tag color="gold">gold</Tag>
            <Tag color="lime">lime</Tag>
            <Tag color="green">green</Tag>
            <Tag color="cyan">cyan</Tag>
            <Tag color="blue">blue</Tag>
            <Tag color="geekblue">geekblue</Tag>
            <Tag color="purple">purple</Tag>
          </div>
          <div>
            <SeeInput />
          </div>
          <div>
            <Abstract />
          </div>
        </div>
        <div className={styles.policyUnscramble}>
          <div className={styles.unscrambleTitle}>
            <span className={styles.active}>相似政策推荐</span>
            <span>政策解读</span>
          </div>
          <div>
            <RecommendList />
          </div>
        </div>
      </Main>
    </div>
  );
}

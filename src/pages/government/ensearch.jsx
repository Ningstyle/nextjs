// 企业搜索

import { useRouter } from 'next/router';
import Main from '../../layout/BusinessMain';
import styles from '../../styles/government/ensearch.module.less';
import EnterPriseSearchForm from '../../layout/EnterPriseForm';
import EnList from '../../components/ui/EnList';
// eslint-disable-next-line import/no-named-as-default
import PageFull from '../../components/ui/Pagination';
import Title from '../../components/ui/Title';
import SearchCom from '../../components/ui/Search';

export default function Home() {
  const router = useRouter();
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const changeCurrent = (page, pageSize) => {
    console.log('222222', page, pageSize);
  };
  // 搜索事件
  const onSearch = (value) => {
    console.log(value);
  };
  // 列表点击事件
  const itemClick = (item, index) => {
    router.push(`/government/enterpriseDetail?id=${item.id}`);
  };
  const options = [
    {
      value: 'zhejiang',
      label: '浙江',
      children: [
        {
          value: 'hangzhou',
          label: '杭州',
          children: [
            {
              value: 'xihu',
              label: '西湖',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: '江苏',
      children: [
        {
          value: 'nanjing',
          label: '南京',
          children: [
            {
              value: 'zhonghuamen',
              label: '中华门',
            },
          ],
        },
      ],
    },
  ];
  const treeData = [
    {
      title: 'Node1',
      value: '0-0',
      children: [
        {
          title: 'Child Node1',
          value: '0-0-1',
        },
        {
          title: 'Child Node2',
          value: '0-0-2',
        },
      ],
    },
    {
      title: 'Node2',
      value: '0-1',
    },
  ];
  const statusOptions = [
    {
      value: '不限',
      label: '不限',
    },
    {
      value: '存续（在营、开业、在册）',
      label: '存续（在营、开业、在册）',
    },
    {
      value: '吊销',
      label: '吊销',
    },
    {
      value: '未注销',
      label: '未注销',
    },
  ];
  const tagList = [
    {
      value: '不限',
      label: '不限',
      select: true,
    },
    {
      value: '上市',
      label: '上市',
      select: false,
    },
    {
      value: '专精特新',
      label: '专精特新',
      select: false,
    },
    {
      value: '高新技术',
      label: '高新技术',
      select: false,
    },
    {
      value: '单项冠军',
      label: '单项冠军',
      select: false,
    },
    {
      value: '科技型中小企业',
      label: '科技型中小企业',
      select: false,
    },
    {
      value: '独角兽',
      label: '独角兽',
      select: false,
    },
    {
      value: '隐形冠军',
      label: '隐形冠军',
      select: false,
    },
    {
      value: '上市',
      label: '上市',
      select: false,
    },
    {
      value: '专精特新',
      label: '专精特新',
      select: false,
    },
    {
      value: '高新技术',
      label: '高新技术',
      select: false,
    },
    {
      value: '单项冠军',
      label: '单项冠军',
      select: false,
    },
    {
      value: '单项冠军',
      label: '单项冠军',
      select: false,
    },
    {
      value: '独角兽',
      label: '独角兽',
      select: false,
    },
    {
      value: '隐形冠军',
      label: '隐形冠军',
      select: false,
    },
  ];
  const result = [
    {
      name: '企业名称',
      timeVal: '2022-08-06',
      price: '1000',
      status: '续存',
      id: 1,
      address: '陕西省西安市，长安区南里王村',
      data: [
        { name: '试点示范', type: 1 },
        { name: '资质认证', type: 2 },
        { name: '融资阶段', type: 3 },
        { name: '获奖情况', type: 4 },
        { name: '产业情况', type: 5 },
      ],
    },
    {
      name: '企业名称',
      timeVal: '2022-08-06',
      price: '1000',
      status: '续存',
      id: 1,
      address: '陕西省西安市，长安区南里王村',
      data: [
        { name: '试点示范', type: 1 },
        { name: '资质认证', type: 2 },
        { name: '融资阶段', type: 3 },
        { name: '获奖情况', type: 4 },
        { name: '产业情况', type: 5 },
      ],
    },
    {
      name: '企业名称',
      timeVal: '2022-08-06',
      price: '1000',
      status: '续存',
      id: 1,
      address: '陕西省西安市，长安区南里王村',
      data: [
        { name: '试点示范', type: 1 },
        { name: '资质认证', type: 2 },
        { name: '融资阶段', type: 3 },
        { name: '获奖情况', type: 4 },
        { name: '产业情况', type: 5 },
      ],
    },
    {
      name: '企业名称',
      timeVal: '2022-08-06',
      price: '1000',
      status: '续存',
      id: 1,
      address: '陕西省西安市，长安区南里王村',
      data: [
        { name: '试点示范', type: 1 },
        { name: '资质认证', type: 2 },
        { name: '融资阶段', type: 3 },
        { name: '获奖情况', type: 4 },
        { name: '产业情况', type: 5 },
      ],
    },
    {
      name: '企业名称',
      timeVal: '2022-08-06',
      price: '1000',
      status: '续存',
      id: 1,
      address: '陕西省西安市，长安区南里王村',
      data: [
        { name: '试点示范', type: 1 },
        { name: '资质认证', type: 2 },
        { name: '融资阶段', type: 3 },
        { name: '获奖情况', type: 4 },
        { name: '产业情况', type: 5 },
      ],
    },
  ];
  return (
    <div>
      <Main indexKey="1" type="GovernmentHeader">
        <div className={styles.enterPriseSearchMainBox}>
          <div className={styles.searchInner}>
            <Title>企业搜索</Title>
            <SearchCom placeholder="请输入企业名称" allowClear onSearch={onSearch} loading={false} />
          </div>
          <div className={styles.formBlock} >
            <EnterPriseSearchForm finish={onFinish} regionOptions={options} industryOptions={treeData} comStatusOptions={statusOptions} tagList={tagList} />
          </div>
        </div>
        <EnList result={result} itemClick={itemClick} />
        <PageFull pageChange={changeCurrent} total={100} showTotal="总共有100条数据" />
      </Main>
    </div>
  );
}

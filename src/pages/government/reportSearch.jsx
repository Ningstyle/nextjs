/* eslint-disable import/no-unresolved */
import { Input } from 'antd';
import { useState } from 'react';
import Main from '../../layout/BusinessMain';
import styles from '../../styles/government/reportSearch.module.less';
import ReportList from '../../components/ui/ReportList';
import Title from '../../components/ui/Title';
import SortTag from '../../components/ui/SortTag';
import PageFull from '../../components/ui/Pagination';
import SelectTag from '../../components/ui/SelectTag';
import SearchCom from '../../components/ui/Search';
import SearchBtn from '../../components/ui/SearchBtn';

const { Search } = Input;
export default function Home() {
  // 筛选下面的搜索按钮的点击事件
  const handelSearch = () => {
    console.log('搜索按钮的点击事件');
  };
  // 筛选下面的重置按钮的点击事件
  const handelReset = () => {
    console.log('重置按钮的点击事件');
  };
  // 筛选的事件
  const changeTag = (value) => {
    console.log(value);
  };
  // 搜索的事件
  const onSearch = (e) => {
    console.log(e);
  };
  const [current] = useState(1);
  const [total] = useState(100);
  // 分页的点击事件
  const pageChange = (e) => {
    console.log(e);
  };
  // 时间筛选的点击事件
  const handlerSort = (e) => {
    console.log(e);
  };
  // 类型
  const [screenType, setScreenType] = useState(['不限', '行业研报', '个股研报', '券商晨报', '宏观研报', '新股研报', '策略研报']);
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
  ];
  // const [screenType] = useState([
  //   { label: '不限', value: '不限' },
  // ]);
  // 时间
  const [timeList, setTimeList] = useState(['不限', '近一周', '近一个月', '近一年', '近三年']);
  // 来源
  const [sourceList, setSource] = useState(['不限']);

  // 列表的数据
  const [listData, setListData] = useState([
    { msg: '雅化集团：认购超锂公司股权，远期锂资源有望实现自给雅化集团：认购超锂公司股权，远期锂资源有望实现自给雅化集团：认购超锂公司股权，远期锂资源有望实现自给雅化集团：认购超锂公司股权，远期锂资源有望实现自给雅化集团：认购超锂公司股权，远期锂资源有望实现自给雅化集团：认购超锂公司股权，远期锂资源有望实现自给', tit: '行业研报', source: '东莞证券股份有限公司', time: '2022-06-01 12:44' },
    { msg: '雅化集团：认购超锂公司股权，远期锂资源有望实现自给雅化集团：认购超锂公司股权，远期锂资源有望实现自给雅化集团：认购超锂公司股权，远期锂资源有望实现自给雅化集团：认购超锂公司股权，远期锂资源有望实现自给雅化集团：认购超锂公司股权，远期锂资源有望实现自给雅化集团：认购超锂公司股权，远期锂资源有望实现自给', tit: '行业研报', source: '东莞证券股份有限公司', time: '2022-06-01 12:44' },
    { msg: '雅化集团：认购超锂公司股权，远期锂资源有望实现自给雅化集团：认购超锂公司股权，远期锂资源有望实现自给雅化集团：认购超锂公司股权，远期锂资源有望实现自给雅化集团：认购超锂公司股权，远期锂资源有望实现自给雅化集团：认购超锂公司股权，远期锂资源有望实现自给雅化集团：认购超锂公司股权，远期锂资源有望实现自给', tit: '行业研报', source: '东莞证券股份有限公司', time: '2022-06-01 12:44' },
    { msg: '雅化集团：认购超锂公司股权，远期锂资源有望实现自给雅化集团：认购超锂公司股权，远期锂资源有望实现自给雅化集团：认购超锂公司股权，远期锂资源有望实现自给雅化集团：认购超锂公司股权，远期锂资源有望实现自给雅化集团：认购超锂公司股权，远期锂资源有望实现自给雅化集团：认购超锂公司股权，远期锂资源有望实现自给', tit: '行业研报', source: '东莞证券股份有限公司', time: '2022-06-01 12:44' },
    { msg: '雅化集团：认购超锂公司股权，远期锂资源有望实现自给雅化集团：认购超锂公司股权，远期锂资源有望实现自给雅化集团：认购超锂公司股权，远期锂资源有望实现自给雅化集团：认购超锂公司股权，远期锂资源有望实现自给雅化集团：认购超锂公司股权，远期锂资源有望实现自给雅化集团：认购超锂公司股权，远期锂资源有望实现自给', tit: '行业研报', source: '东莞证券股份有限公司', time: '2022-06-01 12:44' },
    { msg: '雅化集团：认购超锂公司股权，远期锂资源有望实现自给雅化集团：认购超锂公司股权，远期锂资源有望实现自给雅化集团：认购超锂公司股权，远期锂资源有望实现自给雅化集团：认购超锂公司股权，远期锂资源有望实现自给雅化集团：认购超锂公司股权，远期锂资源有望实现自给雅化集团：认购超锂公司股权，远期锂资源有望实现自给', tit: '行业研报', source: '东莞证券股份有限公司', time: '2022-06-01 12:44' },
  ]);
  const typeClick = (item) => {
    console.log(item);
  };
  return (
    <div>
      <Main type="GovernmentHeader">
        <div className={styles.topInfoBox}>
          {/* 头部的title */}

          <div className={styles.topTit}>
            <Title>研报搜索</Title>
          </div>
          {/* 搜索框 */}
          <div className={styles.searchBox}>
            <SearchCom placeholder="请输入关键词" allowClear onSearch={onSearch} loading={false} />
          </div>
          <div className={styles.screenBox}>
            <div>
              <SelectTag tagList={tagList} title="类型" changeTag={changeTag} />
            </div>
            <div className={styles.havaMargin}>
              <SelectTag tagList={tagList} title="时间" type="radio" changeTag={changeTag} />
            </div>

            <div className={styles.havaMargin}>
              <SelectTag tagList={tagList} title="来源" changeTag={changeTag} />
            </div>
            <div>
              <SearchBtn handelSearch={handelSearch} handelReset={handelReset} />
            </div>
          </div>
        </div>
        {/* 列表 */}
        <div className={styles.reportList}>
          <div className={styles.topInfo}>
            <div>
              为您找到相关结果约
              <span>6845</span>
              条
            </div>
            <div className={styles.timeFiltering}>
              发布日期
              <SortTag handlerSort={handlerSort} />
            </div>
          </div>
          <ReportList listData={listData} />
          <div className={styles.paginationBox}><PageFull pageChange={pageChange} showTotal={`总共 ${total} 个项目`} current={current} total={total} /></div>
        </div>
      </Main >
    </div >
  );
}

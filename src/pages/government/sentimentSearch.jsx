/* eslint-disable import/no-unresolved */
import { Input } from 'antd';
import { useState } from 'react';
import styles from '../../styles/government/sentimentSearch.module.less';
import Main from '../../layout/BusinessMain';
import Sentiment from '../../components/ui/SentimentList';
import Title from '../../components/ui/Title';
import PageFull from '../../components/ui/Pagination';
import SortTag from '../../components/ui/SortTag';
import SearchCom from '../../components/ui/Search';
import SelectTag from '../../components/ui/SelectTag';
import SearchBtn from '../../components/ui/searchBtn';

export default function SentimentSearch() {
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
    console.log(value.filter(item => item.select));
  };
  // 搜索的事件
  const onSearch = (e) => {
    console.log(e);
  };
  const [current] = useState(1);
  const [total] = useState(100);
  // 时间筛选的点击事件
  const handlerSort = (e) => {
    console.log(e);
  };
  // 分页的点击事件
  const pageChange = (e) => {
    console.log(e);
  };
  const { Search } = Input;
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
  // 时间
  const [timeList, setTimeList] = useState(
    [
      { value: '不限', label: '不限', select: true },
      { value: '近一周', label: '近一周', select: false },
      { value: '近一个月', label: '近一个月', select: false },
      { value: '近一年', label: '近一年', select: false },
      { value: '近三年', label: '近三年', select: false },
    ],
  );
  // 来源
  const [sourceList, setSource] = useState([
    { value: '不限', label: '不限', select: true },
    { value: '交易融资', label: '交易融资', select: false },
    { value: '资讯公司', label: '资讯公司', select: false },
    { value: '央级媒体', label: '央级媒体', select: false },
    { value: '政府管网', label: '政府管网', select: false },
    { value: '科技媒体', label: '科技媒体', select: false },
    { value: '综合资讯', label: '综合资讯', select: false },
    { value: '招商网站', label: '招商网站', select: false },
    { value: '行业协会', label: '行业协会', select: false },
    { value: '行业垂直', label: '行业垂直', select: false },
    { value: '财经媒体', label: '财经媒体', select: false },
  ]);
  // 筛选的点击事件
  const typeClick = (item) => {
    console.log(item);
  };
  // 列表的数据
  const [listData, setListData] = useState([
    {
      msg: 'ICASSP 2022  89.46% 检出率，网易云信音频实验室提出全球首个AI啸脚监测方案',
      scrous: '产业生态',
      name: '机器之心',
      time: '2022-06-01',
      dw: '机器之心',
      zy: '位于美国橡树岭国家实验室 (ORNL) 的新型超级计算机 Frontier 以绝对优势拿下第一，算力超过身后468台的总和，成为全球最强超级计算机，同时也是全球首个真正的百亿亿次超级计算的方式开关假道伐虢独守空房几个都是塞德里克分公司的',
    },
    {
      msg: 'ICASSP 2022  89.46% 检出率，网易云信音频实验室提出全球首个AI啸脚监测方案',
      scrous: '产业生态',
      name: '机器之心',
      time: '2022-06-01',
      dw: '机器之心',
      zy: '位于美国橡树岭国家实验室 (ORNL) 的新型超级计算机 Frontier 以绝对优势拿下第一，算力超过身后468台的总和，成为全球最强超级计算机，同时也是全球首个真正的百亿亿次超级计算的方式开关假道伐虢独守空房几个都是塞德里克分公司的',
    },
    {
      msg: 'ICASSP 2022  89.46% 检出率，网易云信音频实验室提出全球首个AI啸脚监测方案',
      scrous: '产业生态',
      name: '机器之心',
      time: '2022-06-01',
      dw: '机器之心',
      zy: '位于美国橡树岭国家实验室 (ORNL) 的新型超级计算机 Frontier 以绝对优势拿下第一，算力超过身后468台的总和，成为全球最强超级计算机，同时也是全球首个真正的百亿亿次超级计算的方式开关假道伐虢独守空房几个都是塞德里克分公司的',
    },
    {
      msg: 'ICASSP 2022  89.46% 检出率，网易云信音频实验室提出全球首个AI啸脚监测方案',
      scrous: '产业生态',
      name: '机器之心',
      time: '2022-06-01',
      dw: '机器之心',
      zy: '位于美国橡树岭国家实验室 (ORNL) 的新型超级计算机 Frontier 以绝对优势拿下第一，算力超过身后468台的总和，成为全球最强超级计算机，同时也是全球首个真正的百亿亿次超级计算的方式开关假道伐虢独守空房几个都是塞德里克分公司的',
    },
    {
      msg: 'ICASSP 2022  89.46% 检出率，网易云信音频实验室提出全球首个AI啸脚监测方案',
      scrous: '产业生态',
      name: '机器之心',
      time: '2022-06-01',
      dw: '机器之心',
      zy: '位于美国橡树岭国家实验室 (ORNL) 的新型超级计算机 Frontier 以绝对优势拿下第一，算力超过身后468台的总和，成为全球最强超级计算机，同时也是全球首个真正的百亿亿次超级计算的方式开关假道伐虢独守空房几个都是塞德里克分公司的',
    },
    {
      msg: 'ICASSP 2022  89.46% 检出率，网易云信音频实验室提出全球首个AI啸脚监测方案',
      scrous: '产业生态',
      name: '机器之心',
      time: '2022-06-01',
      dw: '机器之心',
      zy: '位于美国橡树岭国家实验室 (ORNL) 的新型超级计算机 Frontier 以绝对优势拿下第一，算力超过身后468台的总和，成为全球最强超级计算机，同时也是全球首个真正的百亿亿次超级计算的方式开关假道伐虢独守空房几个都是塞德里克分公司的',
    },
  ]);
  return (
    <div>
      <Main type="GovernmentHeader">
        <div className={styles.topInfoBox}>
          {/* 头部的title */}

          <div className={styles.topTit}>
            <Title>舆情搜索</Title>
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
              <SelectTag tagList={timeList} title="时间" type="radio" changeTag={changeTag} />
            </div>
            <div className={styles.havaMargin}>
              <SelectTag tagList={sourceList} title="来源" changeTag={changeTag} />
            </div>
            <div>
              <SearchBtn handelSearch={handelSearch} handelReset={handelReset} />
            </div>
          </div>
        </div>
        <div className={styles.reportList}>
          <div className={styles.topInfo}>
            <div>
              为您找到相关结果约668个
            </div>
            <div className={styles.timeFiltering}>
              发布日期
              <SortTag handlerSort={handlerSort} />
            </div>
          </div>
          <Sentiment listData={listData} />
          <div className={styles.paginationBox}><PageFull pageChange={pageChange} showTotal={`总共 ${total} 个项目`} current={current} total={total} /></div>
        </div>
      </Main>
    </div>
  );
}

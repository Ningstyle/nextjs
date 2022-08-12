/* eslint-disable import/no-unresolved */
/* eslint-disable no-const-assign */
/* eslint-disable react/jsx-closing-tag-location */
import { useState } from 'react';
import { SyncOutlined } from '@ant-design/icons';
import { Cascader } from 'antd';
import Main from '../../layout/BusinessMain';
import styles from '../../styles/government/policySearch.module.less';
import Title from '../../components/ui/Title';
import SearchCom from '../../components/ui/Search';
import imgUrl from '../../assets/images/hot.png';
import SelectTag from '../../components/ui/SelectTag';
import SearchBtn from '../../components/ui/searchBtn';
import SortTag from '../../components/ui/SortTag';
import PolicySearchList from '../../components/ui/PolicySearchList';
import PageFull from '../../components/ui/Pagination';

export default function PolicySearch() {
  // 热搜榜的，每一项的点击事件
  const hotItemClick = (e) => {
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
  const colorList = ['#DC69AD', '#FC5D5D', '#F88C6B', '#00B572', '#007DE7'];
  // 政策搜索的列表数据
  const [policyList] = useState([
    { name: '浙江科威维稳科技有限公司', time: '2021-07-23', company: '北京商务厅', data: ['试点示范', '资质认证', '融资阶段', '获奖情况', '产业标签'] },
    { name: '浙江科威维稳科技有限公司', time: '2021-07-23', company: '北京商务厅', data: ['试点示范', '资质认证', '融资阶段', '获奖情况', '产业标签'] },
    { name: '浙江科威维稳科技有限公司', time: '2021-07-23', company: '北京商务厅', data: ['试点示范', '资质认证', '融资阶段', '获奖情况', '产业标签'] },
    { name: '浙江科威维稳科技有限公司', time: '2021-07-23', company: '北京商务厅', data: ['试点示范', '资质认证', '融资阶段', '获奖情况', '产业标签'] },
    { name: '浙江科威维稳科技有限公司', time: '2021-07-23', company: '北京商务厅', data: ['试点示范', '资质认证', '融资阶段', '获奖情况', '产业标签'] },
    { name: '浙江科威维稳科技有限公司', time: '2021-07-23', company: '北京商务厅', data: ['试点示范', '资质认证', '融资阶段', '获奖情况', '产业标签'] },
  ]);
  // 支出对象的数据
  const [supportObjects] = useState([
    {
      value: '不限',
      label: '不限',
      select: true,
    },
    {
      value: '资金补贴',
      label: '资金补贴',
      select: false,
    },
    {
      value: '税收优惠',
      label: '税收优惠',
      select: false,
    },
    {
      value: '贷款支持',
      label: '贷款支持',
      select: false,
    },
    {
      value: '数据开放',
      label: '数据开放',
      select: false,
    },
    {
      value: '融资支持',
      label: '融资支持',
      select: false,
    },
    {
      value: '用地补贴',
      label: '用地补贴',
      select: false,
    },
  ]);
  // 支出行为的数据
  const [supportBehavior] = useState([
    {
      value: '不限',
      label: '不限',
      select: true,
    },
    {
      value: '资金补贴',
      label: '资金补贴',
      select: false,
    },
    {
      value: '税收优惠',
      label: '税收优惠',
      select: false,
    },
    {
      value: '贷款支持',
      label: '贷款支持',
      select: false,
    },
    {
      value: '数据开放',
      label: '数据开放',
      select: false,
    },
  ]);
  // 支持方式的数据
  const [supportMode] = useState([
    {
      value: '不限',
      label: '不限',
      select: true,
    },
    {
      value: '补贴',
      label: '补贴',
      select: false,
    },
    {
      value: '税收优惠',
      label: '税收优惠',
      select: false,
    },
    {
      value: '贷款支持',
      label: '贷款支持',
      select: false,
    },
    {
      value: '数据开放',
      label: '数据开放',
      select: false,
    },
    {
      value: '融资支持',
      label: '融资支持',
      select: false,
    },
    {
      value: '用地补贴',
      label: '用地补贴',
      select: false,
    },
    {
      value: '风险补偿',
      label: '风险补偿',
      select: false,
    },
    {
      value: '人才激励',
      label: '人才激励',
      select: false,
    },
    {
      value: '实施方案',
      label: '实施方案',
      select: false,
    },
    {
      value: '实施方案',
      label: '实施方案',
      select: false,
    },
    {
      value: '规划刚要',
      label: '规划刚要',
      select: false,
    },
    {
      value: '评定标准',
      label: '评定标准',
      select: false,
    },
    {
      value: '评定标准',
      label: '评定标准',
      select: false,
    },
    {
      value: '评定标准',
      label: '评定标准',
      select: false,
    },
    {
      value: '评定标准',
      label: '评定标准',
      select: false,
    },
  ]);
  // 政策类型的数据
  const [policy] = useState([
    {
      value: '不限',
      label: '不限',
      select: true,
    },
    {
      value: '法律',
      label: '法律',
      select: false,
    },
    {
      value: '规范条例',
      label: '规范条例',
      select: false,
    },
    {
      value: '部门规章',
      label: '部门规章',
      select: false,
    },
    {
      value: '公告公示',
      label: '公告公示',
      select: false,
    },
    {
      value: '申报通知',
      label: '申报通知',
      select: false,
    },
    {
      value: '实施方案',
      label: '实施方案',
      select: false,
    },
    {
      value: '规划刚要',
      label: '规划刚要',
      select: false,
    },
    {
      value: '评定标准',
      label: '评定标准',
      select: false,
    },
    {
      value: '申报通知',
      label: '申报通知',
      select: false,
    },
    {
      value: '实施方案',
      label: '实施方案',
      select: false,
    },
    {
      value: '规划刚要',
      label: '规划刚要',
      select: false,
    },
    {
      value: '评定标准',
      label: '评定标准',
      select: false,
    },
    {
      value: '评定标准',
      label: '评定标准',
      select: false,
    },
    {
      value: '评定标准',
      label: '评定标准',
      select: false,
    },
    {
      value: '评定标准',
      label: '评定标准',
      select: false,
    },
  ]);
  // 所属产业的数据
  const [industry] = useState([
    {
      value: '不限',
      label: '不限',
      select: true,
    },
    {
      value: '人工智能',
      label: '人工智能',
      select: false,
    },
  ]);
  // 政策级别的数据
  const tagList = [
    {
      value: '不限',
      label: '不限',
      select: true,
    },
    {
      value: '国家',
      label: '国家',
      select: false,
    },
    {
      value: '省级',
      label: '省级',
      select: false,
    },
    {
      value: '市级',
      label: '市级',
      select: false,
    },
    {
      value: '区级',
      label: '区级',
      select: false,
    },
  ];
  // 区域的选择
  const handelChange = (val) => {
    console.log(val);
  };
  const [options] = useState([
    {
      value: '陕西省',
      label: '陕西省',
      children: [
        {
          value: '西安市',
          label: '西安市',
          children: [
            {
              value: '雁塔区',
              label: '雁塔区',
            },
          ],
        },
      ],
    },
    {
      value: '宁夏省',
      label: '宁夏省',
      children: [
        {
          value: '固原市',
          label: '固原市',
          children: [
            {
              value: '彭阳县',
              label: '彭阳县',
            },
          ],
        },
      ],
    },
  ]);
  const [isSpin, setIsSpin] = useState(false);
  // 刷新的点击事件
  const handelRefresh = () => {
    console.log('执行了');
    setIsSpin(true);
  };
  // 搜索的事件
  const onSearch = (e) => {
    console.log(e);
  };
  const [hotList] = useState(['荣誉资质', '创新资质', '产业扶持', '知识产权']);
  return (
    <div>
      <Main type="GovernmentHeader">
        <div className={styles.topInfoBox}>
          {/* 头部的title */}
          <div className={styles.topTit}>
            <Title>政策搜索</Title>
          </div>

          {/* 搜索框 */}
          <div className={styles.searchBox}>
            <SearchCom placeholder="请输入政策关键词" allowClear onSearch={onSearch} loading={false} />
            <div className={styles.hotListBox}>
              <div className={styles.hotLabel}>
                <img src={imgUrl.src} alt="" />
                <span>热搜榜</span>
              </div>
              {/* 热搜列表 */}
              <div className={styles.listBox}>
                {
                  hotList.map((item, index) => <div className={styles.hotItem} key={index} onClick={() => hotItemClick(item)}>
                    {item}
                  </div>)
                }
              </div>
              <div className={styles.refreshBtn} onClick={handelRefresh}>
                <SyncOutlined style={{ fontSize: '16px', color: '#08c' }} spin={isSpin} />
              </div>
            </div>
          </div>
          {/* 筛选区域 */}
          <div className={styles.screenBox}>
            <div className={styles.searchRegion}>
              <span className={styles.searchLabel}>所属区域</span>
              <Cascader className={styles.selectBox} options={options} onChange={handelChange} placeholder="请选择区域" />
            </div>
            <div>
              <div className={styles.havaMargin}>
                <SelectTag tagList={tagList} title="政策级别" type="radio" changeTag={changeTag} />
              </div>
              <div className={styles.havaMargin}>
                <SelectTag tagList={policy} title="政策类型" changeTag={changeTag} />
              </div>
              <div className={styles.havaMargin}>
                <SelectTag tagList={industry} title="所属产业" changeTag={changeTag} />
              </div>
              <div className={styles.havaMargin}>
                <SelectTag tagList={supportBehavior} title="支持行为" changeTag={changeTag} />
              </div>
              <div className={styles.havaMargin}>
                <SelectTag tagList={supportObjects} title="支持对象" changeTag={changeTag} />
              </div>
              <div className={styles.havaMargin}>
                <SelectTag tagList={supportMode} title="支持方式" changeTag={changeTag} />
              </div>
              <div>
                <SearchBtn handelSearch={handelSearch} handelReset={handelReset} />
              </div>
            </div>
          </div>
        </div>
        {/* 列表 */}
        <div className={styles.policyList}>
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
          <PolicySearchList colorList={colorList} policyList={policyList} />
          <div className={styles.paginationBox}>
            <PageFull pageChange={pageChange} current={current} showTotal={`总共 ${total} 个项目`} total={total} />
          </div>
        </div>
      </Main>
    </div>
  );
}

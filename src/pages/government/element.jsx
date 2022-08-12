/* eslint-disable react/jsx-closing-tag-location */
// 产业要素
import { useState } from 'react';
import { Cascader, Table, Modal } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import Main from '../../layout/BusinessMain';
import Back from '../../components/ui/Back';
import styles from '../../styles/government/element.module.less';
import ReactEcharts from '../../lib/echarts-for-react';
import { option7, echartsBarAd, echartsTreemap } from '../../utils/options';
import SelectTag from '../../components/ui/SelectTag';
import PageFull from '../../components/ui/Pagination';
// import MapDom from '../../lib/map';

export default function Home() {
  const [options] = useState([
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ]);
  // 地图顶部切换
  const [switchTab] = useState([
    { title: '区域企业总量', num: 12434334 },
    { title: '区域研究机构总量', num: 124343343 },
    { title: '区域载体空间总量', num: 124343343 },
  ]);
  const [tabIndex, setTabIndex] = useState(0);
  // 表格顶部切换
  const [tableSwitch] = useState([
    { title: '企业', id: 1 },
    { title: '研究机构', id: 2 },
    { title: '产业载体', id: 3 },
  ]);
  const [tableIndex, setTableIndex] = useState(0);
  // 区域选择事件
  const onChange = (value) => {
    console.log(value);
  };
  // 区域分布tab筛选
  const switchClick = (item, index) => {
    setTabIndex(index);
  };
  // modal显示隐藏
  const [visible, setVisible] = useState(false);
  // tag筛选事件
  const changeTag = (values) => {
    console.log(values);
  };
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
  // 分页事件
  const changeCurrent = (page, pageSize) => {
    console.log('222222', page, pageSize);
  };
  const columns = [
    {
      title: '序号',
      dataIndex: 'sort',
      width: 80,
      onFilter: (value, record) => record.name.indexOf(value) === 0,
    },
    {
      title: '企业名称',
      dataIndex: 'name',
    },
    {
      title: '省',
      dataIndex: 'province',
    },
    {
      title: '市',
      dataIndex: 'city',
    },
    {
      title: '区/县',
      dataIndex: 'county',
    },
    {
      title: '所属产业',
      dataIndex: 'industry',
      filters: [
        {
          text: '电子信息',
          value: '电子信息',
        },
        {
          text: '石墨及超硬材',
          value: '石墨及超硬材',
        },
        {
          text: '氢能储能',
          value: '氢能储能',
        },
      ],
      onFilter: (value, record) => record.industry.indexOf(value) === 0,
    },
    {
      title: '标签',
      dataIndex: 'tag',
    },
    {
      title: '注册资本',
      dataIndex: 'capital',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.capital - b.capital,
    },
    {
      title: '企业评分',
      dataIndex: 'score',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.score - b.score,
    },
    {
      title: '详情',
      dataIndex: 'detail',
    },
  ];
  const data = [
    {
      key: '1',
      sort: '1',
      name: '北京百度为无限报科技度为无限报科技有限…',
      province: '浙江省',
      city: '浙江省',
      county: '桐乡市',
      industry: '电子信息',
      tag: '主体上市，高新技术…',
      capital: '29.6万',
      score: '92.12',
      detail: '详情',
    },
    {
      key: '2',
      sort: '2',
      name: '北京百度为无限报科技度为无限报科技有限…',
      province: '浙江省',
      city: '浙江省',
      county: '桐乡市',
      industry: '石墨及超硬材',
      tag: '主体上市，高新技术…',
      capital: '29.6万',
      score: '90.12',
      detail: '详情',
    },
    {
      key: '3',
      sort: '3',
      name: '北京百度为无限报科技度为无限报科技有限…',
      province: '浙江省',
      city: '浙江省',
      county: '桐乡市',
      industry: '氢能储能',
      tag: '主体上市，高新技术…',
      capital: '29.6万',
      score: '91.12',
      detail: '详情',
    },
  ];

  const onChange1 = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  return (
    <Main indexKey="2" type="GovernmentHeader">
      <Back>返回上一页</Back>
      <div className={styles.areaBox}>
        <span className={styles.areaLabel}>区域</span>
        <Cascader options={options} onChange={onChange} placeholder="Please select" />
      </div>
      <div className={styles.elementContent}>
        <div className={styles.contentLeft}>
          <div className={styles.areaTitle}>
            郑州市
            <span>产业要素区域分布</span>
          </div>
          <div className={styles.elementSwitchBox}>
            {
              switchTab.map((item, index) => <div className={tabIndex === index ? styles.switchItem1 : styles.switchItem} key={index} onClick={() => switchClick(item, index)}>
                <span>{item.title}</span>
                <div className={styles.countNum}>
                  {item.num}
                  <span>家</span>
                </div>
              </div>)
            }
          </div>
          <div className={styles.mapbox}>
            {/* <MapDom first alllistData={{}} granularitys="city" areaKey="330400" /> */}
          </div>
        </div>
        <div className={styles.contentRight}>
          <div className={styles.areaTitle}>
            <div className={styles.rightTitle}>
              郑州市
              <span>产业要素区域分布</span>
            </div>
            <span className={styles.more} onClick={() => setVisible(true)}>
              更多
              <RightOutlined />
            </span>
          </div>
          <div className={styles.chartBox}>
            <div>
              <p className={styles.chartTitle}>企业数量</p>
              <ReactEcharts
                option={echartsBarAd({
                  xAxis: [
                    '2017',
                    '2018',
                    '2019',
                    '2020',
                    '2021',
                  ],
                  yAxis: [
                    {
                      stack: '1',
                      name: '往年企业数量',
                      unit: '家',
                      value: [
                        21303,
                        21303,
                        26700,
                        32908,
                        38654,
                      ],
                    },
                    {
                      stack: '1',
                      name: '企业增长数量',
                      unit: '家',
                      value: [
                        0,
                        5397,
                        6208,
                        5746,
                        6712,
                      ],
                    },
                  ],
                  total: [
                    21303,
                    26700,
                    32908,
                    38654,
                    45366,
                  ],
                  yUnit: '家',
                  yName: '企业数量',
                  xName: '年份',
                })}
                notMerge
                lazyUpdate
                style={{ height: '250px' }}
              />
            </div>
            <div>
              <p className={styles.chartTitle}>企业结构</p>
              <ReactEcharts
                option={option7([
                  {
                    name: '全量企业',
                    amount: 48477,
                    proportion: '占嘉兴市全量企业19.23%',
                  },
                  {
                    name: '高技术企业',
                    amount: 498,
                    proportion: '占嘉兴市高技术企业16.69%',
                  },
                  {
                    name: '高成长企业',
                    amount: 28,
                    proportion: '占嘉兴市高成长企业12.17%',
                  },
                  {
                    name: '上市企业',
                    amount: 7,
                    proportion: '占嘉兴市上市企业12.50%',
                  },
                ])}
                notMerge
                lazyUpdate
                style={{ height: '250px' }}
              />
            </div>
            <div>
              <p className={styles.chartTitle}>行业结构</p>
              <ReactEcharts
                option={echartsTreemap([
                  {
                    name: '纺织工业',
                    unit: '个',
                    value: 5550,
                  },
                  {
                    name: '商业服务',
                    unit: '个',
                    value: 4510,
                  },
                  {
                    name: '零售与批发',
                    unit: '个',
                    value: 2943,
                  },
                  {
                    name: '建筑',
                    unit: '个',
                    value: 2863,
                  },
                  {
                    name: '科技服务',
                    unit: '个',
                    value: 2224,
                  },
                  {
                    name: '电子信息',
                    unit: '个',
                    value: 1288,
                  },
                  {
                    name: '仓储运输',
                    unit: '个',
                    value: 1182,
                  },
                  {
                    name: '化工',
                    unit: '个',
                    value: 707,
                  },
                  {
                    name: '服装制鞋',
                    unit: '个',
                    value: 671,
                  },
                  {
                    name: '金融',
                    unit: '个',
                    value: 559,
                  },
                  {
                    name: '大文化',
                    unit: '个',
                    value: 558,
                  },
                  {
                    name: '住宿餐饮',
                    unit: '个',
                    value: 506,
                  },
                  {
                    name: '房地产',
                    unit: '个',
                    value: 447,
                  },
                  {
                    name: '装备工业',
                    unit: '个',
                    value: 432,
                  },
                  {
                    name: '医药',
                    unit: '个',
                    value: 376,
                  },
                  {
                    name: '仪器仪表',
                    unit: '个',
                    value: 287,
                  },
                  {
                    name: '能源',
                    unit: '个',
                    value: 232,
                  },
                  {
                    name: '居民服务',
                    unit: '个',
                    value: 230,
                  },
                  {
                    name: '环保',
                    unit: '个',
                    value: 217,
                  },
                  {
                    name: '公共设施管理',
                    unit: '个',
                    value: 188,
                  },
                  {
                    name: '农业',
                    unit: '个',
                    value: 185,
                  },
                  {
                    name: '非金属矿物',
                    unit: '个',
                    value: 105,
                  },
                  {
                    name: '食品加工业',
                    unit: '个',
                    value: 103,
                  },
                  {
                    name: '医疗服务',
                    unit: '个',
                    value: 94,
                  },
                  {
                    name: '教育',
                    unit: '个',
                    value: 40,
                  },
                  {
                    name: '造纸印刷',
                    unit: '个',
                    value: 32,
                  },
                  {
                    name: '采矿业',
                    unit: '个',
                    value: 19,
                  },
                  {
                    name: '冶金',
                    unit: '个',
                    value: 14,
                  },
                ], '行业结构')}
                notMerge
                lazyUpdate
                style={{ height: '250px' }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tableBox}>
        <div className={styles.tabSwitchBox}>
          {
            tableSwitch.map((item, index) => <span key={index} className={tableIndex === index ? styles.tableSpanActive : ''} onClick={() => { setTableIndex(index); }}>{item.title}</span>)
          }
        </div>
        <SelectTag tagList={tagList} changeTag={changeTag} />
        <Table columns={columns} dataSource={data} onChange={onChange1} pagination={false} />
        <div className={styles.pageFullBox}>
          <PageFull pageChange={changeCurrent} total={100} showTotal="总共有100条数据" />
        </div>
        <Modal
          title="Modal 1000px width"
          centered
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          width={1366}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </div>
    </Main>

  );
}

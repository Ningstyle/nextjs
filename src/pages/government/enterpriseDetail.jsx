/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-closing-tag-location */
import { useState } from 'react';
import { Table } from 'antd';
import dynamic from 'next/dynamic';
import Main from '../../layout/BusinessMain';
import ReactEcharts from '../../lib/echarts-for-react';
import styles from '../../styles/government/enterpriseDetail.module.less';
import leftIcon from '../../assets/images/leftIcon.png';
import EnterpriseTag from '../../components/ui/EnterpriseTag';
import DetailsTit from '../../components/ui/DetailsTit';
import NewsDynamicList from '../../components/ui/NewsDynamicList';
import PolicyRecommendationList from '../../components/ui/policyRecommendation';
import { option1, option2, option3, option4, option5, option6 } from '../../utils/options';
import DataJson from '../../data/data.json';
import Back from '../../components/ui/Back';
import PageFull from '../../components/ui/Pagination';

export default function Home() {
  const [current] = useState(1);
  const [total] = useState(100);
  // 分页的点击事件
  const pageChange = (e) => {
    console.log(e);
  };
  const D3ThroughChart = dynamic(() => import('../../components/charts/DrawThroughChart'), {
    ssr: false,
  });
  const [patentColumns] = useState([
    {
      title: '序号',
      dataIndex: 'title',
      align: 'center',
    },
    {
      title: '专利名称1',
      ellipsis: true,
      dataIndex: 'name',
      align: 'center',
      width: 150,
    },
    {
      title: '专利类型',
      ellipsis: true,
      dataIndex: 'age',
      width: 150,
      align: 'center',
    },
    {
      title: '产业分类',
      ellipsis: true,
      dataIndex: 'address',
      align: 'center',
    },
    {
      title: '授权公告日',
      ellipsis: true,
      dataIndex: 'address',
      align: 'center',
    },
  ]);
  const tableData = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 100; i++) {
    tableData.push({
      title: `${i + 1}`,
      name: '转接结构和可拆卸技术新型小型技术稳固装…',
      age: '实用新型',
      address: '大数据，大装备工艺技…',
    });
  }
  // 专利情况数据
  const [patentData] = useState({
    yAxis: [
      { name: '测试', value: 25, unit: 'dd' },
      { name: '测试', value: 25, unit: 'dd' },
      { name: '测试', value: 25, unit: 'dd' },
      { name: '测试', value: 25, unit: 'dd' },
    ],
    xAxis: ['5月', '6月', '7月', '8月'],
  });
  // 政策推荐列表
  const [policyList] = useState([
    { msg: '芯片需求激增触顶？德州仪器Q3财测不如预期', time: '2021-0723 20:00', qy: '中国半导体行业协会', data: [] },
    { msg: '芯片需求激增触顶？德州仪器Q3财测不如预期', time: '2021-0723 20:00', qy: '中国半导体行业协会', data: [] },
    { msg: '芯片需求激增触顶？德州仪器Q3财测不如预期', time: '2021-0723 20:00', qy: '中国半导体行业协会', data: [] },
    { msg: '芯片需求激增触顶？德州仪器Q3财测不如预期', time: '2021-0723 20:00', qy: '中国半导体行业协会', data: [] },
    { msg: '芯片需求激增触顶？德州仪器Q3财测不如预期', time: '2021-0723 20:00', qy: '中国半导体行业协会', data: ['合成纤维', '行业动态', '企业动态'] },
  ]);
  // const industrType = ['合成纤维', '合成纤维', '合成纤维'];
  const [industrType] = useState([
    {
      title: '产业类型',
      data: ['合成纤维', '合成纤维', '合成纤维', '合成纤维'],
    },
    {
      title: '试点示范',
      data: ['浙江省工程技术研究中心（2019）'],
    },
    {
      title: '资质认证',
      data: ['高新技术企业'],
    },
    {
      title: '融资情况',
      data: ['IPO', '创业板上市', 'A轮'],
    },
    {
      title: '融资情况',
      data: ['全国先进单位'],
    },
  ]);
  const [enterpriseLevelRadarStatistics] = useState({
    abscissa_list: ['1', '2', '3', '4', '5'],
    detail_list: [{
      ordinate: '测试数据',
    }],
  });
  const [histogramData] = useState({
    detail_list: [
      {
        ordinate: ['1', '2', '3', '4', '5', '6'],
        target: '测试',
        unit: '44',
      },
      {
        ordinate: ['1', '2', '3', '4', '5', '6'],
        target: '测试',
        unit: '44',
      },
    ],
    abscissa_list: ['1', '2', '3', '4', '5', '6'],
    abscissa_right_list: ['1', '2', '3', '4', '5', '6'],
    value: '22',

  });
  // 仪表盘的数据
  const [dashboard] = useState([
    {
      value: 22,
      name: '测试',
    },
    {
      value: 33,
      name: '测试',
    },
    {
      value: 44,
      name: '测试',
    },
    {
      value: 44,
      name: '测试',
    },
    {
      value: 66,
      name: '测试',
    },
  ]);
  // 资质认证数据
  const [qualifications] = useState(
    [
      {
        name: '资质认定',
        level: 0,
        children: [
          {
            name: '省级',
            level: 1,
            children: [
              {
                name: '北京市“专精特新”中小企业（第一批）（2022）',
                level: 2,
                children: [
                  {
                    name: '北京磁云唐泉金服科技有限公司',
                    level: 3,
                    children: [],
                  },
                ],
              },
              {
                name: '北京市“专精特新”中小企业（第六批）（2021）',
                level: 2,
                children: [
                  {
                    name: '北京磁云数字科技有限公司',
                    level: 3,
                    children: [],
                  },
                ],
              },
              {
                name: '福建省科技小巨人企业（2021）',
                level: 2,
                children: [
                  {
                    name: '莆田国投云信科技有限责任公司',
                    level: 3,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  );
  // 合作伙伴数据
  const [partnerList] = useState(
    {
      rowEffect: 7057,
      name: '中心',
      value: 0.503,
      children: [

        {
          rowEffect: 7057,
          name: '预售',
          value: 1.0,
        },

        {
          rowEffect: 7057,
          name: 'demo',
          value: 1.0,
        },
      ],
    },
  );
  const [newsList] = useState([
    { tit: '围攻美团：本地生活成香饽饽，社区团购对手棘手', tagList: ['合成纤维', '行业动态', '企业动态', '中立'], time: '2021-07-23', qy: '中国半导体行业协会', abstract: '按照省委、省政府和自然资源部决策部署，依据《中华人民共和国国民经济和社会发展第十四个五年规划和2035年远景目标纲要》《青海省国民经济和社会发展第十四个第十四个四…按照省委、省政府和自然资源部决策部署，依据《中华人民共和国国民经济和社会发展第十四个五年规划和2035年远景目标纲要》《青海省国民经济和社会发展第十四个第十四个四…' },
    { tit: '围攻美团：本地生活成香饽饽，社区团购对手棘手', tagList: ['合成纤维', '行业动态', '企业动态', '中立'], time: '2021-07-23', qy: '中国半导体行业协会', abstract: '按照省委、省政府和自然资源部决策部署，依据《中华人民共和国国民经济和社会发展第十四个五年规划和2035年远景目标纲要》《青海省国民经济和社会发展第十四个第十四个四…按照省委、省政府和自然资源部决策部署，依据《中华人民共和国国民经济和社会发展第十四个五年规划和2035年远景目标纲要》《青海省国民经济和社会发展第十四个第十四个四…' },
    { tit: '围攻美团：本地生活成香饽饽，社区团购对手棘手', tagList: ['合成纤维', '行业动态', '企业动态', '中立'], time: '2021-07-23', qy: '中国半导体行业协会', abstract: '按照省委、省政府和自然资源部决策部署，依据《中华人民共和国国民经济和社会发展第十四个五年规划和2035年远景目标纲要》《青海省国民经济和社会发展第十四个第十四个四…按照省委、省政府和自然资源部决策部署，依据《中华人民共和国国民经济和社会发展第十四个五年规划和2035年远景目标纲要》《青海省国民经济和社会发展第十四个第十四个四…' },
    { tit: '围攻美团：本地生活成香饽饽，社区团购对手棘手', tagList: ['合成纤维', '行业动态', '企业动态', '中立'], time: '2021-07-23', qy: '中国半导体行业协会', abstract: '按照省委、省政府和自然资源部决策部署，依据《中华人民共和国国民经济和社会发展第十四个五年规划和2035年远景目标纲要》《青海省国民经济和社会发展第十四个第十四个四…按照省委、省政府和自然资源部决策部署，依据《中华人民共和国国民经济和社会发展第十四个五年规划和2035年远景目标纲要》《青海省国民经济和社会发展第十四个第十四个四…' },
    { tit: '围攻美团：本地生活成香饽饽，社区团购对手棘手', tagList: ['合成纤维', '行业动态', '企业动态', '中立'], time: '2021-07-23', qy: '中国半导体行业协会', abstract: '按照省委、省政府和自然资源部决策部署，依据《中华人民共和国国民经济和社会发展第十四个五年规划和2035年远景目标纲要' },
    { tit: '围攻美团：本地生活成香饽饽，社区团购对手棘手', tagList: ['合成纤维', '行业动态', '企业动态', '中立'], time: '2021-07-23', qy: '中国半导体行业协会', abstract: '按照省委、省政府和自然资源部决策部署，依据《中华人民共和国国民经济和社会发展第十四个五年规划和2035年远景目标纲要》' },
    { tit: '围攻美团：本地生活成香饽饽，社区团购对手棘手', tagList: ['合成纤维', '行业动态', '企业动态', '中立'], time: '2021-07-23', qy: '中国半导体行业协会', abstract: '按照省委、省政府和自然资源部决策部署，依据《中华人民共和国国民经济和社会发展第十四个五年规划和2035年远景目标纲要》' },
    { tit: '围攻美团：本地生活成香饽饽，社区团购对手棘手', tagList: ['合成纤维', '行业动态', '企业动态', '中立'], time: '2021-07-23', qy: '中国半导体行业协会', abstract: '按照省委、省政府和自然资源部决策部署，依据《中华人民共和国国民经济和社会发展第十四个五年规划和2035年远景目标纲要》' },
  ]);
  return (
    <div className={styles.stockright}>
      <Main type="GovernmentHeader">
        <Back>返回上一页</Back>
        {/* 顶部企业信息 */}
        <div className={styles.topInfoBox}>
          <div className={styles.leftInfo}>
            <div className={styles.leftIconBox}>
              <img src={leftIcon.src} />
            </div>
            <div>
              <span className={styles.topSapn}>桐乡市杰美特科技股份有限公司</span>
              <p>
                <span>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 址</span>
                浙江省嘉兴市桐乡市南湖路报的就34号
              </p>
            </div>
          </div>
          <div className={styles.rightBox}>
            <div className={styles.grade}>
              <span>评价等级</span>
              <span>AAA</span>
            </div>
            <div className={styles.score}>
              <span>综合评分</span>
              <span>78.24分</span>
            </div>
          </div>
        </div>
        {/* 标签 */}
        <div className={styles.tagBox}>
          <EnterpriseTag industrType={industrType} />
        </div>
        {/* 企业信息 */}
        <div className={styles.enterpriseInfo}>
          <div className={styles.infoTit}>企业画像</div>
          <DetailsTit title="工商基本信息" />
          <div className={styles.detailsInfo}>
            <div className={styles.infoItem}>
              <div>
                <span>注册资本</span>
                <p>1342128万人民币</p>
              </div>
              <div>
                <span>成立日期</span>
                <p>
                  2001-06-05
                </p>
              </div>
              <div>
                <span>公司类型</span>
                <p> 有限责任公司(自然人投资或控股)</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div>
                <span>法定代表人</span>
                <p>
                  梁志祥
                </p>
              </div>
              <div>
                <span>经营状态</span>
                <p>在业</p>
              </div>
              <div>
                <span>行业</span>
                <p>科技推广和应用服务业</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div>
                <span>经营范围</span>
                <p>技术转让、技术咨询、技术服务、技术培训、技术推广；设计、开发、销售计算机软件；经济信息咨询；利发布广告；设计、制作、代理、发布广告；货物；设计、开发、销售计算机软件；经济信息咨询；利发布广告；设计、制作、代理、发布广告、技术咨询、技术服务、技术培训、技术推广；设计、开发、销售计算机软件；经济信息咨询；利发布广告；设计、制作、代理、发布广告；货物；设计、开发、销售计算机软件；经济信息咨询；利发布广告；设计、制作、代理、发布广告、技术咨询</p>
              </div>
            </div>
          </div>
          <DetailsTit title="股权结构" />
          <div className={styles.stockRight}>
            <D3ThroughChart data={DataJson} rootName={DataJson.downward.name} />
          </div>
          <DetailsTit title="综合评级" />
          <div className={styles.gradeTop}>
            <div>
              <ReactEcharts
                option={option1(enterpriseLevelRadarStatistics)}
                notMerge
                lazyUpdate
                style={{ height: '360px' }}
              />
            </div>
            <div>
              <ReactEcharts
                option={option2(histogramData)}
                notMerge
                lazyUpdate
                style={{ height: '360px' }}
              />
            </div>
          </div>
          <div className={styles.bottomEchartsBox}>
            {dashboard.map((item, index) => <div key={index}>
              <ReactEcharts
                option={option3(item)}
                notMerge
                lazyUpdate
                style={{ height: '170px' }}
              />
              <div className={styles.dashboardName}>{item.name}</div>
            </div>)}
          </div>
          <DetailsTit title="新闻动态" />
          <div className={styles.newsDynamic}>
            <NewsDynamicList newsList={newsList} />
          </div>
          <div className={styles.paginationBox}>
            <PageFull pageChange={pageChange} current={current} showTotal={`总共 ${total} 个项目`} total={total} />
          </div>
          <DetailsTit title="资质认证" />
          <div className={styles.qualificationsBox}>
            <ReactEcharts
              option={option4(qualifications)}
              notMerge
              lazyUpdate
              style={{ height: '360px' }}
            />
          </div>
          <DetailsTit title="伙伴关系" />
          <div>
            <ReactEcharts
              option={option5(partnerList)}
              notMerge
              lazyUpdate
              style={{ height: '360px' }}
            />
          </div>
          <DetailsTit title="专利情况" />
          <div className={styles.patentBox}>
            <div className={styles.chartBox}>
              <ReactEcharts
                option={option6(patentData)}
                notMerge
                lazyUpdate
                style={{ height: '360px' }}
              />
            </div>
            <div className={styles.tabelBox}>
              <Table
                columns={patentColumns}
                dataSource={tableData}
                pagination={false}
                align="center"
                scroll={{
                  y: 240,
                }}
              />
            </div>
          </div>
          <DetailsTit title="政策推荐" />
          <div>
            <PolicyRecommendationList policyList={policyList} />
          </div>
          <div className={styles.pagination}>
            <PageFull pageChange={pageChange} current={current} showTotal={`总共 ${total} 个项目`} total={total} />
          </div>
        </div>
      </Main >
    </div >
  );
}

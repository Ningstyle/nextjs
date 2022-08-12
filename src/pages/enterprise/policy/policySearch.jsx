import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import PolicyForm from '../../../layout/PolicyForm';
import styles from '../../../styles/enterprise/policySearch.module.less';
import PolicyList from '../../../components/ui/PolicyList';
import SortTag from '../../../components/ui/SortTag';
import PageFull from '../../../components/ui/Pagination';

export default function PolicySearch() {
  const finish = (values) => {
    console.log(values);
  };
  console.log('DataJson', process.browser);
  const handlerSort = (v) => {
    console.log('handlerSort', v);
  };
  const changeCurrent = (page, pageSize) => {
    console.log('222222', page, pageSize);
  };
  const [options] = useState({
    levelData: [ // 政策级别
      { label: '郑州高新区', value: '郑州高新区' },
      { label: '国家级', value: '国家级' },
      { label: '市级', value: '市级' },
      { label: '省级', value: '省级' },
      { label: '园区级', value: '园区级' },
      { label: '区级', value: '区级' },
    ],
    typeData: [ // 政策类型
      { label: '公示公告', value: '公示公告' },
      { label: '申报通知', value: '申报通知' },
      { label: '政策文件', value: '政策文件' },
      { label: '规范性文件', value: '规范性文件' },
      { label: '其他通知', value: '其他通知' },
    ],
    objData: [ // 支持对象
      { label: '事业单位', value: '事业单位' },
      { label: '产业载体', value: '产业载体' },
      { label: '人才', value: '人才' },
      { label: '投资机构', value: '投资机构' },
      { label: '研究机构', value: '研究机构' },
      { label: '社会团体', value: '社会团体' },
      { label: '高校', value: '高校' },
    ],
    modeData: [ // 支持方式
      { label: '人才激励', value: '人才激励' },
      { label: '奖励性后补助', value: '奖励性后补助' },
      { label: '数据开放', value: '数据开放' },
      { label: '服务代金劵/优惠卷', value: '服务代金劵/优惠卷' },
      { label: '物流补贴', value: '物流补贴' },
      { label: '用人补贴', value: '用人补贴' },
      { label: '用地补贴', value: '用地补贴' },
      { label: '租金补贴', value: '租金补贴' },
      { label: '税收优惠', value: '税收优惠' },
      { label: '融资支持', value: '融资支持' },
      { label: '设备保险', value: '设备保险' },
      { label: '购买服务', value: '购买服务' },
      { label: '贷款支持', value: '贷款支持' },
      { label: '资质认定', value: '资质认定' },
      { label: '资金补贴', value: '资金补贴' },
      { label: '风险补偿', value: '风险补偿' },
    ],
    industryTypeData: [ // 产业类型
      { label: '电子信息', value: '公示公告' },
      { label: '石墨及超硬材料', value: '石墨及超硬材料' },
      { label: '氢能储能', value: '氢能储能' },
      { label: '新材料', value: '新材料' },
      { label: '精密测绘', value: '精密测绘' },
      { label: '生命健康', value: '生命健康' },
      { label: '类脑智能', value: '类脑智能' },
      { label: '计算产业', value: '计算产业' },
      { label: '传感器', value: '传感器' },
      { label: '超硬材料', value: '超硬材料' },
      { label: '其他', value: '其他' },
    ],
    branchData: [ // 发文部门
      { label: '工信', value: '工信' },
      { label: '财政', value: '财政' },
      { label: '科技', value: '科技' },
      { label: '税务', value: '税务' },
      { label: '发改', value: '发改' },
      { label: '商务', value: '商务' },
      { label: '人社', value: '人社' },
      { label: '知识产权', value: '知识产权' },
      { label: '文广新', value: '文广新' },
      { label: '农业', value: '农业' },
      { label: '档案', value: '档案' },
      { label: '海关', value: '海关' },
      { label: '统计', value: '统计' },
      { label: '大数据', value: '大数据' },
      { label: '其他', value: '其他' },
    ],
  });
  const [policyData] = useState([
    { title: '【国家级】工业和信息化部办公厅关于开展2022年度国家工业和信息化领域节能技术装备产品推荐工作的通知', publishTime: '2020-06-01', publishCompany: '工信部', declareTime: '2022-09-09 至 2023-09-09', money: '据实际情况给予支持', tags: [{ label: '技术改造', value: '技术改造' }, { label: '技术改造', value: '技术改造' }] },
    { title: '【国家级】工业和信息化部办公厅关于开展2022年度国家工业和信息化领域节能技术装备产品推荐工作的通知', publishTime: '2020-06-01', publishCompany: '工信部', declareTime: '2022-09-09 至 2023-09-09', money: '据实际情况给予支持', tags: [{ label: '技术改造', value: '技术改造' }, { label: '技术改造', value: '技术改造' }] },
  ]);
  return (
    <div>
      <div className={styles.formBox}>
        <PolicyForm options={options} finish={finish} />
      </div>
      <div className={styles.policyListContent}>
        <div className={styles.policyTableHeader}>
          <SortTag handlerSort={handlerSort} >成立日期</SortTag>
          <div>
            为您查询到
            <span>13252</span>
            条政策
          </div>
        </div>
        <PolicyList policyData={policyData} />
      </div>
      <PageFull pageChange={changeCurrent} total={100} />
    </div>
  );
}

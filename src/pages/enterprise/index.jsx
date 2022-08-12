import { useState } from 'react';
import { useRouter } from 'next/router';
import { DatePicker, Table, Tree, message } from 'antd';
import styles from '../../styles/home.module.less';
import Title from '../../components/ui/Title';
import Banner from '../../features/home/components/Banner';
import { useGetNewsByRegionAndIndustryQuery } from '../../services/industryMap';
import ReactEcharts from '../../lib/echarts-for-react';
import Main from '../../layout/BusinessMain';

export default function EnterPriseHome() {
  const router = useRouter();
  const { pid } = router.query;
  const {
    data,
    currentData,
    isFetching,
    isSuccess,
    isError,
  } = useGetNewsByRegionAndIndustryQuery({
    region_code: '410600',
  }, {
    skip: false,
  });

  const [date, setDate] = useState(null);
  const handleChange = value => {
    message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
    setDate(value);
  };

  return (
    <div className={styles.container}>
      <Main indexKey="submenu" type="EnterPriseMainHeader">
        首页
        <br />
        pid:
        {pid}
        <Title>
          标题
          {process.env.NEXT_PUBLIC_OAUTH_URL}
        </Title>
        <Banner />
        <ReactEcharts
          option={{
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            },
            yAxis: {
              type: 'value',
            },
            series: [
              {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line',
              },
            ],
          }}
        />
        <Table />
        <Tree />
        <div style={{ width: 400, margin: '100px auto' }}>
          <DatePicker onChange={handleChange} />
          <div style={{ marginTop: 16 }}>
            当前日期：
            {date ? date.format('YYYY年MM月DD日') : '未选择'}
          </div>
        </div>
        {isSuccess?.toString()}
        <br />
        {isError?.toString()}
        <br />
        {isFetching?.toString()}
        <br />
        {data ? JSON.stringify(data).substring(0, 100) : ''}
        <br />
        {currentData ? JSON.stringify(currentData).substring(0, 100) : ''}
      </Main>
    </div>
  );
}

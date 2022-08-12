/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { SearchOutlined, DownOutlined } from '@ant-design/icons';
import {
  Menu, Avatar, Select, Input, Button,
} from 'antd';
import Head from 'next/head';
import Link from 'next/link';
import styles from './index.module.less';
// eslint-disable-next-line import/order
import { useRouter } from 'next/router';
import GovenLogo from '../../../assets/images/govenLogo.png';

const { Option } = Select;

function Header(props) {
  const { selectKey, type } = props;
  const router = useRouter();
  const [menuData] = useState({
    EnterPriseMenu: [
      { label: '首页', key: '0', path: '/' }, // 菜单项务必填写 key
      { label: '政策超市', key: '1', path: '/enterprise/policy' },
      { label: '政策详情-暂时', key: '2', path: '/enterprise/policy/policyDetails' },
      { label: '服务大厅', key: '3', path: '/' },
    ],
    GovernmentMenu: [
      {
        label: '首页',
        key: '0',
        path: '/government',
        icon: <DownOutlined style={{ float: 'right', margin: '17px 0 0 5px' }} />,
        children: [
          {
            label: '舆情搜索', key: '0-1', path: '/government/sentimentSearch',
          },
          {
            label: '研报搜索', key: '0-2', path: '/government/reportSearch',
          },
          {
            label: '政策搜索', key: '0-3', path: '/government/policySearch',
          },
          {
            label: '政策详情', key: '0-4', path: '/government/policyDetails',
          },
        ],
      }, // 菜单项务必填写 key
      { label: '企业搜索-暂时', key: '1', path: '/government/ensearch' },
      { label: '产业要素-暂时', key: '2', path: '/government/element' },
      { label: '企业搜索-暂时', key: '3', path: '/government/ensearch' },
    ],
  });
  const onClick = (e) => {
    router.push(e.item.props.path);
  };
  // 回车
  const onPressEnter = (e) => {
    console.log(e.target.value);
  };
  // 登录事件
  const goLogin = () => {
    router.push('/login');
  };
  // 注册事件
  const goRegister = () => { };
  return (
    <div className={type === 'EnterPriseMainHeader' ? styles.header : type === 'GovernmentHeader' ? styles.headerGovernment : styles.headerEnterprise}>
      <Head>
        <title>郑州高新区产业大脑</title>
        <meta
          name="description"
          content="郑州高新区产业大脑"
        />
      </Head>
      <div className={styles.headerBlock}>
        <div className={styles.heaerTitle}>
          {type === 'GovernmentHeader' ? <img src={GovenLogo.src} alt="" /> : null}
          <span className={type === 'GovernmentHeader' ? styles.MaintitleGoven : styles.MaintitleEnter}>郑州高新区产业大脑</span>
        </div>
        <div className={styles.headerLink}>
          <div className={styles.linkTabs}>
            <Menu items={type === 'EnterPriseMainHeader' || type === 'EnterPriseBasicHeader' ? menuData.EnterPriseMenu : menuData.GovernmentMenu} mode="horizontal" className={styles.menuCoustom} onClick={onClick} defaultSelectedKeys={selectKey || 'submenu'} />
            {
              type !== 'EnterPriseBasicHeader' ? <div className={styles.selectSearch}>
                <Input.Group compact>
                  <Select defaultValue="资讯" style={{ width: '20%', backgroundColor: 'none' }}>
                    <Option value="政策">政策</Option>
                    <Option value="商机">商机</Option>
                  </Select>
                  <Input style={{ width: '60%' }} placeholder="请输入您需要搜索的关键词" onPressEnter={onPressEnter} />
                  <Button><SearchOutlined /></Button>
                </Input.Group>
              </div> : null
            }
          </div>
          <div className={styles.myCenter}>
            <div className={styles.btnGroups} >
              <Button type="text" onClick={goLogin}>登录</Button>
              <Button onClick={goRegister}>注册</Button>
            </div>
            {
              type === 'GovernmentHeader'
                ? <div>
                  <Avatar size={24} src="https://joeschmoe.io/api/v1/random" />
                  <Link href="/usercenter">
                    <span className={styles.userName}>个人中心</span>
                  </Link>
                </div> : null
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Divider, Tag } from 'antd';
import { useState } from 'react';
import styles from './index.module.less';
import SortTag from '../SortTag';

export default function EnList(props) {
  const { result, itemClick } = props;
  const handlerSort = (v) => {
    console.log('handlerSort', v);
  };
  // 点击事件
  const listClick = (item, index) => {
    itemClick(item, index);
  };
  return (
    <div className={styles.enListBox}>
      <div className={styles.topInfo}>
        <div className={styles.leftTit}>
          当前查询企业数量共计
          <span>364,589</span>
          家
        </div>
        <div className={styles.rightLabel}>
          <SortTag handlerSort={handlerSort} >成立日期</SortTag>
          <SortTag handlerSort={handlerSort} >注册资本</SortTag>
          <SortTag handlerSort={handlerSort} >企业评分</SortTag>

        </div>
      </div>
      {
        result.map((item, index) => <div className={styles.listItem} key={index} onClick={() => listClick(item, index)}>
          <div className={styles.itemTopInfo}>
            <div className={styles.enterpriseINfo}>
              <span className={styles.enterpriseName}>
                {item.name}
              </span>
              <div className={styles.enterpriseRating}>
                <span className={styles.ratingSpan}>企业评分</span>
                <span className={styles.fractionSpan}>98.9分</span>
              </div>
            </div>
            <div className={styles.establishInfo}>
              <span>
                成立日期：
                {item.timeVal}
              </span>
              <span>
                注册资本：
                {item.price}
              </span>
              <span>
                企业评分：
                10
              </span>
            </div>
          </div>
          <div className={styles.tagBox}>
            <div>
              {
                item.data.map((v, i) => <Tag color="magenta" key={i}>{v.name}</Tag>)
              }
            </div>
            <span className={styles.enstatus}>企业状态：存续</span>
          </div>
          <div className={styles.enInfo} >
            <div>
              <span>地址：</span>
              北京市丰台区槐悦佳苑
            </div>
          </div>
          <Divider />
        </div>)

      }
    </div >
  );
}

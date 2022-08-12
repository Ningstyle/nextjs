import { Col, Divider, Row } from 'antd';
import { useState } from 'react';
import styles from './index.module.less';

export default function SmallLabel(props) {
  return (
    <div className={styles.inputContent}>
      <Row gutter={[16, 0]}>
        <Col className="gutter-row" span={6}>
          <div className={styles.itemTitle}>
            发文单位
            <i />
          </div>
          <div className={styles.itemValue}>发改委</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className={styles.itemTitle}>
            政策级别
            <i />
          </div>
          <div className={styles.itemValue}>区级</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className={styles.itemTitle}>
            发文日期
            <i />
          </div>
          <div className={styles.itemValue}>2019-10-11</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className={styles.itemTitle}>
            来源
            <i />
          </div>
          <div className={styles.itemValue}>安徽省人民政府办公厅</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className={styles.itemTitle}>
            政策类型
            <i />
          </div>
          <div className={styles.itemValue}>规范性文件、法律法规</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className={styles.itemTitle}>
            支持对象
            <i />
          </div>
          <div className={styles.itemValue}>投资机构</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className={styles.itemTitle}>
            支持行为
            <i />
          </div>
          <div className={styles.itemValue}>技术研发</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className={styles.itemTitle}>
            支持方式
            <i />
          </div>
          <div className={styles.itemValue}>税收优惠</div>
        </Col>
        <Col className="gutter-row" span={24}>
          <div className={styles.itemTitle}>
            适用范围
            <i />
          </div>
          <div className={styles.itemValue}>河南省 鹤壁市 淇滨区</div>
        </Col>
      </Row>
    </div>
  );
}

import { Divider, Tag } from 'antd';
import { useState } from 'react';
import styles from './index.module.less';

export default function Abstract(props) {
  console.log(props);
  return (
    <div>
      <div className={styles.abstract}>
        <div className={styles.abstractTitle}>摘 要</div>
        <div className={styles.abstractContent}>
          按照省委、省政府和自然资源部决策部署，依据《中华人民共和国国民经济和社会发展第十四个五年规划和2035年远景目标纲要》《青海省国民经济和社会发展策十四个五年规划和二〇三五年远景目标纲要》和《“十四五”自然资源保护和利用规划》，编制《青海省”十四五”自然资源保护和利用规划》，旨在阐明“十四五”期
          间青海省自然咨源保护和利用的基本果路，主要目标和重占条，是指导“十四五”时期海省自然源保护和利用的战略件，基础性文件，是制定相关专项规训
          部署年磨工作和指导各市(州)、县(市区、行委)开展自然咨源领域相关工作的重要依据
        </div>
      </div>
      <div className={styles.abstract}>
        <div className={styles.abstractTitle}>政 策要 点</div>
        <div className={styles.abstractContent}>
          按照省委、省政府和自然资源部决策部署，依据《中华人民共和国国民经济和社会发展第十四个五年规划和2035年远景目标纲要》《青海省国民经济和社会发展策十四个五年规划和二〇三五年远景目标纲要》和《“十四五”自然资源保护和利用规划》，编制《青
        </div>
      </div>
      <div className={styles.urlEnclosure}>
        查看原文链接
        <span>发展改革委商务部令2021年第47号外商投资准入特别管理措施（负面清单）2021年版</span>
        <span>附件</span>
      </div>
    </div>
  );
}

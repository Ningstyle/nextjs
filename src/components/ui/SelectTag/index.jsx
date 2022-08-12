/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import { useState, useEffect, useRef } from 'react';
import styles from './index.module.less';

export default function SelectTag(props) {
  const { tagList, changeTag, type, title } = props;
  const [tagData, setTagData] = useState(tagList);
  const tagRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const [isShowOpen, setIsShowOpen] = useState(false);
  const SelectTag = (item, index) => {
    if (type === 'radio') {
      const arr = [...tagData];
      arr.forEach((v, i) => {
        if (item.label === v.label) {
          v.select = true;
        } else {
          v.select = false;
        }
      });
      setTagData(arr);
      // 返回数据
      changeTag(tagData);
    } else {
      const arr1 = [...tagData];
      // 判断是不是不限
      if (item.label === '不限') {
        arr1.forEach((v, i) => {
          if (i !== 0) {
            v.select = false;
          } else {
            v.select = true;
          }
        });
        setTagData(arr1);
      } else {
        arr1.forEach((v, i) => {
          if (i === 0) {
            v.select = false;
          }
        });
        item.select = !item.select;
        arr1[index] = item;
        setTagData(arr1);
      }

      // 返回数据
      changeTag(tagData);
    }
  };
  useEffect(() => {
    console.log('title', title === undefined);
    if (title === undefined) {
      if (tagRef.current.clientWidth >= 1165) {
        setIsShowOpen(true);
      }
    } else if (tagRef.current.clientWidth >= 1090) {
      setIsShowOpen(true);
    }
  }, []);
  return (
    <div className={isOpen ? styles.tagInnerBox : styles.tagInnerBox1}>
      {title !== undefined ? <div className={[styles.tagLabel, 'customLabelClass'].join(' ')}>
        {title}
      </div> : null}

      <div className={title === undefined ? styles.tagInner1 : styles.tagInner} ref={tagRef}>
        {tagData.map((item, index) => <div className={item.select ? styles.tagItemActive : styles.tagItem} key={index} onClick={() => SelectTag(item, index)}>{item.label}</div>)}
        {isShowOpen ? <span className={styles.openStyle} onClick={() => { setIsOpen(!isOpen); }}>{isOpen ? '展开' : '收起'}</span> : null}
      </div>

    </div>
  );
}

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
/* eslint-disable max-len */
import styles from './index.module.less';
import sortRise from '../../../assets/images/sort-rise.png';
import sortDrop from '../../../assets/images/sort-drop.png';
import sortRiseActive from '../../../assets/images/sort-rise-active.png';
import sortDropActive from '../../../assets/images/sort-drop-active.png';

export default function SortTag(props) {
  const { handlerSort, children } = props;
  const [selectRise, setSelectRise] = useState(false);
  const [selectDrop, setSelectDrop] = useState(false);
  const riseClick = () => {
    setSelectRise(!selectRise);
    setSelectDrop(false);
    handlerSort(selectRise ? 'normal' : 'rise');
  };
  const dropClick = () => {
    setSelectDrop(!selectDrop);
    setSelectRise(false);
    handlerSort(selectDrop ? 'normal' : 'drop');
  };
  return (
    <div className={styles.SortTag}>
      <div className={styles.tagContent}>
        {children}
        <div className={styles.sortTagBox}>
          <div className={styles.sortSpan}>
            <img src={selectRise ? sortRiseActive.src : sortRise.src} alt="" className={styles.rise} onClick={riseClick} />
            <img src={selectDrop ? sortDropActive.src : sortDrop.src} alt="" className={styles.drop} onClick={dropClick} />
          </div>
        </div>
      </div>
    </div>
  );
}
